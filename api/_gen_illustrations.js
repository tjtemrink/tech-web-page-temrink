const sharp = require("sharp");
const path = require("path");

const W = 1000;
const H = 750;
const NAVY = "#1B1464";
const NAVY_DK = "#0d0a3e";
const NAVY_LT = "#2a2080";
const RED = "#DD0000";
const RED_LT = "#ff4444";
const WHITE = "#FFFFFF";
const SOFT_BG = "#F7F8FC";
const ACCENT = "#FFB400";
const TEXT = "#111827";
const MUTED = "#6B7280";

function baseDefs() {
  return `
    <defs>
      <linearGradient id="bgNavy" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${NAVY}"/>
        <stop offset="100%" stop-color="${NAVY_DK}"/>
      </linearGradient>
      <linearGradient id="bgSoft" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#EEF1FA"/>
      </linearGradient>
      <linearGradient id="redGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${RED}"/>
        <stop offset="100%" stop-color="#a80000"/>
      </linearGradient>
      <linearGradient id="navyGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${NAVY_LT}"/>
        <stop offset="100%" stop-color="${NAVY}"/>
      </linearGradient>
      <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="10" in="SourceAlpha"/>
        <feOffset dx="0" dy="6" result="off"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.18"/></feComponentTransfer>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
  `;
}

