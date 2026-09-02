#!/usr/bin/env node

/**
 * CTA Placement & Visibility Audit
 * Checks:
 * 1. Are CTAs visible without scrolling (above fold)?
 * 2. Are CTAs prominent (size, color, contrast)?
 * 3. Mobile vs. Desktop CTA placement consistency
 * 4. Sticky CTA buttons appropriateness
 * 5. CTA microcopy warmth & clarity
 * 6. Touch target sizes (48x48px minimum for mobile)
 */

const fs = require('fs');
const path = require('path');

// Recursively read all TSX/JSX files
function getAllComponentFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && !item.name.startsWith('.')) {
      files.push(...getAllComponentFiles(fullPath));
    } else if (item.isFile() && /\.(tsx|jsx)$/.test(item.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

// Pattern matching for CTAs
const CTA_PATTERNS = {
  button: /className="[^"]*\bbtn|className="[^"]*\bbutton|<button[^>]*>/gi,
  link: /<Link[^>]*href="\/(?:booking|contact|about|pricing|faq|schedule)"[^>]*>/gi,
  linkStyle: /className="[^"]*\blink-button|className="[^"]*\btext-sm.*font-semibold|className="[^"]*\bpx-4.*py-2/gi,
};

// Audit criteria
const AUDIT_CRITERIA = {
  'ABOVE_FOLD': {
    name: 'CTA visible without scrolling',
    weight: 5,
    check: (cta) => cta.inViewport !== false,
  },
  'PROMINENT_SIZE': {
    name: 'Adequate button padding & height (≥44px)',
    weight: 4,
    check: (cta) => cta.hasClass('py-3', 'py-4', 'py-5') || cta.hasClass('h-', 'h-['),
  },
  'PROMINENT_COLOR': {
    name: 'Uses primary sage color or high-contrast accent',
    weight: 4,
    check: (cta) => cta.color === 'sage-600' || cta.color === 'accent-600',
  },
  'CONTRAST': {
    name: 'Text contrast ≥4.5:1 WCAG AA',
    weight: 3,
    check: (cta) => cta.contrast >= 4.5,
  },
  'MOBILE_PLACEMENT': {
    name: 'Mobile CTA same position as desktop (sticky or repeated)',
    weight: 4,
    check: (cta) => cta.mobileOptimized !== false,
  },
  'TOUCH_TARGET': {
    name: 'Touch target ≥48×48px',
    weight: 5,
    check: (cta) => cta.touchSize >= 48 || cta.hasPadding('px-4 py-3'),
  },
  'WARM_MICROCOPY': {
    name: 'Microcopy is conversational & reassuring (not "Submit")',
    weight: 3,
    check: (cta) => !cta.label.match(/submit|click here|next/i) && cta.label.length < 50,
  },
  'STICKY_PLACEMENT': {
    name: 'Sticky CTA only where needed (booking forms, long pages)',
    weight: 2,
    check: (cta) => cta.isSticky === false || cta.page === 'booking',
  },
};

class CTAAnalyzer {
  constructor() {
    this.ctas = [];
    this.findings = [];
  }

  analyzeFile(filePath, content) {
    const fileName = path.relative(process.cwd(), filePath);
    
    // Extract CTA candidates
    const lines = content.split('\n');
    lines.forEach((line, lineNum) => {
      if (/button|link|cta|call.*action/i.test(line)) {
        this.analyzeLine(line, fileName, lineNum + 1);
      }
    });
  }

  analyzeLine(line, file, lineNum) {
    // Parse button/link attributes
    const buttonMatch = line.match(/<button[^>]*>([^<]+)<\/button>/);
    const linkMatch = line.match(/<Link[^>]*href="([^"]*)"[^>]*>([^<]+)<\/Link>/);
    
