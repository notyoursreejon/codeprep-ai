const fs = require('fs');

const files = [
  'src/app/(dashboard)/dashboard/page.tsx',
  'src/app/(dashboard)/system-design/page.tsx',
  'src/app/(dashboard)/ide-and-ai-solver/page.tsx',
  'src/app/solver/page.tsx'
];

const linkToInsert = '<a class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="analytics" href="/analytics"><span class="material-symbols-outlined text-[18px]">monitoring</span><span class="font-body-md text-body-md">Analytics &amp; Metrics</span></a>';

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('data-path="analytics"')) return;

  const target = 'data-path="system-design" href="/system-design"><span class="material-symbols-outlined text-[18px]">hub</span><span class="font-body-md text-body-md">System Design</span></a>';
  if (content.includes(target)) {
    content = content.replace(target, `${target}${linkToInsert}`);
    fs.writeFileSync(f, content);
    console.log(`Injected Analytics link in ${f}`);
  }
});
