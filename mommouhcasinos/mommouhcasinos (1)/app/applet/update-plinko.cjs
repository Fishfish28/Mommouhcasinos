const fs = require("fs");
let main = fs.readFileSync("main.js", "utf8");

let startIdx = main.indexOf("function formatPlinkoLabel(val)");
let endIdx = main.indexOf("const PLINKO_DIFFICULTIES =", startIdx);

const replacement1 = `function binomialCoefficient(n, k) {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  let c = 1;
  for (let i = 1; i <= k; i++) {
    c = (c * (n - (k - i))) / i;
  }
  return Math.round(c);
}

function getPlinkoProbability(rows, slot) {
  const n = typeof rows === "number" ? rows : 16;
  const k = typeof slot === "number" ? slot : 0;
  return binomialCoefficient(n, k) / Math.pow(2, n);
}

function getPlinkoProbabilities(rows) {
  const n = typeof rows === "number" ? rows : 16;
  const totalCombinations = Math.pow(2, n);
  const probs = [];
  for (let k = 0; k <= n; k++) {
    const coeff = binomialCoefficient(n, k);
    const prob = coeff / totalCombinations;
    probs.push({
      slot: k,
      coeff: coeff,
      prob: prob,
      pct: prob * 100,
      probFraction: coeff + "/" + totalCombinations
    });
  }
  return probs;
}

function formatPlinkoLabel(val) {
  if (val >= 10000) return (val / 1000) + "K";
  if (val >= 1000 && val % 1000 === 0) return (val / 1000) + "K";
  return val.toString();
}

function getPlinkoSlots(difficulty, rows) {
  const mults = PLINKO_MULTIPLIERS[difficulty]?.[rows] || PLINKO_MULTIPLIERS.easy[rows] || PLINKO_MULTIPLIERS.easy[16];
  const probs = getPlinkoProbabilities(rows);
  return mults.map((val, idx) => {
    const probObj = probs[idx] || {
      coeff: binomialCoefficient(rows, idx),
      prob: getPlinkoProbability(rows, idx),
      pct: getPlinkoProbability(rows, idx) * 100,
      probFraction: binomialCoefficient(rows, idx) + "/" + Math.pow(2, rows)
    };
    return {
      label: formatPlinkoLabel(val),
      val: val,
      slot: idx,
      coeff: probObj.coeff,
      prob: probObj.prob,
      chancePct: probObj.pct,
      probFraction: probObj.probFraction,
      title: formatPlinkoLabel(val) + "x (" + probObj.probFraction + " = " + probObj.pct.toFixed(2) + "% chance)"
    };
  });
}

`;

main = main.slice(0, startIdx) + replacement1 + main.slice(endIdx);

let selectStart = main.indexOf("// Binomial Weighted Outcome Selection for any row count (8 to 16)");
let selectEnd = main.indexOf("function generatePlinkoWaypoints(targetSlot, decisions, rows) {", selectStart);

const replacement2 = `// Reusable Binomial Outcome Selection based purely on row count
function selectPlinkoSlot(difficulty, rows) {
  const total = Math.pow(2, rows);
  const roll = Math.random();
  let cumulative = 0;
  for (let k = 0; k <= rows; k++) {
    const prob = binomialCoefficient(rows, k) / total;
    cumulative += prob;
    if (roll < cumulative || k === rows) {
      return k;
    }
  }
  return Math.floor(rows / 2);
}

`;

main = main.slice(0, selectStart) + replacement2 + main.slice(selectEnd);

// Also add title attribute to slot item if present
let slotRenderIdx = main.indexOf('className: "plinko-slot-item",');
if (slotRenderIdx !== -1) {
  main = main.replace('className: "plinko-slot-item",', 'className: "plinko-slot-item",\n                                title: slot.title,');
}

fs.writeFileSync("main.js", main, "utf8");
console.log("Updated main.js with full Plinko probability system!");
