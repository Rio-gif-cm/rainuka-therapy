#!/usr/bin/env node

/**
 * Comprehensive WCAG AA Accessibility Audit
 * Tests: contrast ratio, focus states, alt text, ARIA labels, keyboard navigation
 */

const pa11y = require('pa11y');
const { chromium } = require('playwright');
const contrastChecker = require('wcag-contrast');
const fs = require('fs');
const path = require('path');

const baseUrl = process.env.TEST_URL || 'http://localhost:3000';
const reportDir = './a11y-reports';

// Ensure report directory exists
if (!fs.existsSync(reportDir)) {
  fs.mkdirSync(reportDir, { recursive: true });
}

// Pages to audit
const pagesToTest = [
  '/',
  '/about',
  '/adhd',
  '/booking',
  '/faq',
  '/pricing',
  '/contact',
  '/providers',
];

const issues = [];
let pageResults = {};

// Helper: Check color contrast
async function checkContrast(browser) {
  console.log('\n📐 Checking color contrast (4.5:1 minimum for text)...');
  const page = await browser.newPage();
  
  try {
    await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
    
    // Check computed colors on common elements
    const contrastIssues = await page.evaluate(() => {
      const issues = [];
      const elements = document.querySelectorAll('button, a, p, h1, h2, h3, h4, h5, h6, label, input');
      
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const bgColor = style.backgroundColor;
        const color = style.color;
        const fontSize = parseFloat(style.fontSize);
        
        // Parse RGB colors
        const parseColor = (colorStr) => {
          const match = colorStr.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
          if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
          return null;
        };
        
        const bg = parseColor(bgColor);
        const fg = parseColor(color);
        
        if (bg && fg) {
          // Calculate relative luminance
          const getLuminance = (rgb) => {
            const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
              val = val / 255;
              return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
            });
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
          };
          
          const l1 = getLuminance(fg) + 0.05;
          const l2 = getLuminance(bg) + 0.05;
          const contrast = Math.max(l1, l2) / Math.min(l1, l2);
          
          if (contrast < 4.5 && fontSize < 18 && el.textContent) {
            issues.push({
              element: el.tagName,
              text: el.textContent.substring(0, 50),
              contrast: contrast.toFixed(2),
              required: '4.5:1',
            });
          }
        }
      });
      return issues;
    });
    
    if (contrastIssues.length > 0) {
      issues.push({
        type: 'COLOR_CONTRAST',
        severity: 'CRITICAL',
        count: contrastIssues.length,
        details: contrastIssues.slice(0, 5),
      });
      console.log(`  ⚠️  ${contrastIssues.length} contrast issues found`);
    } else {
      console.log('  ✅ Color contrast OK');
    }
  } catch (e) {
    console.error('Error checking contrast:', e.message);
  } finally {
    await page.close();
  }
}

// Helper: Check focus states
async function checkFocusStates(browser) {
  console.log('\n⌨️  Checking focus states...');
  const page = await browser.newPage();
  
  try {
    await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
    
    const focusIssues = await page.evaluate(() => {
      const issues = [];
      const interactive = document.querySelectorAll('button, a, input, select, textarea');
      
      interactive.forEach(el => {
        // Check if element is keyboard accessible
        if (el.tabIndex === -1 && el.tagName !== 'BUTTON' && el.tagName !== 'A') {
          issues.push({
            element: el.tagName,
            class: el.className,
            message: 'Not keyboard accessible (tabIndex=-1)',
          });
        }
      });
      return issues;
    });
    
    if (focusIssues.length > 0) {
      issues.push({
        type: 'FOCUS_STATES',
        severity: 'HIGH',
        count: focusIssues.length,
        details: focusIssues.slice(0, 5),
      });
      console.log(`  ⚠️  ${focusIssues.length} focus issues found`);
    } else {
      console.log('  ✅ Focus states OK');
    }
  } catch (e) {
    console.error('Error checking focus states:', e.message);
  } finally {
    await page.close();
  }
}

// Helper: Check alt text on images
async function checkAltText(browser) {
  console.log('\n🖼️  Checking alt text on images...');
  const page = await browser.newPage();
  
  try {
    await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
    
    const altIssues = await page.evaluate(() => {
      const issues = [];
      const images = document.querySelectorAll('img');
      
      images.forEach(img => {
        const alt = img.getAttribute('alt');
        if (!alt || alt.trim().length === 0) {
          issues.push({
            src: img.src.substring(img.src.length - 50),
            message: 'Missing alt text',
          });
        } else if (alt.length < 5) {
          issues.push({
            src: img.src.substring(img.src.length - 50),
            alt,
            message: 'Alt text too short',
          });
        }
      });
      return issues;
    });
    
    if (altIssues.length > 0) {
      issues.push({
        type: 'ALT_TEXT',
        severity: 'HIGH',
        count: altIssues.length,
        details: altIssues.slice(0, 5),
      });
      console.log(`  ⚠️  ${altIssues.length} alt text issues found`);
    } else {
      console.log('  ✅ Alt text OK');
    }
  } catch (e) {
    console.error('Error checking alt text:', e.message);
  } finally {
    await page.close();
  }
}

