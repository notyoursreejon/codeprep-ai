const fs = require('fs');

// 1. bento-dashboard.tsx
let bento = fs.readFileSync('src/components/ui/bento-dashboard.tsx', 'utf8');
bento = bento.replace(/type:\s*['"]spring['"](?!\s*as\s*const)/g, 'type: "spring" as const');
fs.writeFileSync('src/components/ui/bento-dashboard.tsx', bento);
console.log('Fixed bento-dashboard.tsx');

// 2. stats-card-1.tsx
let stats = fs.readFileSync('src/components/ui/stats-card-1.tsx', 'utf8');
stats = stats.replace(
  "Intl.NumberFormat('en-US').format(latest.toFixed(0))",
  "Intl.NumberFormat('en-US').format(Number(latest.toFixed(0)))"
);
stats = stats.replace(/type:\s*['"]spring['"](?!\s*as\s*const)/g, 'type: "spring" as const');
fs.writeFileSync('src/components/ui/stats-card-1.tsx', stats);
console.log('Fixed stats-card-1.tsx');
