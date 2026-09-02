const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const PAGES = {
  'home': '/',
  'about': '/about',
  'booking': '/booking',
  'contact': '/contact',
  'faq': '/faq'
};

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];

async function captureScreenshots() {
  const screenshotDir = path.join(__dirname, 'mobile-audit-screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    for (const [pageName, pagePath] of Object.entries(PAGES)) {
      console.log(`\n📄 Capturing: ${pageName}`);

      for (const viewport of VIEWPORTS) {
        console.log(`  📱 ${viewport.name} (${viewport.width}px)`);

        const page = await browser.newPage();
        await page.setViewport(viewport);

        try {
          const url = `http://localhost:3000${pagePath}`;
          await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
          
          const filename = `${pageName}_${viewport.name}_${viewport.width}px.png`;
          const filepath = path.join(screenshotDir, filename);
          
          await page.screenshot({ path: filepath, fullPage: false });
          console.log(`    ✓ Saved: ${filename}`);
        } catch (error) {
          console.error(`    ✗ Error: ${error.message}`);
        } finally {
          await page.close();
        }
      }
    }

    console.log(`\n✅ Screenshots saved to: ${screenshotDir}`);
  } catch (error) {
    console.error('Fatal error:', error);
  } finally {
    if (browser) await browser.close();
  }
}

captureScreenshots();
