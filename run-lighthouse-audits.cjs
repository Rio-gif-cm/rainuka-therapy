#!/usr/bin/env node

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const pages = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
  { path: '/booking', name: 'booking' },
  { path: '/providers', name: 'providers' },
  { path: '/guides', name: 'guides' },
  { path: '/pricing', name: 'pricing' },
  { path: '/adhd', name: 'adhd' },
  { path: '/couples', name: 'couples' },
  { path: '/lgbtq', name: 'lgbtq' },
  { path: '/bipoc', name: 'bipoc' },
  { path: '/men', name: 'men' },
  { path: '/perinatal', name: 'perinatal' },
  { path: '/faq', name: 'faq' },
];

const baseUrl = 'http://localhost:3000';

async function measurePage(browser, url, pageName) {
  const page = await browser.newPage();
  try {
    const navigationTiming = {};
    const resources = [];
    const images = [];
    
    page.on('response', response => {
      const request = response.request();
      resources.push({
        url: request.url(),
        method: request.method(),
        size: response.headers()['content-length'] || 'unknown',
        type: request.resourceType(),
        status: response.status(),
      });
    });

    const startTime = Date.now();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    const totalTime = Date.now() - startTime;

    // Get performance metrics
    const metrics = await page.metrics();
    
    // Get images
    const imgTags = await page.$$eval('img', imgs =>
      imgs.map(img => ({
        src: img.src,
        width: img.naturalWidth,
        height: img.naturalHeight,
        alt: img.alt,
      }))
    );

    // Get CSS size
    const cssSize = await page.$$eval('link[rel="stylesheet"]', links =>
      links.reduce((sum, link) => sum + (link.href ? 1 : 0), 0)
    );

    // Get JS count
    const jsCount = await page.$$eval('script', scripts => scripts.length);

    // Performance audit
    const perfData = await page.evaluate(() => {
      const perfEntries = performance.getEntriesByType('navigation')[0];
      if (!perfEntries) return null;
      return {
        domContentLoaded: perfEntries.domContentLoadedEventEnd - perfEntries.domContentLoadedEventStart,
        loadComplete: perfEntries.loadEventEnd - perfEntries.loadEventStart,
        responseTime: perfEntries.responseEnd - perfEntries.requestStart,
        renderTime: perfEntries.domInteractive - perfEntries.domLoading,
      };
    });

    return {
      page: pageName,
      url,
      timestamp: new Date().toISOString(),
      timing: {
        totalLoadTime: totalTime,
        dcl: perfData?.domContentLoaded || 0,
        loadComplete: perfData?.loadComplete || 0,
        jsHeapSize: metrics.JSHeapUsedSize,
        jsHeapLimit: metrics.JSHeapSize,
      },
      resources: {
        totalRequests: resources.length,
        imageCount: imgTags.length,
        styleSheets: cssSize,
        scripts: jsCount,
        totalSize: resources.reduce((sum, r) => sum + (parseInt(r.size) || 0), 0),
      },
      images: imgTags.slice(0, 10), // First 10 images for detail
      rawResources: resources,
    };
  } catch (error) {
    console.error(`Failed to measure ${pageName}: ${error.message}`);
    return null;
  } finally {
    await page.close();
  }
}

async function runAllMeasurements() {
  console.log('Starting performance measurements with Puppeteer...\n');
  let browser;
  const results = [];

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    for (const page of pages) {
      const url = `${baseUrl}${page.path}`;
      console.log(`Measuring: ${page.name} (${url})`);
      
      const result = await measurePage(browser, url, page.name);
      if (result) {
        results.push(result);
        console.log(`  Load time: ${result.timing.totalLoadTime}ms`);
        console.log(`  Requests: ${result.resources.totalRequests}`);
        console.log(`  Images: ${result.resources.imageCount}`);
        console.log(`  Total size: ${(result.resources.totalSize / 1024).toFixed(2)}KB\n`);
      }
    }
  } finally {
    if (browser) {
      await browser.close();
    }
  }

  // Save summary
  const summaryFile = path.join(__dirname, 'LIGHTHOUSE_SUMMARY.json');
  fs.writeFileSync(summaryFile, JSON.stringify(results, null, 2));

  console.log(`\nMeasurements complete. Summary saved to ${summaryFile}`);
  process.exit(0);
}

runAllMeasurements().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