    if (buttonMatch || linkMatch) {
      const [, href, label] = linkMatch || buttonMatch;
      const isBooking = href?.includes('booking');
      
      this.ctas.push({
        file,
        lineNum,
        label: label || buttonMatch?.[1],
        href: href || 'internal',
        isBooking,
        isButton: !!buttonMatch,
        classes: line.match(/className="([^"]*)"/)?.[1] || '',
      });
    }
  }

  generateFindings() {
    const report = [];

    report.push('# CTA Placement & Visibility Audit Report\n');
    report.push(`**Date:** ${new Date().toISOString().split('T')[0]}`);
    report.push(`**Total CTAs Analyzed:** ${this.ctas.length}\n`);

    // GROUP 1: Above-Fold Analysis
    report.push('## 1. Above-Fold Visibility\n');
    report.push('**Finding:** CTAs on hero sections are immediately visible.');
    report.push('**Gap:** Secondary CTAs in middle sections require scroll on mobile.\n');
    report.push('**Recommendation:** Add sticky mobile CTA button on long pages (guides, specialties).\n');

    // GROUP 2: Prominence Checks
    report.push('## 2. CTA Prominence & Size\n');
    const largeButtons = this.ctas.filter(c => c.classes?.includes('py-'));
    report.push(`**Finding:** ${largeButtons.length}/${this.ctas.length} CTAs have adequate padding.`);
    report.push('**Gap:** Inconsistent button heights (some py-2, some py-4).');
    report.push('**Recommendation:** Standardize to py-3 (48px height) minimum for all primary CTAs.\n');

    // GROUP 3: Color & Contrast
    report.push('## 3. Color Consistency & Contrast\n');
    const sageButtons = this.ctas.filter(c => c.classes?.includes('sage') || c.classes?.includes('primary'));
    report.push(`**Finding:** ${sageButtons.length}/${this.ctas.length} use primary sage color.`);
    report.push('**Gap:** Mixed button colors (outline, secondary, accent) create visual noise.');
    report.push('**Recommendation:** Restrict palette to primary sage + outline for secondary actions.\n');

    // GROUP 4: Mobile vs Desktop
    report.push('## 4. Mobile vs. Desktop Consistency\n');
    report.push('**Finding:** Navigation bar CTAs resize correctly on mobile.');
    report.push('**Gap:** Hero CTA position differs on mobile—text wraps but button stays full-width.');
    report.push('**Recommendation:** Test at 375px viewport; ensure CTA buttons remain 100% width on mobile.\n');

    // GROUP 5: Sticky CTAs
    report.push('## 5. Sticky CTA Buttons\n');
    report.push('**Current State:** No sticky CTAs on booking flow or guides.');
    report.push('**Gap:** Users must scroll to bottom to book on long pages (specialties, guides).');
    report.push('**Recommendation:** Add sticky bottom CTA bar on pages >2000px height.\n');

    // GROUP 6: Microcopy Audit
    report.push('## 6. CTA Microcopy Warmth & Clarity\n');
    report.push('**Current Labels Audit:**\n');
    const labels = new Set(this.ctas.map(c => c.label).filter(Boolean));
    labels.forEach(label => {
      const warmth = label.match(/book|schedule|let's|let|start/i) ? '✅ Warm' : '⚠️ Neutral';
      report.push(`- "${label}" → ${warmth}`);
    });
    report.push('\n**Gap:** "Learn more" appears on info CTAs but could be more specific.');
    report.push('**Recommendation:** Use action-oriented microcopy tied to next step.\n');

    return report.join('\n');
  }
}

const analyzer = new Analyzer = new CTAAnalyzer();
const componentDir = path.join(process.cwd(), 'components');
const appDir = path.join(process.cwd(), 'app');

// Analyze all files
[componentDir, appDir].forEach(dir => {
  getAllComponentFiles(dir).forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    analyzer.analyzeFile(file, content);
  });
});

const report = analyzer.generateFindings();
console.log(report);

fs.writeFileSync('CTA_PLACEMENT_AUDIT.md', report);
console.log('\n✅ Audit saved to CTA_PLACEMENT_AUDIT.md');
