const fs = require('fs');
const path = require('path');

function htmlToJsx(html) {
    let bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    let content = bodyMatch ? bodyMatch[1] : html;
    
    // Convert to dangerouslySetInnerHTML string payload
    // Escape backticks and ${}
    content = content.replace(/`/g, '\\`').replace(/\$/g, '\\$');

    return content;
}

const mappings = [
    {
        source: 'C:/Users/Your Sreejon/Desktop/BoT/stitch_design/stitch_codeprep_ai_platform_ui/resume_ats_analyzer/code.html',
        dest: 'C:/Users/Your Sreejon/Desktop/BoT/codeprep-ai/src/app/(dashboard)/resume/page.tsx',
        name: 'ResumePage'
    },
    {
        source: 'C:/Users/Your Sreejon/Desktop/BoT/stitch_design/stitch_codeprep_ai_platform_ui/system_design_whiteboard_simulator/code.html',
        dest: 'C:/Users/Your Sreejon/Desktop/BoT/codeprep-ai/src/app/(dashboard)/system-design/page.tsx',
        name: 'SystemDesignPage'
    },
    {
        source: 'C:/Users/Your Sreejon/Desktop/BoT/stitch_design/stitch_codeprep_ai_platform_ui/user_dashboard_bento_grid/code.html',
        dest: 'C:/Users/Your Sreejon/Desktop/BoT/codeprep-ai/src/app/(dashboard)/dashboard/page.tsx',
        name: 'DashboardPage'
    }
];

mappings.forEach(map => {
    try {
        const html = fs.readFileSync(map.source, 'utf8');
        const innerHtml = htmlToJsx(html);
        
        const template = `"use client";
import { useEffect } from "react";

export default function ${map.name}() {
  useEffect(() => {
    const container = document.getElementById('${map.name.toLowerCase()}-container');
    if (container) {
        const scriptTags = container.getElementsByTagName('script');
        for (let i = 0; i < scriptTags.length; i++) {
            const newScript = document.createElement('script');
            if (scriptTags[i].src) {
                newScript.src = scriptTags[i].src;
            } else {
                newScript.innerHTML = scriptTags[i].innerHTML;
            }
            document.body.appendChild(newScript);
        }
    }
  }, []);

  return (
    <div 
        id="${map.name.toLowerCase()}-container"
        className="w-full h-full bg-[#0e0e10] text-[#e5e1e4]" 
        dangerouslySetInnerHTML={{ __html: \`${innerHtml}\` }} 
    />
  );
}
`;
        fs.writeFileSync(map.dest, template);
        console.log("Done converting " + map.name);
    } catch (e) {
        console.error("Failed for " + map.name, e.message);
    }
});
