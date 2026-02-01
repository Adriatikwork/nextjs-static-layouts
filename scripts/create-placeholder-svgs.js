const fs = require('fs');
const path = require('path');

// Service-specific colors and labels
const services = {
  'filler-dermici': { color: '#E8B4B8', label: 'Filler Dermici', icon: '💉' },
  'tossina-botulinica': { color: '#C9B4E8', label: 'Tossina Botulinica', icon: '✨' },
  'biorivitalizzazione': { color: '#B4E8D4', label: 'Biorivitalizzazione', icon: '🌿' },
  'cure-conservative': { color: '#B4D4E8', label: 'Cure Conservative', icon: '🦷' },
  'endodonzia': { color: '#E8D4B4', label: 'Endodonzia', icon: '🔬' },
  'chirurgia-orale': { color: '#E8C4B4', label: 'Chirurgia Orale', icon: '🏥' },
  'igiene-prevenzione': { color: '#D4E8B4', label: 'Igiene e Prevenzione', icon: '🪥' }
};

function createSVG(width, height, color, label, icon) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${adjustBrightness(color, -20)};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)"/>
  <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle">${icon}</text>
  <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle" opacity="0.9">${label}</text>
</svg>`;
}

function adjustBrightness(color, percent) {
  const num = parseInt(color.replace("#",""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 +
    (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255))
    .toString(16).slice(1);
}

function createPlaceholders() {
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'services');

  for (const [slug, config] of Object.entries(services)) {
    const serviceDir = path.join(baseDir, slug);

    // Ensure directory exists
    if (!fs.existsSync(serviceDir)) {
      fs.mkdirSync(serviceDir, { recursive: true });
    }

    console.log(`Creating placeholders for ${slug}...`);

    // Create main image (portrait 800x1000)
    const mainSVG = createSVG(800, 1000, config.color, config.label, config.icon);
    fs.writeFileSync(path.join(serviceDir, 'main.svg'), mainSVG);

    // Create gallery images (square 800x800) with slight color variations
    for (let i = 1; i <= 3; i++) {
      const variantColor = adjustBrightness(config.color, (i - 2) * 10);
      const gallerySVG = createSVG(800, 800, variantColor, config.label, config.icon);
      fs.writeFileSync(path.join(serviceDir, `gallery-${i}.svg`), gallerySVG);
    }
  }

  console.log('\n✅ All placeholder SVGs created successfully!');
}

createPlaceholders();
