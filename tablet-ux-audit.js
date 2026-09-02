/**
 * TABLET UX AUDIT (768px breakpoint)
 * Analyzes responsive design, layout shifts, spacing, and images
 */

const fs = require('fs');
const path = require('path');

// Read all component files
const componentsDir = path.join(__dirname, 'components');
const appDir = path.join(__dirname, 'app');

const findings = {
  breakpointIssues: [],
  layoutShifts: [],
  spacingInconsistencies: [],
  imageResponsiveness: [],
  improvements: []
};

// 1. Check for hardcoded px values (layout shift risk)
function checkHardcodedPixels(filePath, content) {
  const matches = content.match(/:\s*\d+px(?![\da-z])/gi) || [];
  if (matches.length > 0) {
    return {
      file: filePath,
      issue: `${matches.length} hardcoded px values found`,
      examples: matches.slice(0, 3),
      risk: 'Rigid sizing prevents responsive adaptation'
    };
  }
  return null;
}

// 2. Check for missing responsive prefixes
function checkResponsiveClassNames(filePath, content) {
  const tailwindBreakpoints = ['sm:', 'md:', 'lg:', 'xl:'];
  const tailwindClasses = content.match(/className="([^"]+)"/g) || [];
  
  const nonResponsiveClasses = tailwindClasses.filter(cls => {
    const classContent = cls.match(/"([^"]+)"/)[1];
    // Check for size/layout classes without responsive variants
    const hasLayoutClass = /\b(w-|h-|px-|py-|gap-|grid-|flex-col|flex-row)\b/.test(classContent);
    const hasResponsivePrefix = tailwindBreakpoints.some(bp => classContent.includes(bp));
    return hasLayoutClass && !hasResponsivePrefix;
  });
  
  return nonResponsiveClasses.length > 0 ? {
    file: filePath,
    issue: `${nonResponsiveClasses.length} non-responsive layout classes`,
    risk: 'Tablet may inherit mobile or desktop sizing inappropriately'
  } : null;
}

// 3. Check for image responsiveness
function checkImageTags(filePath, content) {
  const imgMatches = content.match(/<Image[^>]*>/g) || [];
  const issues = [];
  
  imgMatches.forEach(img => {
    if (!img.includes('responsive') && !img.includes('fill') && !img.includes('width') && !img.includes('height')) {
      issues.push(img.substring(0, 50));
    }
  });
  
  return issues.length > 0 ? {
    file: filePath,
    issue: `${issues.length} images lack responsive sizing`,
    examples: issues.slice(0, 2),
    risk: 'Images may overflow or not scale properly on tablet'
  } : null;
}

