const sharp = require("sharp");
const path = require("path");

const W = 1400;
const H = 900;
const NAVY = "#1b1464";
const NAVY_DK = "#0d0a5a";
const RED = "#dd0000";
const BG = "#FAFAFA";
const TEXT = "#111827";
const MUTED = "#6B7280";
const BAR_BG = "#E5E7EB";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="gradNavy" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${NAVY}"/>
      <stop offset="100%" stop-color="${NAVY_DK}"/>
    </linearGradient>
    <linearGradient id="gradRed" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${RED}"/>
      <stop offset="100%" stop-color="#a80000"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="8" in="SourceAlpha"/>
      <feOffset dx="0" dy="4" result="off"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.15"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <rect width="${W}" height="${H}" fill="${BG}"/>

  <rect x="80" y="80" width="${W - 160}" height="${H - 160}" rx="24" fill="#FFFFFF" filter="url(#shadow)"/>

  <text x="${W / 2}" y="180" text-anchor="middle" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="52" font-weight="800" fill="${TEXT}">Annual IT Cost Comparison</text>

  <text x="${W / 2}" y="230" text-anchor="middle" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="24" font-weight="500" fill="${MUTED}">Temrink saves Canadian small businesses thousands every year</text>

  <g font-family="Segoe UI, Arial, Helvetica, sans-serif">

    <text x="140" y="330" font-size="28" font-weight="700" fill="${TEXT}">In-House IT Employee</text>
    <text x="${W - 140}" y="330" text-anchor="end" font-size="28" font-weight="800" fill="${RED}">100,000 dollars per year</text>
    <rect x="140" y="350" width="${W - 280}" height="44" rx="22" fill="${BAR_BG}"/>
    <rect x="140" y="350" width="${W - 280}" height="44" rx="22" fill="url(#gradRed)"/>

    <text x="140" y="480" font-size="28" font-weight="700" fill="${TEXT}">Temrink Managed IT</text>
    <text x="${W - 140}" y="480" text-anchor="end" font-size="28" font-weight="800" fill="${NAVY}">25,000 to 50,000 dollars per year</text>
    <rect x="140" y="500" width="${W - 280}" height="44" rx="22" fill="${BAR_BG}"/>
    <rect x="140" y="500" width="${(W - 280) * 0.4}" height="44" rx="22" fill="url(#gradNavy)"/>

    <g transform="translate(${W / 2}, 680)">
      <rect x="-360" y="-45" width="720" height="90" rx="20" fill="${NAVY}"/>
      <text x="0" y="8" text-anchor="middle" font-size="32" font-weight="800" fill="#FFFFFF">Save up to 75,000 dollars per year</text>
    </g>

    <text x="${W / 2}" y="790" text-anchor="middle" font-size="20" font-weight="500" fill="${MUTED}">Enterprise grade IT without the enterprise cost</text>

  </g>
</svg>
`;

const outPath = path.join(__dirname, "..", "images", "cost-comparison.png");

sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile(outPath)
  .then((info) => {
    console.log("wrote", outPath, info.width + "x" + info.height, info.size, "bytes");
  })
  .catch((err) => {
    console.error("failed", err);
    process.exit(1);
  });
