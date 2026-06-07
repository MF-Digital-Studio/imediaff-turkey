const fs = require('fs');

const html = fs.readFileSync('scratch/dnomak-index.html', 'utf8');

const svgStart = html.indexOf('<svg');
const svgEnd = html.indexOf('</svg>');

if (svgStart !== -1 && svgEnd !== -1) {
  let svg = html.substring(svgStart, svgEnd + 6);
  // Remove script tag or other items inside if they exist
  fs.writeFileSync('public/turkey-map.svg', svg);
  console.log("Extracted SVG successfully and saved to public/turkey-map.svg");
} else {
  console.log("Could not find <svg> and </svg> in index.html");
}
