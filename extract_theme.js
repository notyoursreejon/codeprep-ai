const fs = require('fs');

const html = fs.readFileSync('temp.html', 'utf8');
const match = html.match(/tailwind\.config\s*=\s*(\{[\s\S]*?\})\s*;/);

if (match) {
    // evaluate the config object safely
    let configStr = match[1];
    // It's a JS object string, not strict JSON. Let's use Function constructor.
    const getConfig = new Function('return ' + configStr);
    const twConfig = getConfig();
    
    // Now extract colors and spacing and typography for TW4 globals.css
    let themeCss = `\n@theme {\n`;
    
    if (twConfig.theme?.extend?.colors) {
        for (const [key, value] of Object.entries(twConfig.theme.extend.colors)) {
            if (typeof value === 'string') {
                themeCss += `  --color-${key}: ${value};\n`;
            }
        }
    }
    
    if (twConfig.theme?.extend?.spacing) {
        for (const [key, value] of Object.entries(twConfig.theme.extend.spacing)) {
            themeCss += `  --spacing-${key}: ${value};\n`;
        }
    }

    if (twConfig.theme?.extend?.fontSize) {
        for (const [key, val] of Object.entries(twConfig.theme.extend.fontSize)) {
            const size = val[0];
            const opts = val[1];
            themeCss += `  --font-size-${key}: ${size};\n`;
            if (opts.lineHeight) themeCss += `  --line-height-${key}: ${opts.lineHeight};\n`;
            if (opts.letterSpacing) themeCss += `  --tracking-${key}: ${opts.letterSpacing};\n`;
            if (opts.fontWeight) themeCss += `  --font-weight-${key}: ${opts.fontWeight};\n`;
        }
    }
    
    themeCss += `}\n`;
    
    const globalsPath = 'src/app/globals.css';
    let globalsCss = fs.readFileSync(globalsPath, 'utf8');
    fs.writeFileSync(globalsPath, globalsCss + themeCss);
    console.log("Updated globals.css with Stitch theme");
} else {
    console.log("Could not find tailwind.config in temp.html");
}