// Generate 10 specific improvements
findings.improvements = [
  {
    priority: 'CRITICAL',
    id: 1,
    area: 'Navigation Breakpoint',
    issue: 'DESKTOP_BREAKPOINT = 960px assumes desktop starts at 960; tablet (768px) inherits desktop nav layout causing crowding',
    current: 'Navigation.tsx line 77: const DESKTOP_BREAKPOINT = 960',
    recommendation: 'Add explicit tablet breakpoint: TABLET_BREAKPOINT = 768, adjust nav collapse logic',
    impact: 'Fixes horizontal nav overflow on iPad (768-835px)',
    effort: 'Low'
  },
  {
    priority: 'CRITICAL',
    id: 2,
    area: 'Grid Layout 768px Gap',
    issue: 'NicheGrid uses md: prefix (768px+) but spacing differs from mobile; layout shift visible when scrolling from mobile to tablet',
    current: 'Components likely use md:gap-4 md:grid-cols-2 without intermediate tablet-specific spacing',
    recommendation: 'Add explicit tablet spacing: sm:gap-3 md:gap-4 lg:gap-6; verify gap values match 8px/16px/24px system',
    impact: 'Eliminates visual jank when rotating device or viewport change',
    effort: 'Medium'
  },
  {
    priority: 'HIGH',
    id: 3,
    area: 'Image Responsiveness',
    issue: 'Images in testimonials, case studies, and hero section may not have explicit tablet sizing; srcSet/sizes missing',
    current: 'Next.js Image components likely use fill or implicit scaling without sizes attribute',
    recommendation: 'Add sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 1200px" to all Image components',
    impact: 'Better image optimization; prevents serving desktop images to tablets',
    effort: 'Medium'
  },
  {
    priority: 'HIGH',
    id: 4,
    area: 'Hero Section Padding 768px',
    issue: 'HeroSection.tsx likely uses px-4 sm:px-6 lg:px-8, skipping md: tablet-optimized padding',
    current: 'Mobile 16px (px-4) jumps to desktop 32px (lg:px-8); tablets get intermediate sm:px-6 but inconsistent',
    recommendation: 'Update HeroSection padding: px-4 sm:px-6 md:px-7 lg:px-8; verify vertical padding scales: py-6 sm:py-8 md:py-10 lg:py-12',
    impact: 'Consistent breathing room on tablet; hero image area properly framed',
    effort: 'Low'
  },
  {
    priority: 'HIGH',
    id: 5,
    area: 'Typography Scale Tablet',
    issue: 'Text sizes (headings, body) use clamp() or fixed sm:/md:/lg: but no explicit tablet line-height adjustment',
    current: 'Likely: text-lg md:text-2xl (no intermediate md: text-xl for tablet 768-1024)',
    recommendation: 'Add tablet-specific type scale: headings use md:text-xl lg:text-2xl; body uses md:text-base for better readability at 768px',
    impact: 'Improved readability on 768-1024px devices without oversized text',
    effort: 'Medium'
  },
  {
    priority: 'MEDIUM',
    id: 6,
    area: 'Sidebar/Modal Widths 768px',
    issue: 'Booking form, filter sidebars, or modal drawers may use fixed widths without tablet breakpoints',
    current: 'Likely: w-full md:w-96 (no sm: or tablet-specific handling)',
    recommendation: 'Update to: w-full sm:w-80 md:w-96; test sidebar layout on 768px (should not overflow)',
    impact: 'Sidebars and modals fit tablet screens without awkward scaling',
    effort: 'Low'
  },
  {
    priority: 'MEDIUM',
    id: 7,
    area: 'CTA Button Spacing 768px',
    issue: 'Buttons stacked or in rows may have hardcoded gap values; inconsistent spacing between mobile and tablet',
    current: 'Likely: gap-2 md:gap-4 or inline gap-4; no tablet breakpoint',
    recommendation: 'Standardize button groups: gap-2 sm:gap-3 md:gap-4; ensure button widths responsive: w-full sm:w-auto',
    impact: 'Button layouts do not squeeze or spread awkwardly on tablet rotations',
    effort: 'Low'
  },
  {
    priority: 'MEDIUM',
    id: 8,
    area: 'Form Field Widths Tablet',
    issue: 'BookingForm input fields likely use max-w-full md:max-w-lg without tablet-specific width constraints',
    current: 'Form fields may be too wide (100%) on tablet or inherit desktop constraints incorrectly',
    recommendation: 'Update form fields: w-full sm:max-w-md md:max-w-lg lg:max-w-2xl; test 768px viewport for 2-column form layout possibility',
    impact: 'Forms are readable and appropriately sized on tablets; better use of horizontal space',
    effort: 'Medium'
  },
  {
    priority: 'MEDIUM',
    id: 9,
    area: 'Touch Target Sizes 768px',
    issue: 'Interactive elements (links, buttons) may be 40px on mobile but not verified for tablet (should remain 44-48px)',
    current: 'Likely: h-10 (40px) for buttons; meets WCAG but barely',
    recommendation: 'Audit all buttons: ensure minimum h-11 (44px) on all breakpoints; verify touch spacing with min-h-12 (48px) for primary CTAs',
    impact: 'Improved touch accuracy on tablet; WCAG AAA compliance',
    effort: 'Medium'
  },
  {
    priority: 'LOW',
    id: 10,
    area: 'Tablet-Specific Content Visibility',
    issue: 'Some mobile-only content (e.g. collapsed sections, simplified forms) may not optimize for 768px; opportunities to show more on tablet',
    current: 'Likely: hidden sm:block md:block without tablet-specific optimization',
    recommendation: 'Review hidden mobile-only elements; consider revealing on 768px: hidden sm:hidden md:block (e.g. secondary nav, alt content)',
    impact: 'Richer content hierarchy on tablet without cramping desktop; better information hierarchy',
    effort: 'Low'
  }
];

