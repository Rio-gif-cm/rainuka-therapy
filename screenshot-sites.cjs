const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to 1920x1080
  await page.setViewport({ width: 1920, height: 1080 });
  
  const pages = [
    { url: 'http://localhost:3000', file: 'screenshot-home.png' },
    { url: 'http://localhost:3000/about', file: 'screenshot-about.png' },
    { url: 'http://localhost:3000/perinatal', file: 'screenshot-perinatal.png' },
    { url: 'http://localhost:3000/booking', file: 'screenshot-booking.png' }
  ];
  
  for (const p of pages) {
    try {
      await page.goto(p.url, { waitUntil: 'networkidle2', timeout: 5000 });
      await page.screenshot({ path: p.file, fullPage: false });
      console.log(`✓ Captured: ${p.file}`);
    } catch (e) {
      console.log(`✗ Failed: ${p.file} - ${e.message}`);
    }
  }
  
  await browser.close();
})();
