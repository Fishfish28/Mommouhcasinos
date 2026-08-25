import express from 'express';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import multer from 'multer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// ==========================================
// 1. Safe Headers for IFrame Live Preview & OAuth Popups
// ==========================================
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
  // Do not set X-Frame-Options: SAMEORIGIN so AI Studio live preview iframe works cleanly
  next();
});

// Parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==========================================
// 2. Secure Multer File Upload Configuration
// ==========================================
// Store uploads in a dedicated, secure, non-public directory (not exposed via express.static)
const SECURE_UPLOAD_DIR = path.join(__dirname, 'secure_storage', 'uploads');
if (!fs.existsSync(SECURE_UPLOAD_DIR)) {
  fs.mkdirSync(SECURE_UPLOAD_DIR, { recursive: true, mode: 0o700 });
}

// Allowed MIME types whitelist
const ALLOWED_MIME_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'application/pdf'
]);

// Map MIME types to safe extensions to prevent double-extension or executable uploads
const MIME_EXTENSION_MAP = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/gif': '.gif',
  'application/pdf': '.pdf'
};

// Storage engine with cryptographic filename generation
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, SECURE_UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    const ext = MIME_EXTENSION_MAP[file.mimetype] || path.extname(file.originalname).toLowerCase().slice(0, 5);
    const safeUniqueName = `${crypto.randomUUID()}${ext}`;
    cb(null, safeUniqueName);
  }
});

// File filter to validate MIME type
const fileFilter = (req, file, cb) => {
  if (ALLOWED_MIME_TYPES.has(file.mimetype)) {
    cb(null, true);
  } else {
    const error = new Error(`Invalid file type: "${file.mimetype}". Allowed types: ${Array.from(ALLOWED_MIME_TYPES).join(', ')}`);
    error.code = 'INVALID_MIME_TYPE';
    cb(error, false);
  }
};

// Multer upload instance with 5MB file size limit and MIME validation
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB maximum file size
    files: 1
  }
});

// Secure Upload Endpoint
app.post('/api/upload', (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          success: false,
          error: 'File size exceeds maximum allowed limit (5MB).'
        });
      }
      return res.status(400).json({
        success: false,
        error: `Upload validation error: ${err.message}`
      });
    } else if (err) {
      return res.status(400).json({
        success: false,
        error: err.message || 'File upload failed validation.'
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No file provided in request.'
      });
    }

    // Return sanitized file metadata without exposing internal system paths
    return res.status(201).json({
      success: true,
      message: 'File successfully validated and securely stored.',
      file: {
        id: req.file.filename,
        originalName: path.basename(req.file.originalname),
        mimeType: req.file.mimetype,
        size: req.file.size
      }
    });
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', secureUploadsReady: true });
});

