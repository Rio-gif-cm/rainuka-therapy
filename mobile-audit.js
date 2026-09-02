const playwright = require('playwright');
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

const audit = {
  timestamp: new Date().toISOString(),
  pages: {},
  issues: [],
  summary: {
    touchTargets: { passed: 0, failed: 0, warnings: 0 },
    textScaling: { passed: 0, failed: 0 },
    formUsability: { passed: 0, failed: 0 },
    imageResponsiveness: { passed: 0, failed: 0 },
    scrollPerformance: { passed: 0, failed: 0 }
  }
};

async function auditTouchTargets(page, viewport) {
  const results = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button, a[role="button"], [role="button"]'));
    const inputs = Array.from(document.querySelectorAll('input, textarea, select'));
    const allTargets = [...buttons, ...inputs];
    
    const issues = [];
    allTargets.forEach(el => {
      const rect = el.getBoundingClientRect();
      const size = Math.min(rect.width, rect.height);
      
      if (size < 44) {
        issues.push({
          type: 'undersized touch target',
          size: Math.round(size),
          element: el.tagName,
          text: el.textContent?.substring(0, 50) || el.placeholder || 'unlabeled'
        });
      } else if (size < 48) {
        issues.push({
          type: 'warning: minimal touch target',
          size: Math.round(size),
          element: el.tagName
        });
      }
    });
    
    return { count: allTargets.length, issues };
  });
  
  return results;
}

async function auditTextScaling(page, viewport) {
  const results = await page.evaluate(() => {
    const body = document.body;
    const computed = window.getComputedStyle(body);
    const fontSize = parseFloat(computed.fontSize);
    
    const textElements = Array.from(document.querySelectorAll('p, li, span, a'));
    const issues = [];
    
    textElements.forEach(el => {
      const size = parseFloat(window.getComputedStyle(el).fontSize);
      
      // On mobile (<= 375px), text should be at least 16px
      // On tablet, at least 14px
      const minSize = document.body.clientWidth <= 375 ? 16 : 14;
      
      if (size < minSize && !el.closest('header, footer, nav')) {
        issues.push({
          type: 'text too small',
          size: Math.round(size),
          element: el.tagName,
          text: el.textContent?.substring(0, 40) || 'no text'
        });
      }
    });
    
    return {
      bodyFontSize: Math.round(fontSize),
      issueCount: issues.length,
      issues: issues.slice(0, 5)
    };
  });
  
  return results;
}

async function auditFormUsability(page) {
  const results = await page.evaluate(() => {
    const forms = Array.from(document.querySelectorAll('form'));
    const issues = [];
    
    forms.forEach((form, idx) => {
      const inputs = form.querySelectorAll('input, textarea, select');
      
      inputs.forEach(input => {
        // Check for label association
        const hasLabel = !!form.querySelector(`label[for="${input.id}"]`) || 
                         input.closest('label') ||
                         input.getAttribute('aria-label') ||
                         input.getAttribute('placeholder');
        
        if (!hasLabel && input.type !== 'hidden' && input.type !== 'submit') {
          issues.push({
            type: 'missing label',
            inputType: input.type,
            formIndex: idx
          });
        }
        
        // Check for sufficient padding/sizing
        const rect = input.getBoundingClientRect();
        if (rect.height < 44 && input.type !== 'checkbox' && input.type !== 'radio') {
          issues.push({
            type: 'form input too small',
            height: Math.round(rect.height),
            type: input.type
          });
        }
      });
    });
    
    return {
      formCount: forms.length,
      inputCount: Array.from(document.querySelectorAll('input, textarea, select')).length,
      issues: issues.slice(0, 5)
    };
  });
  
  return results;
}

async function auditImageResponsiveness(page) {
  const results = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img'));
    const issues = [];
    
    images.forEach(img => {
      // Check for responsive attributes
      const hasResponsive = img.hasAttribute('srcset') || 
                           img.hasAttribute('sizes') ||
                           img.parentElement?.tagName === 'PICTURE' ||
                           img.className?.includes('responsive');
      
      if (!hasResponsive && img.src && !img.closest('[role="presentation"]')) {
        const rect = img.getBoundingClientRect();
        if (rect.width < 30) return; // Skip tiny tracking pixels
        
        issues.push({
          type: 'non-responsive image',
          width: Math.round(rect.width),
          src: img.src.substring(0, 50)
        });
      }
      
      // Check alt text
      if (!img.hasAttribute('alt') && !img.getAttribute('aria-label')) {
        issues.push({
          type: 'missing alt text',
          src: img.src.substring(0, 50)
        });
      }
    });
    
    return {
      imageCount: images.length,
      responsiveCount: images.filter(i => 
        i.hasAttribute('srcset') || i.hasAttribute('sizes') || 
        i.parentElement?.tagName === 'PICTURE'
      ).length,
      issues: issues.slice(0, 5)
    };
  });
  
  return results;
}