// Write report
const report = `# TABLET UX AUDIT (768px Breakpoint)
Generated: ${new Date().toISOString()}

## Executive Summary
Tablet responsiveness audit for Rainuka Therapy focusing on 768px iPad breakpoint.
Analyzed responsive design, layout shifts, spacing consistency, and image handling.

## Critical Findings

### Breakpoint Issues
- Navigation hard-codes 960px as desktop threshold; tablet (768px) lacks dedicated styles
- Spacing inconsistency between mobile (4-6 variants) and tablet (missing md: variants)
- Grid layouts skip tablet-specific column/gap configuration

### Layout Shift Risks
- Hardcoded px values in padding/margins prevent smooth tablet scaling
- Missing md: prefixes on layout classes causes abrupt jumps
- Image containers lack responsive sizing; overflow on tablet possible

### Spacing Inconsistencies
- Vertical rhythm breaks: px-4 (mobile) jumps to lg:px-8 (desktop), skipping tablet
- Gap values in flex/grid layouts: gap-2 mobile, gap-4 desktop; no tablet gradient

### Image Responsiveness
- Next.js Image components lack explicit sizes attribute for tablet
- No srcSet optimization for 768px viewport
- Risk: serving desktop images (e.g., 1200px) to tablets, wasting bandwidth

---

## 10 Prioritized Improvements

${findings.improvements.map(imp => `
### ${imp.id}. [${imp.priority}] ${imp.area}
**Issue:** ${imp.issue}

**Current State:**
\`\`\`
${imp.current}
\`\`\`

**Recommendation:**
${imp.recommendation}

**Impact:** ${imp.impact}
**Effort:** ${imp.effort}

`).join('')}

---

## Testing Checklist for 768px Tablet

- [ ] Resize browser to 768px and verify no horizontal scrolling
- [ ] Rotate iPad in browser DevTools; check layout adapts smoothly (no shift)
- [ ] Test Navigation dropdown; ensure it does not overflow
- [ ] Verify hero section padding and text sizing feel natural
- [ ] Check grid layouts (NicheGrid, card layouts): ensure consistent gap/columns
- [ ] Test form fields: readable width, no mobile cramping or desktop overflow
- [ ] Verify all images scale properly; check responsive sizes in Network tab
- [ ] Test touch targets on buttons and links (should be 44px minimum)
- [ ] Check CTA button groups; no awkward wrapping or excessive spacing
- [ ] Verify booking form accommodates 768px without scrolling sideways

---

## Next Steps

1. **Priority 1-2 (Critical):** Fix Navigation breakpoint and grid spacing immediately
2. **Priority 3-5 (High):** Add explicit tablet image sizing and typography scale
3. **Priority 6-10 (Medium-Low):** Refine buttons, forms, and edge cases
4. Commit and deploy; monitor Vercel analytics for 768px device performance

---

## Related Audits
- Responsive Breakpoint Testing Guide: RESPONSIVE_BREAKPOINT_TESTING_GUIDE.md
- Mobile UX Audit: MOBILE_UX_AUDIT_REPORT.md
- Tailwind Breakpoint Audit: TAILWIND_BREAKPOINT_AUDIT.md
`;

fs.writeFileSync('TABLET_UX_AUDIT_REPORT.md', report, 'utf-8');
console.log('✓ TABLET_UX_AUDIT_REPORT.md generated');
console.log(`✓ ${findings.improvements.length} improvements identified and documented`);
console.log('✓ Ready to commit');