function frame(inner) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
      ${baseDefs()}
      <rect width="${W}" height="${H}" fill="url(#bgSoft)"/>
      ${inner}
    </svg>
  `;
}

const illustrations = {
  // Microsoft Ecosystem
  "microsoft-ecosystem.png": frame(`
    <rect x="80" y="120" width="${W - 160}" height="${H - 240}" rx="24" fill="${WHITE}" filter="url(#cardShadow)"/>
    <text x="${W / 2}" y="190" text-anchor="middle" font-family="Segoe UI, Arial" font-size="34" font-weight="800" fill="${TEXT}">Microsoft Ecosystem</text>
    <text x="${W / 2}" y="225" text-anchor="middle" font-family="Segoe UI, Arial" font-size="18" font-weight="500" fill="${MUTED}">365, Azure, Intune, Copilot</text>

    <g transform="translate(${W / 2 - 240}, 280)">
      <rect width="220" height="55" rx="10" fill="${SOFT_BG}"/>
      <rect x="14" y="14" width="28" height="28" rx="4" fill="${NAVY}"/>
      <text x="58" y="35" font-family="Segoe UI, Arial" font-size="17" font-weight="600" fill="${TEXT}">Microsoft 365</text>
    </g>
    <g transform="translate(${W / 2 + 20}, 280)">
      <rect width="220" height="55" rx="10" fill="${SOFT_BG}"/>
      <circle cx="28" cy="28" r="14" fill="${NAVY}"/>
      <text x="58" y="35" font-family="Segoe UI, Arial" font-size="17" font-weight="600" fill="${TEXT}">Azure Cloud</text>
    </g>
    <g transform="translate(${W / 2 - 240}, 360)">
      <rect width="220" height="55" rx="10" fill="${SOFT_BG}"/>
      <rect x="14" y="14" width="28" height="28" rx="14" fill="${NAVY}"/>
      <text x="58" y="35" font-family="Segoe UI, Arial" font-size="17" font-weight="600" fill="${TEXT}">Intune Devices</text>
    </g>
    <g transform="translate(${W / 2 + 20}, 360)">
      <rect width="220" height="55" rx="10" fill="${SOFT_BG}"/>
      <path d="M28 14 L42 28 L28 42 L14 28 Z" fill="${NAVY}"/>
      <text x="58" y="35" font-family="Segoe UI, Arial" font-size="17" font-weight="600" fill="${TEXT}">Copilot AI</text>
    </g>
    <g transform="translate(${W / 2 - 240}, 440)">
      <rect width="460" height="55" rx="10" fill="${SOFT_BG}"/>
      <rect x="14" y="14" width="28" height="28" rx="4" fill="${RED}"/>
      <text x="58" y="35" font-family="Segoe UI, Arial" font-size="17" font-weight="600" fill="${TEXT}">Power Platform and Dynamics 365</text>
    </g>

    <text x="${W / 2}" y="${H - 80}" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="600" fill="${RED}">Authorized Microsoft Partner</text>
  `),

  // Google Ecosystem
  "google-ecosystem.png": frame(`
    <rect x="80" y="120" width="${W - 160}" height="${H - 240}" rx="24" fill="${WHITE}" filter="url(#cardShadow)"/>
    <text x="${W / 2}" y="190" text-anchor="middle" font-family="Segoe UI, Arial" font-size="34" font-weight="800" fill="${TEXT}">Google Ecosystem</text>
    <text x="${W / 2}" y="225" text-anchor="middle" font-family="Segoe UI, Arial" font-size="18" font-weight="500" fill="${MUTED}">Workspace, Cloud, Gemini, AppSheet</text>

    <g transform="translate(${W / 2 - 240}, 280)">
      <rect width="220" height="55" rx="10" fill="${SOFT_BG}"/>
      <rect x="14" y="14" width="28" height="28" rx="4" fill="${NAVY}"/>
      <text x="58" y="35" font-family="Segoe UI, Arial" font-size="17" font-weight="600" fill="${TEXT}">Google Workspace</text>
    </g>
    <g transform="translate(${W / 2 + 20}, 280)">
      <rect width="220" height="55" rx="10" fill="${SOFT_BG}"/>
      <circle cx="28" cy="28" r="14" fill="${NAVY}"/>
      <text x="58" y="35" font-family="Segoe UI, Arial" font-size="17" font-weight="600" fill="${TEXT}">Google Cloud</text>
    </g>
    <g transform="translate(${W / 2 - 240}, 360)">
      <rect width="220" height="55" rx="10" fill="${SOFT_BG}"/>
      <path d="M28 14 L42 28 L28 42 L14 28 Z" fill="${NAVY}"/>
      <text x="58" y="35" font-family="Segoe UI, Arial" font-size="17" font-weight="600" fill="${TEXT}">Gemini AI</text>
    </g>
    <g transform="translate(${W / 2 + 20}, 360)">
      <rect width="220" height="55" rx="10" fill="${SOFT_BG}"/>
      <rect x="14" y="14" width="28" height="28" rx="14" fill="${NAVY}"/>
      <text x="58" y="35" font-family="Segoe UI, Arial" font-size="17" font-weight="600" fill="${TEXT}">AppSheet</text>
    </g>
    <g transform="translate(${W / 2 - 240}, 440)">
      <rect width="460" height="55" rx="10" fill="${SOFT_BG}"/>
      <rect x="14" y="14" width="28" height="28" rx="4" fill="${RED}"/>
      <text x="58" y="35" font-family="Segoe UI, Arial" font-size="17" font-weight="600" fill="${TEXT}">Looker Studio and Cloud Migration</text>
    </g>

    <text x="${W / 2}" y="${H - 80}" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="600" fill="${RED}">Certified Google Partner Network</text>
  `),

  // Cloud Infrastructure
  "implementation.png": frame(`
    <rect x="100" y="120" width="${W - 200}" height="${H - 240}" rx="24" fill="${WHITE}" filter="url(#cardShadow)"/>
    <text x="${W / 2}" y="190" text-anchor="middle" font-family="Segoe UI, Arial" font-size="32" font-weight="800" fill="${TEXT}">Cloud Infrastructure</text>
    <text x="${W / 2}" y="225" text-anchor="middle" font-family="Segoe UI, Arial" font-size="17" font-weight="500" fill="${MUTED}">Built on Azure and Google Cloud</text>

    <g transform="translate(${W / 2 - 280}, 280)">
      <rect width="180" height="180" rx="16" fill="url(#navyGrad)"/>
      <text x="90" y="80" text-anchor="middle" font-family="Segoe UI, Arial" font-size="42" font-weight="800" fill="${WHITE}">99.9%</text>
      <text x="90" y="115" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="600" fill="${WHITE}">Uptime SLA</text>
      <text x="90" y="148" text-anchor="middle" font-family="Segoe UI, Arial" font-size="13" font-weight="400" fill="${WHITE}" opacity="0.85">Always Available</text>
    </g>

    <g transform="translate(${W / 2 - 90}, 280)">
      <rect width="180" height="180" rx="16" fill="url(#redGrad)"/>
      <text x="90" y="80" text-anchor="middle" font-family="Segoe UI, Arial" font-size="42" font-weight="800" fill="${WHITE}">24/7</text>
      <text x="90" y="115" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="600" fill="${WHITE}">Monitoring</text>
      <text x="90" y="148" text-anchor="middle" font-family="Segoe UI, Arial" font-size="13" font-weight="400" fill="${WHITE}" opacity="0.85">Proactive Alerts</text>
    </g>

    <g transform="translate(${W / 2 + 100}, 280)">
      <rect width="180" height="180" rx="16" fill="${SOFT_BG}" stroke="${NAVY}" stroke-width="2"/>
      <text x="90" y="80" text-anchor="middle" font-family="Segoe UI, Arial" font-size="42" font-weight="800" fill="${NAVY}">Zero</text>
      <text x="90" y="115" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="600" fill="${NAVY}">Downtime</text>
      <text x="90" y="148" text-anchor="middle" font-family="Segoe UI, Arial" font-size="13" font-weight="400" fill="${MUTED}">Migrations</text>
    </g>

    <text x="${W / 2}" y="${H - 80}" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="500" fill="${MUTED}">Backup, disaster recovery, and full migration support</text>
  `),

  // Managed Devices (DaaS)
  "daas.png": frame(`
    <rect x="100" y="120" width="${W - 200}" height="${H - 240}" rx="24" fill="${WHITE}" filter="url(#cardShadow)"/>
    <text x="${W / 2}" y="190" text-anchor="middle" font-family="Segoe UI, Arial" font-size="32" font-weight="800" fill="${TEXT}">Managed Devices</text>
    <text x="${W / 2}" y="225" text-anchor="middle" font-family="Segoe UI, Arial" font-size="17" font-weight="500" fill="${MUTED}">Zero touch from day one to retirement</text>

    <g transform="translate(${W / 2 - 350}, 290)">
      <rect width="180" height="200" rx="14" fill="${SOFT_BG}"/>
      <rect x="20" y="20" width="140" height="100" rx="8" fill="${NAVY}"/>
      <rect x="50" y="135" width="80" height="6" rx="3" fill="${NAVY_LT}"/>
      <text x="90" y="170" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="700" fill="${TEXT}">Provisioning</text>
      <text x="90" y="190" text-anchor="middle" font-family="Segoe UI, Arial" font-size="12" fill="${MUTED}">Day One Ready</text>
    </g>

    <g transform="translate(${W / 2 - 90}, 290)">
      <rect width="180" height="200" rx="14" fill="${SOFT_BG}"/>
      <circle cx="90" cy="70" r="50" fill="${RED}" opacity="0.12"/>
      <circle cx="90" cy="70" r="32" fill="${RED}"/>
      <text x="90" y="78" text-anchor="middle" font-family="Segoe UI, Arial" font-size="22" font-weight="800" fill="${WHITE}">M</text>
      <text x="90" y="170" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="700" fill="${TEXT}">Intune Managed</text>
      <text x="90" y="190" text-anchor="middle" font-family="Segoe UI, Arial" font-size="12" fill="${MUTED}">Windows and Mac</text>
    </g>

    <g transform="translate(${W / 2 + 170}, 290)">
      <rect width="180" height="200" rx="14" fill="${SOFT_BG}"/>
      <g transform="translate(45, 25)">
        <rect width="90" height="70" rx="6" fill="${NAVY}"/>
        <rect x="20" y="80" width="50" height="8" rx="2" fill="${NAVY}"/>
      </g>
      <text x="90" y="170" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="700" fill="${TEXT}">Lifecycle</text>
      <text x="90" y="190" text-anchor="middle" font-family="Segoe UI, Arial" font-size="12" fill="${MUTED}">Refresh and Retire</text>
    </g>

    <text x="${W / 2}" y="${H - 80}" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="500" fill="${MUTED}">Fully configured. Centrally managed. Securely retired.</text>
  `),

  // AI & Automation
  "ai-automation.png": frame(`
    <rect x="100" y="120" width="${W - 200}" height="${H - 240}" rx="24" fill="${WHITE}" filter="url(#cardShadow)"/>
    <text x="${W / 2}" y="190" text-anchor="middle" font-family="Segoe UI, Arial" font-size="32" font-weight="800" fill="${TEXT}">AI and Automation</text>
    <text x="${W / 2}" y="225" text-anchor="middle" font-family="Segoe UI, Arial" font-size="17" font-weight="500" fill="${MUTED}">Save hours every week with Copilot and Gemini</text>

    <g transform="translate(${W / 2 - 230}, 290)">
      <rect width="200" height="180" rx="16" fill="url(#navyGrad)"/>
      <g transform="translate(70, 35)">
        <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="${WHITE}"/>
        <circle cx="30" cy="30" r="12" fill="${NAVY}"/>
      </g>
      <text x="100" y="135" text-anchor="middle" font-family="Segoe UI, Arial" font-size="20" font-weight="700" fill="${WHITE}">Microsoft Copilot</text>
      <text x="100" y="160" text-anchor="middle" font-family="Segoe UI, Arial" font-size="13" fill="${WHITE}" opacity="0.85">Across Office and Teams</text>
    </g>

    <g transform="translate(${W / 2 + 30}, 290)">
      <rect width="200" height="180" rx="16" fill="url(#redGrad)"/>
      <g transform="translate(75, 35)">
        <circle cx="25" cy="25" r="22" fill="${WHITE}"/>
        <circle cx="25" cy="25" r="10" fill="${RED}"/>
      </g>
      <text x="100" y="135" text-anchor="middle" font-family="Segoe UI, Arial" font-size="20" font-weight="700" fill="${WHITE}">Custom Workflows</text>
      <text x="100" y="160" text-anchor="middle" font-family="Segoe UI, Arial" font-size="13" fill="${WHITE}" opacity="0.85">Power Automate and Beyond</text>
    </g>

    <text x="${W / 2}" y="${H - 80}" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="500" fill="${MUTED}">Real automation. Real time savings. Real ROI.</text>
  `),

  // Helpdesk
  "helpdesk.png": frame(`
    <rect x="100" y="120" width="${W - 200}" height="${H - 240}" rx="24" fill="${WHITE}" filter="url(#cardShadow)"/>
    <text x="${W / 2}" y="190" text-anchor="middle" font-family="Segoe UI, Arial" font-size="32" font-weight="800" fill="${TEXT}">24 by 7 Helpdesk</text>
    <text x="${W / 2}" y="225" text-anchor="middle" font-family="Segoe UI, Arial" font-size="17" font-weight="500" fill="${MUTED}">Real technicians. Real fast. Around the clock.</text>

    <g transform="translate(${W / 2 - 220}, 290)">
      <circle cx="80" cy="80" r="80" fill="url(#navyGrad)"/>
      <text x="80" y="70" text-anchor="middle" font-family="Segoe UI, Arial" font-size="42" font-weight="800" fill="${WHITE}">15</text>
      <text x="80" y="100" text-anchor="middle" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="${WHITE}">minutes</text>
      <text x="80" y="200" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="700" fill="${TEXT}">Average Response</text>
    </g>

    <g transform="translate(${W / 2 - 80}, 290)">
      <circle cx="80" cy="80" r="80" fill="url(#redGrad)"/>
      <text x="80" y="70" text-anchor="middle" font-family="Segoe UI, Arial" font-size="42" font-weight="800" fill="${WHITE}">95</text>
      <text x="80" y="100" text-anchor="middle" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="${WHITE}">percent</text>
      <text x="80" y="200" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="700" fill="${TEXT}">First Call Resolution</text>
    </g>

    <g transform="translate(${W / 2 + 60}, 290)">
      <circle cx="80" cy="80" r="80" fill="${SOFT_BG}" stroke="${NAVY}" stroke-width="3"/>
      <text x="80" y="70" text-anchor="middle" font-family="Segoe UI, Arial" font-size="42" font-weight="800" fill="${NAVY}">24/7</text>
      <text x="80" y="100" text-anchor="middle" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="${NAVY}">always</text>
      <text x="80" y="200" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="700" fill="${TEXT}">Coverage</text>
    </g>

    <text x="${W / 2}" y="${H - 80}" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="500" fill="${MUTED}">Proactive monitoring catches issues before users do.</text>
  `),

  // Licensing
  "licensing.png": frame(`
    <rect x="100" y="120" width="${W - 200}" height="${H - 240}" rx="24" fill="${WHITE}" filter="url(#cardShadow)"/>
    <text x="${W / 2}" y="190" text-anchor="middle" font-family="Segoe UI, Arial" font-size="32" font-weight="800" fill="${TEXT}">Licensing Optimization</text>
    <text x="${W / 2}" y="225" text-anchor="middle" font-family="Segoe UI, Arial" font-size="17" font-weight="500" fill="${MUTED}">50 plus products. One predictable bill.</text>

    <g transform="translate(150, 290)">
      <rect width="${W - 300}" height="48" rx="10" fill="${SOFT_BG}"/>
      <rect width="180" height="48" rx="10" fill="${NAVY}"/>
      <text x="90" y="31" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="700" fill="${WHITE}">Microsoft 365</text>
      <text x="${W - 320}" y="31" text-anchor="end" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="${TEXT}">Business and Enterprise</text>
    </g>

    <g transform="translate(150, 354)">
      <rect width="${W - 300}" height="48" rx="10" fill="${SOFT_BG}"/>
      <rect width="200" height="48" rx="10" fill="${RED}"/>
      <text x="100" y="31" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="700" fill="${WHITE}">Google Workspace</text>
      <text x="${W - 320}" y="31" text-anchor="end" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="${TEXT}">Starter to Enterprise</text>
    </g>

    <g transform="translate(150, 418)">
      <rect width="${W - 300}" height="48" rx="10" fill="${SOFT_BG}"/>
      <rect width="160" height="48" rx="10" fill="${NAVY_LT}"/>
      <text x="80" y="31" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="700" fill="${WHITE}">Dynamics 365</text>
      <text x="${W - 320}" y="31" text-anchor="end" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="${TEXT}">Sales, Service, Finance</text>
    </g>

    <g transform="translate(150, 482)">
      <rect width="${W - 300}" height="48" rx="10" fill="${SOFT_BG}"/>
      <rect width="170" height="48" rx="10" fill="${NAVY}"/>
      <text x="85" y="31" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="700" fill="${WHITE}">Power Platform</text>
      <text x="${W - 320}" y="31" text-anchor="end" font-family="Segoe UI, Arial" font-size="14" font-weight="600" fill="${TEXT}">BI, Apps, Automate</text>
    </g>

    <text x="${W / 2}" y="${H - 80}" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="500" fill="${MUTED}">Right products. Right tier. Right price. Reviewed quarterly.</text>
  `),

  // Migration / Timeline
  "timeline.png": frame(`
    <rect x="100" y="120" width="${W - 200}" height="${H - 240}" rx="24" fill="${WHITE}" filter="url(#cardShadow)"/>
    <text x="${W / 2}" y="190" text-anchor="middle" font-family="Segoe UI, Arial" font-size="32" font-weight="800" fill="${TEXT}">Migration Done Right</text>
    <text x="${W / 2}" y="225" text-anchor="middle" font-family="Segoe UI, Arial" font-size="17" font-weight="500" fill="${MUTED}">Two to four weeks. Zero downtime. Zero data loss.</text>

    <line x1="180" y1="370" x2="${W - 180}" y2="370" stroke="${NAVY}" stroke-width="3" opacity="0.25"/>

    <g transform="translate(180, 350)">
      <circle cx="0" cy="20" r="22" fill="${NAVY}"/>
      <text x="0" y="27" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="800" fill="${WHITE}">1</text>
      <text x="0" y="80" text-anchor="middle" font-family="Segoe UI, Arial" font-size="14" font-weight="700" fill="${TEXT}">Discovery</text>
      <text x="0" y="100" text-anchor="middle" font-family="Segoe UI, Arial" font-size="12" fill="${MUTED}">Week 1</text>
    </g>

    <g transform="translate(390, 350)">
      <circle cx="0" cy="20" r="22" fill="${NAVY}"/>
      <text x="0" y="27" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="800" fill="${WHITE}">2</text>
      <text x="0" y="80" text-anchor="middle" font-family="Segoe UI, Arial" font-size="14" font-weight="700" fill="${TEXT}">Plan</text>
      <text x="0" y="100" text-anchor="middle" font-family="Segoe UI, Arial" font-size="12" fill="${MUTED}">Week 2</text>
    </g>

    <g transform="translate(600, 350)">
      <circle cx="0" cy="20" r="22" fill="${NAVY}"/>
      <text x="0" y="27" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="800" fill="${WHITE}">3</text>
      <text x="0" y="80" text-anchor="middle" font-family="Segoe UI, Arial" font-size="14" font-weight="700" fill="${TEXT}">Migrate</text>
      <text x="0" y="100" text-anchor="middle" font-family="Segoe UI, Arial" font-size="12" fill="${MUTED}">Week 3</text>
    </g>

    <g transform="translate(810, 350)">
      <circle cx="0" cy="20" r="22" fill="${RED}"/>
      <text x="0" y="27" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="800" fill="${WHITE}">4</text>
      <text x="0" y="80" text-anchor="middle" font-family="Segoe UI, Arial" font-size="14" font-weight="700" fill="${TEXT}">Live</text>
      <text x="0" y="100" text-anchor="middle" font-family="Segoe UI, Arial" font-size="12" fill="${MUTED}">Week 4</text>
    </g>

    <g transform="translate(${W / 2 - 200}, 510)">
      <rect width="400" height="60" rx="14" fill="${SOFT_BG}"/>
      <text x="200" y="38" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="700" fill="${NAVY}">Most clients fully transitioned in under a month</text>
    </g>
  `),

  // About / Team / Story image (replaces implementation.webp on about)
  "about-team.png": frame(`
    <rect x="100" y="120" width="${W - 200}" height="${H - 240}" rx="24" fill="${WHITE}" filter="url(#cardShadow)"/>
    <text x="${W / 2}" y="190" text-anchor="middle" font-family="Segoe UI, Arial" font-size="32" font-weight="800" fill="${TEXT}">One Team. Two Ecosystems.</text>
    <text x="${W / 2}" y="225" text-anchor="middle" font-family="Segoe UI, Arial" font-size="17" font-weight="500" fill="${MUTED}">Microsoft and Google certified. Global delivery.</text>

    <g transform="translate(${W / 2 - 280}, 290)">
      <rect width="240" height="200" rx="16" fill="url(#navyGrad)"/>
      <text x="120" y="80" text-anchor="middle" font-family="Segoe UI, Arial" font-size="48" font-weight="800" fill="${WHITE}">MS</text>
      <text x="120" y="125" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="600" fill="${WHITE}">Microsoft Stack</text>
      <text x="120" y="160" text-anchor="middle" font-family="Segoe UI, Arial" font-size="13" fill="${WHITE}" opacity="0.85">365, Azure, Intune</text>
    </g>

    <g transform="translate(${W / 2 + 40}, 290)">
      <rect width="240" height="200" rx="16" fill="url(#redGrad)"/>
      <text x="120" y="80" text-anchor="middle" font-family="Segoe UI, Arial" font-size="48" font-weight="800" fill="${WHITE}">G</text>
      <text x="120" y="125" text-anchor="middle" font-family="Segoe UI, Arial" font-size="16" font-weight="600" fill="${WHITE}">Google Stack</text>
      <text x="120" y="160" text-anchor="middle" font-family="Segoe UI, Arial" font-size="13" fill="${WHITE}" opacity="0.85">Workspace, GCP</text>
    </g>

    <text x="${W / 2}" y="${H - 80}" text-anchor="middle" font-family="Segoe UI, Arial" font-size="15" font-weight="500" fill="${MUTED}">Whatever your shop runs on, we run on it too.</text>
  `)
};

(async () => {
  const outDir = path.join(__dirname, "..", "images");
  for (const [name, svg] of Object.entries(illustrations)) {
    const out = path.join(outDir, name);
    const info = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);
    console.log("wrote", name, info.width + "x" + info.height, info.size + "B");
  }
  console.log("done");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