// ==========================================
// IP Geolocation & Hungarian IP Detection
// ==========================================
app.get('/api/geo', async (req, res) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  try {
    // 1. Check for query parameter test overrides (useful for development/testing)
    const testCountry = req.query.test_country || (req.query.vpn === '1' || req.query.test_hu === '1' ? 'HU' : null);
    if (testCountry) {
      const code = String(testCountry).toUpperCase();
      return res.json({
        success: true,
        countryCode: code,
        countryName: code === 'HU' ? 'Hungary' : 'Other',
        isHungary: code === 'HU',
        ip: '127.0.0.1 (Test Override)',
        provider: 'test-override'
      });
    }

    // 2. Check standard proxy/CDN headers first
    const cfCountry = req.headers['cf-ipcountry'];
    const appEngineCountry = req.headers['x-appengine-country'];
    const headerCountry = cfCountry || appEngineCountry;

    if (headerCountry && headerCountry.length === 2 && headerCountry !== 'XX' && headerCountry !== 'T1') {
      const code = headerCountry.toUpperCase();
      return res.json({
        success: true,
        countryCode: code,
        countryName: code === 'HU' ? 'Hungary' : code,
        isHungary: code === 'HU',
        ip: req.ip,
        provider: 'cdn-headers'
      });
    }

    // 3. Extract client IP
    const forwarded = req.headers['x-forwarded-for'];
    let clientIp = forwarded ? forwarded.split(',')[0].trim() : req.socket.remoteAddress || req.ip;

    // Normalize IPv6 mapped IPv4
    if (clientIp && clientIp.startsWith('::ffff:')) {
      clientIp = clientIp.substring(7);
    }

    const isPrivateIp = !clientIp || 
      clientIp === '127.0.0.1' || 
      clientIp === '::1' || 
      clientIp.startsWith('10.') || 
      clientIp.startsWith('192.168.') || 
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(clientIp);

    // 4. Query geolocation providers with fallback
    const targetUrl = isPrivateIp ? 'https://ipwho.is/' : `https://ipwho.is/${encodeURIComponent(clientIp)}`;
    
    try {
      const geoRes = await fetch(targetUrl, { signal: AbortSignal.timeout(3000) });
      if (geoRes.ok) {
        const data = await geoRes.json();
        const code = (data.country_code || '').toUpperCase();
        return res.json({
          success: true,
          countryCode: code,
          countryName: data.country || code,
          isHungary: code === 'HU',
          ip: data.ip || clientIp,
          provider: 'ipwho.is'
        });
      }
    } catch (e) {
      // Try secondary provider
      try {
        const altUrl = isPrivateIp ? 'https://freeipapi.com/api/json/' : `https://freeipapi.com/api/json/${encodeURIComponent(clientIp)}`;
        const altRes = await fetch(altUrl, { signal: AbortSignal.timeout(3000) });
        if (altRes.ok) {
          const data = await altRes.json();
          const code = (data.countryCode || '').toUpperCase();
          return res.json({
            success: true,
            countryCode: code,
            countryName: data.countryName || code,
            isHungary: code === 'HU',
            ip: data.ipAddress || clientIp,
            provider: 'freeipapi'
          });
        }
      } catch (e2) {
        // Try third provider
        try {
          const thirdRes = await fetch('https://api.country.is/', { signal: AbortSignal.timeout(2000) });
          if (thirdRes.ok) {
            const data = await thirdRes.json();
            const code = (data.country || '').toUpperCase();
            return res.json({
              success: true,
              countryCode: code,
              countryName: code === 'HU' ? 'Hungary' : code,
              isHungary: code === 'HU',
              ip: data.ip || clientIp,
              provider: 'country.is'
            });
          }
        } catch (e3) {
          // Final fallback
        }
      }
    }

    // Default safe fallback if all external providers fail
    return res.json({
      success: true,
      countryCode: 'UNKNOWN',
      countryName: 'Unknown',
      isHungary: false,
      ip: clientIp,
      provider: 'fallback-default'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to detect geolocation',
      isHungary: false
    });
  }
});

// ==========================================
// ==========================================
// 3. Discord OAuth2 Authentication Endpoints
// ==========================================
const DISCORD_DEFAULT_REDIRECT_URI = 'https://mommouhcasinos.com/api/auth/discord/callback';

function getDiscordRedirectUri(req) {
  if (process.env.DISCORD_REDIRECT_URI) {
    return process.env.DISCORD_REDIRECT_URI;
  }
  if (req && req.query && req.query.redirect_uri) {
    return req.query.redirect_uri;
  }
  return DISCORD_DEFAULT_REDIRECT_URI;
}

function parseCookies(req) {
  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) return {};
  const cookies = {};
  cookieHeader.split(';').forEach(c => {
    const parts = c.split('=');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join('=').trim();
      try {
        cookies[key] = decodeURIComponent(val);
      } catch {
        cookies[key] = val;
      }
    }
  });
  return cookies;
}

// Config check endpoint
app.get('/api/auth/discord/config', (req, res) => {
  const clientId = process.env.DISCORD_CLIENT_ID || null;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET || null;
  const redirectUri = getDiscordRedirectUri(req);

  res.json({
    configured: Boolean(clientId && clientSecret),
    clientId: clientId ? `${clientId.slice(0, 4)}...${clientId.slice(-4)}` : null,
    redirectUri,
    scopes: ['identify', 'email', 'guilds']
  });
});