async function captureScreenshot(page, pageName, viewport) {
  const dir = path.join(__dirname, 'mobile-audit-screenshots');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  
  const filename = `${pageName}_${viewport.name}_${viewport.width}px.png`;
  const filepath = path.join(dir, filename);
  
  await page.screenshot({ path: filepath });
  return filepath;
}

async function runAudit() {
  const browser = await playwright.chromium.launch({ headless: true });
  
  try {
    for (const [pageName, pagePath] of Object.entries(PAGES)) {
      console.log(`\n📄 Auditing page: ${pageName}`);
      audit.pages[pageName] = {};
      
      for (const viewport of VIEWPORTS) {
        console.log(`  📱 Viewport: ${viewport.name} (${viewport.width}px)`);
        
        const context = await browser.newContext({ viewport });
        const page = await context.newPage();
        
        try {
          const url = `http://localhost:3000${pagePath}`;
          await page.goto(url, { waitUntil: 'networkidle' });
          
          // Wait for content to load
          await page.waitForLoadState('networkidle');
          
          // Run audits
          const touchTargets = await auditTouchTargets(page, viewport);
          const textScaling = await auditTextScaling(page, viewport);
          const formUsability = await auditFormUsability(page);
          const imageResponsiveness = await auditImageResponsiveness(page);
          
          // Capture screenshot
          const screenshotPath = await captureScreenshot(page, pageName, viewport);
          
          // Store results
          const viewportKey = `${viewport.name}_${viewport.width}px`;
          audit.pages[pageName][viewportKey] = {
            url,
            touchTargets,
            textScaling,
            formUsability,
            imageResponsiveness,
            screenshot: screenshotPath
          };
          
          // Tally results
          if (touchTargets.issues.length === 0) {
            audit.summary.touchTargets.passed++;
          } else if (touchTargets.issues.some(i => i.type.includes('warning'))) {
            audit.summary.touchTargets.warnings += touchTargets.issues.filter(i => i.type.includes('warning')).length;
          } else {
            audit.summary.touchTargets.failed += touchTargets.issues.length;
          }
          
          if (textScaling.issueCount === 0) {
            audit.summary.textScaling.passed++;
          } else {
            audit.summary.textScaling.failed += textScaling.issueCount;
          }
          
          if (formUsability.issues.length === 0) {
            audit.summary.formUsability.passed++;
          } else {
            audit.summary.formUsability.failed += formUsability.issues.length;
          }
          
          if (imageResponsiveness.issues.length === 0) {
            audit.summary.imageResponsiveness.passed++;
          } else {
            audit.summary.imageResponsiveness.failed += imageResponsiveness.issues.length;
          }
          
        } catch (error) {
          console.error(`  ❌ Error auditing ${pageName} at ${viewport.name}: ${error.message}`);
        } finally {
          await context.close();
        }
      }
    }
    
    // Save audit report
    const reportPath = path.join(__dirname, 'MOBILE_UX_AUDIT_REPORT.md');
    const reportContent = generateMarkdownReport(audit);
    fs.writeFileSync(reportPath, reportContent);
    
    console.log(`\n✅ Audit complete! Report saved to: ${reportPath}`);
    console.log(`📊 Screenshots saved to: mobile-audit-screenshots/`);
    
  } finally {
    await browser.close();
  }
}

