const fs = require('fs');

const files = [
  'src/app/(dashboard)/dashboard/page.tsx',
  'src/app/(dashboard)/system-design/page.tsx',
  'src/app/(dashboard)/ide-and-ai-solver/page.tsx',
  'src/app/solver/page.tsx'
];

files.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix sidebar links
  content = content.replace(/data-path="dashboard"\s+href="#"/g, 'data-path="dashboard" href="/dashboard"');
  content = content.replace(/data-path="ide-and-ai-solver"\s+href="#"/g, 'data-path="ide-and-ai-solver" href="/ide-and-ai-solver"');
  content = content.replace(/data-path="system-design"\s+href="#"/g, 'data-path="system-design" href="/system-design"');
  content = content.replace(/data-path="behavioral-star"\s+href="#"/g, 'data-path="behavioral-star" href="/star-method"');
  content = content.replace(/data-path="resume-ats"\s+href="#"/g, 'data-path="resume-ats" href="/resume"');
  content = content.replace(/data-path="cs-fundamentals"\s+href="#"/g, 'data-path="cs-fundamentals" href="/fundamentals"');
  content = content.replace(/data-path="settings"\s+href="#"/g, 'data-path="settings" href="/settings"');

  // Fix dashboard CTAs
  content = content.replace(/(<a[^>]*href=")#("[^>]*>\s*<span[^>]*bolt<\/span>\s*<span>Resume Daily Challenge<\/span>)/g, '$1/ide-and-ai-solver$2');
  content = content.replace(/(<a[^>]*href=")#("[^>]*>\s*<span[^>]*smart_toy<\/span>\s*<span>Start AI Mock Interview<\/span>)/g, '$1/interview$2');
  content = content.replace(/(<a[^>]*href=")#("[^>]*>\s*<span>Continue<\/span>)/g, '$1/system-design$2');
  content = content.replace(/(<a[^>]*href=")#("[^>]*>\s*<span>Resume Code<\/span>)/g, '$1/ide-and-ai-solver$2');
  content = content.replace(/(<a[^>]*href=")#("[^>]*>\s*<span>Refine STAR<\/span>)/g, '$1/star-method$2');

  // Make logo clickable
  content = content.replace(
    /(<div class="flex items-center gap-space-sm"><img alt="CodePrep AI Logo" class="h-8 w-auto object-contain" src="\/logo.svg"\/><span class="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">CodePrep AI<\/span><\/div>)/g,
    '<a href="/dashboard" class="flex items-center gap-space-sm"><img alt="CodePrep AI Logo" class="h-8 w-auto object-contain" src="/logo.svg"/><span class="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">CodePrep AI</span></a>'
  );

  fs.writeFileSync(filePath, content);
  console.log(`Fixed navigation links in: ${filePath}`);
});