// Current authenticated Discord user check
app.get('/api/auth/discord/me', (req, res) => {
  const cookies = parseCookies(req);
  if (cookies.mommouh_discord_user) {
    try {
      const user = JSON.parse(cookies.mommouh_discord_user);
      return res.json({ authenticated: true, user });
    } catch (e) {}
  }
  return res.json({ authenticated: false, user: null });
});

// Logout endpoint
app.post('/api/auth/discord/logout', (req, res) => {
  res.setHeader('Set-Cookie', 'mommouh_discord_user=; Path=/; Max-Age=0; SameSite=Lax');
  res.json({ success: true, authenticated: false });
});

// Endpoint that returns authorization URL for popup window or direct redirect
app.get('/api/auth/discord/url', (req, res) => {
  const clientId = process.env.DISCORD_CLIENT_ID;
  const redirectUri = getDiscordRedirectUri(req);
  const clientOrigin = req.query.origin || '';
  
  // Safe state token containing random nonce and verified initiator origin
  const stateObj = {
    nonce: crypto.randomBytes(8).toString('hex'),
    origin: clientOrigin
  };
  const state = Buffer.from(JSON.stringify(stateObj)).toString('base64url');

  if (!clientId) {
    return res.status(400).json({
      success: false,
      configured: false,
      error: 'DISCORD_CLIENT_ID is not configured in environment variables.',
      redirectUri,
      setupHelp: 'Add DISCORD_CLIENT_ID and DISCORD_CLIENT_SECRET in settings or .env file.'
    });
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'identify email guilds',
    state,
    prompt: 'consent'
  });

  const authUrl = `https://discord.com/oauth2/authorize?${params.toString()}`;

  res.json({
    success: true,
    configured: true,
    url: authUrl,
    redirectUri,
    state
  });
});

// OAuth2 Token Exchange Function (Shared between callback and exchange endpoints)
async function exchangeDiscordCodeForUser(code, redirectUri) {
  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Discord API kulcsok (DISCORD_CLIENT_ID / DISCORD_CLIENT_SECRET) nincsenek beállítva a szerveren.');
  }

  // 1. Exchange code for access token
  const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'authorization_code',
      code: String(code),
      redirect_uri: redirectUri
    })
  });

  if (!tokenResponse.ok) {
    const errText = await tokenResponse.text();
    throw new Error(`Token exchange failed (${tokenResponse.status}): ${errText}`);
  }

  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;

  // 2. Fetch user profile from Discord
  const userResponse = await fetch('https://discord.com/api/users/@me', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (!userResponse.ok) {
    throw new Error(`Failed to fetch Discord user: ${userResponse.status}`);
  }

  const user = await userResponse.json();
  
  // Construct sanitized avatar URL
  let avatarUrl = '';
  if (user.avatar) {
    const isGif = user.avatar.startsWith('a_');
    avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${isGif ? 'gif' : 'png'}?size=128`;
  } else {
    const defaultIndex = user.discriminator && user.discriminator !== '0' 
      ? (parseInt(user.discriminator, 10) % 5) 
      : 0;
    avatarUrl = `https://cdn.discordapp.com/embed/avatars/${defaultIndex}.png`;
  }

  const sanitizedUser = {
    id: user.id,
    username: user.username,
    global_name: user.global_name || user.username,
    discriminator: user.discriminator !== '0' ? user.discriminator : null,
    avatar: user.avatar,
    avatar_url: avatarUrl,
    email: user.email || null,
    locale: user.locale || 'hu',
    verified: Boolean(user.verified),
    connectedAt: Date.now()
  };

  return sanitizedUser;
}