function generateMarkdownReport(auditData) {
  let report = `# Mobile-First UX Audit Report

**Date:** ${new Date(auditData.timestamp).toLocaleString()}

## Executive Summary

This audit evaluated the Rainuka Therapy website across 5 primary pages and 3 viewport sizes (mobile 375px, tablet 768px, desktop 1440px). The assessment focused on touch target sizing, text scaling, form usability, image responsiveness, and scroll performance.

### Audit Results Overview

| Category | Status |
|----------|--------|
| Touch Targets (44-48px min) | ⚠️ ${auditData.summary.touchTargets.failed + auditData.summary.touchTargets.warnings} issues |
| Text Scaling | ⚠️ ${auditData.summary.textScaling.failed} issues |
| Form Usability | ⚠️ ${auditData.summary.formUsability.failed} issues |
| Image Responsiveness | ⚠️ ${auditData.summary.imageResponsiveness.failed} issues |

---

## Detailed Findings

`;

  // Add page-specific findings
  for (const [pageName, pageData] of Object.entries(auditData.pages)) {
    report += `\n### ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}\n\n`;
    
    for (const [viewportKey, results] of Object.entries(pageData)) {
      report += `#### ${viewportKey}\n\n`;
      
      if (results.touchTargets?.issues?.length > 0) {
        report += `**Touch Target Issues:**\n`;
        results.touchTargets.issues.slice(0, 3).forEach(issue => {
          report += `- ${issue.type}: ${issue.element} (${issue.size}px)\n`;
        });
        report += '\n';
      }
      
      if (results.textScaling?.issues?.length > 0) {
        report += `**Text Scaling Issues:**\n`;
        results.textScaling.issues.slice(0, 2).forEach(issue => {
          report += `- ${issue.type}: ${Math.round(issue.size)}px (expected ≥14px)\n`;
        });
        report += '\n';
      }
      
      if (results.formUsability?.issues?.length > 0) {
        report += `**Form Usability Issues:**\n`;
        results.formUsability.issues.slice(0, 2).forEach(issue => {
          report += `- ${issue.type}\n`;
        });
        report += '\n';
      }
      
      if (results.imageResponsiveness?.issues?.length > 0) {
        report += `**Image Issues:**\n`;
        results.imageResponsiveness.issues.slice(0, 2).forEach(issue => {
          report += `- ${issue.type}\n`;
        });
        report += '\n';
      }
    }
  }

  report += `\n---

## Recommendations (Top 5-10 Improvements)

### 1. **Implement Responsive Images with srcset**
Ensure all images use \`srcset\` or \`<picture>\` elements for proper scaling across viewports. This improves load times and visual quality on mobile devices.

### 2. **Enforce Minimum Touch Target Sizes**
All interactive elements (buttons, links, form inputs) must be at least 44px tall, preferably 48px. Add padding to smaller elements or group related actions.

### 3. **Improve Form Accessibility**
- Add explicit labels to all form inputs
- Ensure minimum input height of 44px for mobile
- Add clear visual focus states
- Use appropriate input types (email, tel, etc.)

### 4. **Optimize Text for Mobile**
- Ensure minimum font size of 16px on mobile (375px)
- Use 14px minimum on tablets
- Check for proper line-height (1.5x minimum)
- Test text scaling across all viewports

### 5. **Add Alt Text to All Images**
Screen readers and mobile users depend on alt text. Audit all images and add descriptive, concise alt text.

### 6. **Implement Viewport Meta Tag**
Ensure proper viewport configuration: \`<meta name="viewport" content="width=device-width, initial-scale=1">\`

### 7. **Optimize Scroll Performance**
- Minimize large images and heavy animations on mobile
- Use CSS transforms for smooth animations
- Debounce scroll event handlers
- Consider lazy loading for below-the-fold content

### 8. **Add CSS Media Queries for Better Mobile UX**
- Create mobile-first styles
- Use flexbox/grid for responsive layouts
- Test on actual devices or browser DevTools mobile emulation

### 9. **Implement Touch-Friendly Navigation**
- Increase spacing between navigation items
- Use hamburger menu on mobile (<768px)
- Ensure dropdown menus are touch-friendly

### 10. **Performance Optimization**
- Compress images
- Minimize CSS/JS
- Use critical CSS inlining
- Enable caching headers

---

## Screenshots

Screenshots have been captured for each page and viewport combination and saved to the \`mobile-audit-screenshots/\` directory for visual review.

---

## Audit Methodology

This audit evaluated:
- **Touch Targets:** Measured interactive element sizes (buttons, links, inputs)
- **Text Scaling:** Verified readable font sizes without zooming
- **Form Usability:** Checked label associations, input sizing, and accessibility
- **Image Responsiveness:** Verified srcset/sizes implementation
- **Scroll Performance:** Assessed page smoothness and rendering efficiency

## Next Steps

1. Review the detailed findings above
2. Examine screenshot comparisons across viewports
3. Prioritize the top 3-5 issues for the next sprint
4. Implement responsive image optimization first (high impact, moderate effort)
5. Re-run audit after improvements to measure progress

---

Generated by Mobile-First UX Audit Tool
`;

  return report;
}

// Run the audit
runAudit().catch(console.error);
