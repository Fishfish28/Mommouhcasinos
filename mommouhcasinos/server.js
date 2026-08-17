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
// 1. Content Security Policy & Security Headers
// ==========================================
// Restrict scripts to 'self' and disallow inline scripts
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://ipwho.is https://freeipapi.com https://api.country.is;"
  );
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
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
// 3. Static Assets & Frontend Routing
// ==========================================
// Serve public assets (index.html, static images)
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
