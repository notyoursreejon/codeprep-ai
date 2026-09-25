const fs = require('fs');
const files = [
  'src/app/(dashboard)/dashboard/page.tsx', 
  'src/app/(dashboard)/system-design/page.tsx', 
  'src/app/solver/page.tsx'
];
files.forEach(f => { 
  let content = fs.readFileSync(f, 'utf8'); 
  content = content.replace(/https:\/\/lh3\.googleusercontent\.com\/aida\/[^\s"']+/g, '/logo.svg'); 
  content = content.replace(/https:\/\/lh3\.googleusercontent\.com\/aida-public\/[^\s"']+/g, '/avatar.png'); 
  fs.writeFileSync(f, content); 
  console.log('Updated ' + f); 
});
