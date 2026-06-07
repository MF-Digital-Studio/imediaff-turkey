const fs = require('fs');

const svgPath = 'public/turkey-map.svg';
let content = fs.readFileSync(svgPath, 'utf8');

const target = 'xml:space="preserve">';
const insertIdx = content.indexOf(target);

if (insertIdx !== -1) {
  const insertPos = insertIdx + target.length;
  const styleBlock = `
  <style>
    path {
      fill: #FE9417;
      stroke: #FFFFFF;
      stroke-width: 0.6px;
      stroke-opacity: 0.3;
      transition: fill 0.3s;
    }
  </style>`;
  
  content = content.slice(0, insertPos) + styleBlock + content.slice(insertPos);
  fs.writeFileSync(svgPath, content, 'utf8');
  console.log("Style block successfully inserted into turkey-map.svg");
} else {
  console.log("Could not find insertion target in turkey-map.svg");
}
