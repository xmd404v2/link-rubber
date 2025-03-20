const fs = require('fs');
const path = require('path');

// Simple SVG template for the icon
function generateIconSVG(size) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${size/8}" fill="#4F46E5"/>
  <text x="${size/2}" y="${size/1.6}" font-family="Arial, sans-serif" font-size="${size/2}" font-weight="bold" fill="white" text-anchor="middle">LR</text>
</svg>`;
}

// Icon sizes
const sizes = [16, 48, 128];

// Create public directory if it doesn't exist
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

// Generate icons for each size
sizes.forEach(size => {
  const svg = generateIconSVG(size);
  const filename = path.join('public', `icon${size}.svg`);
  fs.writeFileSync(filename, svg);
  console.log(`Generated ${filename}`);
});

console.log("Icon generation complete. Use a tool like svgexport to convert these to PNG if needed."); 