const fs = require('fs');

function extractBodyContent(html) {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    return bodyMatch ? bodyMatch[1] : html;
}

function convertHtmlToJsx(html) {
    const innerHtml = extractBodyContent(html);
    // Escape backticks and ${}
    const safeHtml = innerHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    
    return `export default function Page() {\n  return (\n    <div className="bg-surface-container-lowest font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen" dangerouslySetInnerHTML={{ __html: \`${safeHtml}\` }} />\n  );\n}`;
}

const file = process.argv[2];
if (file) {
    let html = fs.readFileSync(file, 'utf8');
    fs.writeFileSync(file, convertHtmlToJsx(html));
    console.log("Converted " + file + " using dangerouslySetInnerHTML");
}