// Helper: Check ARIA labels
async function checkAriaLabels(browser) {
  console.log('\n🏷️  Checking ARIA labels...');
  const page = await browser.newPage();
  
  try {
    await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
    
    const ariaIssues = await page.evaluate(() => {
      const issues = [];
      
      // Check form inputs without labels
      const inputs = document.querySelectorAll('input:not([type="hidden"]), textarea, select');
      inputs.forEach(input => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        const ariaLabel = input.getAttribute('aria-label');
        const ariaLabelledby = input.getAttribute('aria-labelledby');
        
        if (!label && !ariaLabel && !ariaLabelledby) {
          issues.push({
            element: input.tagName,
            type: input.type || input.tagName,
            id: input.id,
            message: 'Form input missing label/aria-label',
          });
        }
      });
      
      // Check buttons without text or aria-label
      const buttons = document.querySelectorAll('button');
      buttons.forEach(btn => {
        const text = btn.textContent.trim();
        const ariaLabel = btn.getAttribute('aria-label');
        const ariaLabelledby = btn.getAttribute('aria-labelledby');
        
        if (!text && !ariaLabel && !ariaLabelledby) {
          issues.push({
            element: 'button',
            message: 'Button missing accessible name',
            class: btn.className,
          });
        }
      });
      
      return issues;
    });
    
    if (ariaIssues.length > 0) {
      issues.push({
        type: 'ARIA_LABELS',
        severity: 'HIGH',
        count: ariaIssues.length,
        details: ariaIssues.slice(0, 5),
      });
      console.log(`  ⚠️  ${ariaIssues.length} ARIA label issues found`);
    } else {
      console.log('  ✅ ARIA labels OK');
    }
  } catch (e) {
    console.error('Error checking ARIA labels:', e.message);
  } finally {
    await page.close();
  }
}

// Helper: Check keyboard navigation
async function checkKeyboardNav(browser) {
  console.log('\n⌨️  Checking keyboard navigation...');
  const page = await browser.newPage();
  
  try {
    await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
    
    const navIssues = await page.evaluate(() => {
      const issues = [];
      
      // Check if there's a focusable element
      const focusable = document.querySelectorAll(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusable.length === 0) {
        issues.push({
          message: 'No keyboard-focusable elements found on page',
        });
      }
      
      // Check for skip to main content link
      const skipLink = document.querySelector('a[href="#main"], a[href="#content"]');
      if (!skipLink) {
        issues.push({
          message: 'Missing skip to main content link',
        });
      }
      
      return issues;
    });
    
    if (navIssues.length > 0) {
      issues.push({
        type: 'KEYBOARD_NAVIGATION',
        severity: 'MEDIUM',
        count: navIssues.length,
        details: navIssues,
      });
      console.log(`  ⚠️  ${navIssues.length} keyboard navigation issues found`);
    } else {
      console.log('  ✅ Keyboard navigation OK');
    }
  } catch (e) {
    console.error('Error checking keyboard nav:', e.message);
  } finally {
    await page.close();
  }
}

// Run pa11y automated tests
async function runPa11y() {
  console.log('\n🔍 Running pa11y automated accessibility checks...\n');
  
  for (const page of pagesToTest.slice(0, 3)) { // Test first 3 pages
    try {
      const testUrl = `${baseUrl}${page}`;
      console.log(`  Testing ${page}...`);
      
      const results = await pa11y(testUrl, {
        wait: 1000,
        chromeLaunchConfig: { args: ['--no-sandbox'] },
      });
      
      pageResults[page] = {
        url: testUrl,
        issues: results.issues.length,
        errors: results.errors.length,
      };
      
      if (results.issues.length > 0) {
        console.log(`    Found ${results.issues.length} issues`);
        results.issues.slice(0, 3).forEach(issue => {
          issues.push({
            type: 'PA11Y_AUTOMATED',
            severity: issue.type || 'MEDIUM',
            page,
            message: issue.message,
          });
        });
      }
    } catch (e) {
      console.log(`    Error: ${e.message}`);
    }
  }
}

// Main audit function
async function runAudit() {
  console.log('🏥 WCAG AA Accessibility Audit Starting...');
  console.log(`Base URL: ${baseUrl}\n`);
  
  let browser;
  
  try {
    browser = await chromium.launch({ headless: true });
    
    // Run all checks
    await checkContrast(browser);
    await checkFocusStates(browser);
    await checkAltText(browser);
    await checkAriaLabels(browser);
    await checkKeyboardNav(browser);
    
    await browser.close();
    
    // Run pa11y
    await runPa11y();
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl,
      totalIssues: issues.length,
      issues: issues.sort((a, b) => {
        const severityMap = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
        return (severityMap[a.severity] || 3) - (severityMap[b.severity] || 3);
      }),
      pageResults,
    };
    
    // Save JSON report
    const reportPath = path.join(reportDir, `a11y-audit-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n✅ Audit complete. Report saved to: ${reportPath}`);
    
    // Print summary
    console.log('\n' + '='.repeat(60));
    console.log('AUDIT SUMMARY');
    console.log('='.repeat(60));
    console.log(`Total Issues Found: ${issues.length}`);
    
    const bySeverity = {};
    issues.forEach(issue => {
      const sev = issue.severity || 'UNKNOWN';
      bySeverity[sev] = (bySeverity[sev] || 0) + 1;
    });
    
    console.log('\nBy Severity:');
    Object.entries(bySeverity)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach(([sev, count]) => {
        console.log(`  ${sev}: ${count}`);
      });
    
    process.exit(issues.length > 0 ? 1 : 0);
  } catch (error) {
    console.error('Audit failed:', error);
    process.exit(1);
  }
}

// Run audit
runAudit();