// OAuth2 Callback Handler
const handleDiscordCallback = async (req, res) => {
  const { code, state, error, error_description, format } = req.query;
  const redirectUri = getDiscordRedirectUri(req);
  const wantsJson = format === 'json' || (req.headers.accept && req.headers.accept.includes('application/json') && !req.headers.accept.includes('text/html'));

  // Extract client initiator origin from state if present
  let stateOrigin = null;
  if (state) {
    try {
      const decoded = JSON.parse(Buffer.from(state, 'base64url').toString('utf8'));
      if (decoded && decoded.origin) {
        stateOrigin = decoded.origin;
      }
    } catch (e) {}
  }

  // Helper template for popup OAuth responses
  const renderPopupHtml = ({ title, heading, message, statusColor, isSuccess, user, errorType, errorMessage }) => {
    const payload = isSuccess
      ? { type: 'DISCORD_OAUTH_SUCCESS', user, state: state || null }
      : { type: errorType || 'DISCORD_OAUTH_ERROR', error: errorMessage || 'Hiba történt a hitelesítés során.', state: state || null };

    return `<!DOCTYPE html>
<html lang="hu">
  <head>
    <title>${title || 'Discord Hitelesítés'}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      * { box-sizing: border-box; }
      body {
        background: #0f212e;
        color: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0;
        padding: 20px;
        text-align: center;
      }
      .card {
        background: #1a2c38;
        border: 1px solid ${statusColor || '#00e701'};
        border-radius: 18px;
        padding: 32px 24px;
        max-width: 420px;
        width: 100%;
        box-shadow: 0 10px 35px rgba(0, 0, 0, 0.5);
      }
      .avatar {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        margin: 0 auto 12px;
        border: 2px solid #5865F2;
        display: block;
        box-shadow: 0 0 15px rgba(88,101,242,0.5);
        object-fit: cover;
      }
      h2 {
        color: ${statusColor || '#00e701'};
        margin: 0 0 8px;
        font-size: 20px;
      }
      .user-name { font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 2px; }
      .handle { color: #9fb3c8; font-size: 13px; font-family: monospace; margin-bottom: 14px; }
      p {
        color: #cbd5e0;
        font-size: 14px;
        margin: 0 0 20px;
        line-height: 1.5;
      }
      .btn {
        display: inline-block;
        width: 100%;
        padding: 12px 20px;
        background: #233544;
        color: #ffffff;
        text-decoration: none;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 600;
        border: 1px solid rgba(255, 255, 255, 0.15);
        cursor: pointer;
        transition: background 0.2s, border-color 0.2s;
      }
      .btn:hover {
        background: #2d4457;
        border-color: rgba(255, 255, 255, 0.3);
      }
      .btn:active {
        transform: translateY(1px);
      }
    </style>
  </head>
  <body>
    <div class="card">
      ${user && user.avatar_url ? `<img class="avatar" src="${user.avatar_url}" alt="${user.global_name || ''}">` : ''}
      <h2>${heading}</h2>
      ${user ? `<div class="user-name">${user.global_name}</div><div class="handle">@${user.username}</div>` : ''}
      <p id="msg-text">${message}</p>
      <button id="return-btn" class="btn" onclick="handleReturn()">Visszatérés a weboldalra</button>
    </div>
    <script>
      (function() {
        // 1. Immediately clean query parameters (code, state) from URL bar
        try {
          if (window.history && window.history.replaceState) {
            window.history.replaceState({}, document.title, window.location.pathname);
          }
        } catch (e) {}

        var payload = ${JSON.stringify(payload)};
        var stateOrigin = ${JSON.stringify(stateOrigin || null)};

        // Validate allowed origins to prevent broadcasting to unauthorized targets
        function isAllowedOrigin(origin) {
          if (!origin || typeof origin !== 'string') return false;
          try {
            var u = new URL(origin);
            if (u.protocol !== 'https:' && u.protocol !== 'http:') return false;
            var h = u.hostname;
            return h === 'mommouhcasinos.com' ||
                   h === 'www.mommouhcasinos.com' ||
                   h.endsWith('.run.app') ||
                   h.endsWith('.aistudio.google.com') ||
                   h === 'localhost' ||
                   h === '127.0.0.1';
          } catch(e) {
            return false;
          }
        }

        // Build list of unique, verified target origins
        var allowedOrigins = ['https://mommouhcasinos.com', 'https://www.mommouhcasinos.com'];
        if (stateOrigin && isAllowedOrigin(stateOrigin) && allowedOrigins.indexOf(stateOrigin) === -1) {
          allowedOrigins.push(stateOrigin);
        }
        var currentOrigin = window.location.origin;
        if (currentOrigin && isAllowedOrigin(currentOrigin) && allowedOrigins.indexOf(currentOrigin) === -1) {
          allowedOrigins.push(currentOrigin);
        }
        try {
          if (document.referrer) {
            var refOrigin = new URL(document.referrer).origin;
            if (isAllowedOrigin(refOrigin) && allowedOrigins.indexOf(refOrigin) === -1) {
              allowedOrigins.push(refOrigin);
            }
          }
        } catch (e) {}

        // 2. Storage persistence & explicit auth event for cross-tab listeners
        ${isSuccess && user ? `
        try {
          localStorage.setItem('mommouh_discord_user', JSON.stringify(payload.user));
          sessionStorage.setItem('mommouh_discord_user', JSON.stringify(payload.user));
          localStorage.setItem('mommouh_discord_oauth_event', JSON.stringify({ type: 'DISCORD_OAUTH_SUCCESS', time: Date.now(), user: payload.user }));
        } catch (e) {}
        ` : ''}

        // 3. BroadcastChannel sync for open tabs
        try {
          if (typeof BroadcastChannel !== 'undefined') {
            var channel = new BroadcastChannel('mommouh_discord_oauth');
            channel.postMessage(payload);
            setTimeout(function() { try { channel.close(); } catch(e){} }, 500);
          }
        } catch (e) {}

        // 4. Send postMessage to opener with exact, validated target origins (never '*')
        var hasOpener = false;
        try {
          if (window.opener && !window.opener.closed) {
            hasOpener = true;
            for (var i = 0; i < allowedOrigins.length; i++) {
              try {
                window.opener.postMessage(payload, allowedOrigins[i]);
              } catch (e1) {}
            }
          }
        } catch (e) {}

        // 5. Handle popup close or fallback redirection
        if (hasOpener) {
          try {
            window.close();
          } catch (e) {}
          setTimeout(function() {
            try { window.close(); } catch (e) {}
          }, 80);
        } else {
          // If window.opener is unavailable, redirect to origin so user is never stuck on callback URL
          var redirectTarget = (stateOrigin && isAllowedOrigin(stateOrigin)) ? stateOrigin : 'https://mommouhcasinos.com';
          setTimeout(function() {
            try {
              window.location.replace(redirectTarget + '/?discord_connected=1');
            } catch (e) {
              window.location.href = '/?discord_connected=1';
            }
          }, ${isSuccess ? '250' : '1500'});
        }
      })();

      function handleReturn() {
        var stateOrigin = ${JSON.stringify(stateOrigin || null)};
        function isAllowedOrigin(origin) {
          if (!origin || typeof origin !== 'string') return false;
          try {
            var u = new URL(origin);
            if (u.protocol !== 'https:' && u.protocol !== 'http:') return false;
            var h = u.hostname;
            return h === 'mommouhcasinos.com' ||
                   h === 'www.mommouhcasinos.com' ||
                   h.endsWith('.run.app') ||
                   h.endsWith('.aistudio.google.com') ||
                   h === 'localhost' ||
                   h === '127.0.0.1';
          } catch(e) {
            return false;
          }
        }
        var redirectTarget = (stateOrigin && isAllowedOrigin(stateOrigin)) ? stateOrigin : 'https://mommouhcasinos.com';
        try {
          if (window.opener && !window.opener.closed) {
            window.opener.focus();
            window.close();
            return;
          }
        } catch (e) {}
        try {
          window.close();
        } catch (e) {}
        if (!window.closed) {
          window.location.replace(redirectTarget + '/?discord_connected=1');
        }
      }
    </script>
  </body>
</html>`;
  };

  // Handle OAuth cancellation/error parameter from Discord
  if (error) {
    const errorMsg = error_description || error || 'A Discord bejelentkezés meg lett szakítva.';
    if (wantsJson) {
      return res.status(400).json({ success: false, error: errorMsg, code: 'AUTH_CANCELED' });
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
    return res.send(renderPopupHtml({
      title: 'Discord Hitelesítés Megszakítva',
      heading: 'Hitelesítés megszakítva',
      message: errorMsg,
      statusColor: '#fc8181',
      isSuccess: false,
      errorType: 'DISCORD_AUTH_CANCELED',
      errorMessage: errorMsg
    }));
  }

  // Handle missing code parameter
  if (!code) {
    const errorMsg = 'Hiányzó authorization code a Discordtól.';
    if (wantsJson) {
      return res.status(400).json({ success: false, error: errorMsg, code: 'MISSING_CODE' });
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
    return res.status(400).send(renderPopupHtml({
      title: 'Hiányzó Kód',
      heading: 'Hiányzó hitelesítési kód',
      message: errorMsg,
      statusColor: '#fc8181',
      isSuccess: false,
      errorType: 'DISCORD_AUTH_ERROR',
      errorMessage: errorMsg
    }));
  }

  try {
    const sanitizedUser = await exchangeDiscordCodeForUser(code, redirectUri);
    const cookiePayload = encodeURIComponent(JSON.stringify(sanitizedUser));
    // Set cookie for both HTTPS cross-origin iframe/popup contexts and standard navigation
    const isHttps = req.secure || req.headers['x-forwarded-proto'] === 'https';
    const cookieFlags = isHttps
      ? 'Path=/; Max-Age=2592000; SameSite=None; Secure'
      : 'Path=/; Max-Age=2592000; SameSite=Lax';
    res.setHeader('Set-Cookie', `mommouh_discord_user=${cookiePayload}; ${cookieFlags}`);

    if (wantsJson) {
      return res.json({ success: true, user: sanitizedUser });
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
    return res.send(renderPopupHtml({
      title: 'Discord Hitelesítés Sikeres',
      heading: 'Sikeres Discord kapcsolás!',
      message: 'Sikeres Discord kapcsolás – visszatérés a weboldalra',
      statusColor: '#00e701',
      isSuccess: true,
      user: sanitizedUser
    }));
  } catch (err) {
    console.error('Discord OAuth Error:', err);
    const errorMsg = err.message || 'Ismeretlen hiba történt a Discord token lekérésekor.';
    if (wantsJson) {
      return res.status(500).json({ success: false, error: errorMsg });
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
    return res.status(500).send(renderPopupHtml({
      title: 'Discord Hitelesítés — Hiba',
      heading: 'Hiba történt a hitelesítés során',
      message: errorMsg,
      statusColor: '#fc8181',
      isSuccess: false,
      errorType: 'DISCORD_AUTH_ERROR',
      errorMessage: errorMsg
    }));
  }
};

// JSON programmatic exchange endpoint
app.post('/api/auth/discord/exchange', express.json(), async (req, res) => {
  const { code, redirectUri } = req.body || {};
  if (!code) {
    return res.status(400).json({ success: false, error: 'Missing code parameter' });
  }
  const actualRedirectUri = redirectUri || getDiscordRedirectUri(req);
  try {
    const user = await exchangeDiscordCodeForUser(code, actualRedirectUri);
    const cookiePayload = encodeURIComponent(JSON.stringify(user));
    res.setHeader('Set-Cookie', `mommouh_discord_user=${cookiePayload}; Path=/; Max-Age=2592000; SameSite=Lax`);
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/auth/discord/callback', handleDiscordCallback);
app.get('/api/auth/discord/callback/', handleDiscordCallback);
app.post('/api/auth/discord/callback', handleDiscordCallback);

// ==========================================
// 4. Static Assets & Frontend Routing
// ==========================================
// Serve public assets (index.html, static images)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Generic safe error handler (never leak stack traces or internal secrets)
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    error: 'An internal server error occurred.'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running with CSP & Multer at http://0.0.0.0:${PORT}`);
});
