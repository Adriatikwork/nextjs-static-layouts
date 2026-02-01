const https = require('https');
const fs = require('fs');
const path = require('path');

// Service-specific image keywords for better placeholders
const services = {
  'filler-dermici': { main: 'dermal-fillers', keywords: ['lip-filler', 'facial-aesthetics', 'beauty-treatment'] },
  'tossina-botulinica': { main: 'botox-treatment', keywords: ['facial-rejuvenation', 'beauty-clinic', 'aesthetic-medicine'] },
  'biorivitalizzazione': { main: 'skin-rejuvenation', keywords: ['facial-treatment', 'skincare-clinic', 'beauty-spa'] },
  'cure-conservative': { main: 'dental-care', keywords: ['teeth-whitening', 'dental-clinic', 'smile-dentist'] },
  'endodonzia': { main: 'root-canal', keywords: ['dental-treatment', 'dentist-office', 'oral-health'] },
  'chirurgia-orale': { main: 'oral-surgery', keywords: ['dental-surgery', 'dental-implant', 'dentistry'] },
  'igiene-prevenzione': { main: 'dental-hygiene', keywords: ['teeth-cleaning', 'dental-checkup', 'preventive-dentistry'] }
};

// Use Unsplash placeholder API
function getImageUrl(keyword, width = 800, height = 1000) {
  return `https://source.unsplash.com/featured/${width}x${height}/?${keyword},medical,healthcare`;
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAllImages() {
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'services');

  for (const [slug, config] of Object.entries(services)) {
    const serviceDir = path.join(baseDir, slug);

    // Ensure directory exists
    if (!fs.existsSync(serviceDir)) {
      fs.mkdirSync(serviceDir, { recursive: true });
    }

    console.log(`\nDownloading images for ${slug}...`);

    try {
      // Download main image (portrait)
      const mainUrl = getImageUrl(config.main, 800, 1000);
      await downloadImage(mainUrl, path.join(serviceDir, 'main.jpg'));

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Download gallery images (square)
      for (let i = 0; i < config.keywords.length; i++) {
        const keyword = config.keywords[i];
        const galleryUrl = getImageUrl(keyword, 800, 800);
        await downloadImage(galleryUrl, path.join(serviceDir, `gallery-${i + 1}.jpg`));

        // Small delay between requests
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`Error downloading images for ${slug}:`, error.message);
    }
  }

  console.log('\n✅ All images downloaded successfully!');
}

downloadAllImages().catch(console.error);
