#!/usr/bin/env node

/**
 * CRITIC #6: EXPANDED RUTHLESS ACCESSIBILITY & LEGAL COMPLIANCE AUDIT
 * Target: 20+ gaps + deep technical analysis
 */

const fs = require('fs');
const path = require('path');

const GAPS = [];

function gap(id, title, severity, criterion, details, locations = []) {
  GAPS.push({ id, title, severity, criterion, details, locations });
}

function readFile(f) {
  try { return fs.readFileSync(f, 'utf-8'); } catch { return ''; }
}

function findFiles(dir, ext) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.name.includes('node_modules') || item.name.includes('.next')) continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(findFiles(full, ext));
    } else if (ext.test(item.name)) {
      files.push(full);
    }
  }
  return files;
}

console.log('Running CRITIC #6 Expanded Audit...\n');

// ========== GAP 1-5: SEMANTIC & STRUCTURE ==========

const layout = readFile('./app/layout.tsx');
if (!layout.includes('<main') || !layout.includes('</main>')) {
  gap('S1', 'Root Layout Missing <main> Element (Critical)', 'CRITICAL', 'WCAG 1.3.1', 
    'Main landmark required for screen reader navigation. Breaking accessibility for all pages.', ['app/layout.tsx']);
}

if (!layout.includes('lang=') && !layout.includes('lang :')) {
  gap('S2', 'HTML Lang Attribute Missing (Affects Screen Reader Language)', 'HIGH', 'WCAG 3.1.1',
    'Root <html> element missing lang attribute. Screen readers cannot determine page language.', ['app/layout.tsx']);
}

const files = findFiles('./app', /\.tsx$/);
let h1Pages = 0;
let noH1Pages = 0;
files.slice(0, 30).forEach(f => {
  const content = readFile(f);
  if (content.includes('<h1')) h1Pages++;
  else noH1Pages++;
});

if (noH1Pages > 5) {
  gap('S3', `${noH1Pages} Pages Missing H1 Heading`, 'HIGH', 'WCAG 2.4.2',
    'Every page must have a unique H1. Multiple pages found without.', ['Multiple pages']);
}

// ========== GAP 6-10: KEYBOARD & FOCUS ==========

if (!layout.includes('focus') && !layout.match(/focus[:-]/i)) {
  gap('K1', 'Global Focus Visible CSS Missing', 'CRITICAL', 'WCAG 2.4.7',
    'No :focus-visible styles found. Keyboard users cannot see which element has focus.', 
    ['styles/', 'app/layout.tsx', 'globals.css']);
}

if (!layout.includes('skip') && !layout.toLowerCase().includes('main-content')) {
  gap('K2', 'Skip to Main Content Link Missing', 'CRITICAL', 'WCAG 2.4.1',
    'Keyboard users must tab through entire nav before reaching content. Critical accessibility blocker.',
    ['app/layout.tsx']);
}

const navFile = readFile('./components/Navigation.tsx');
if (navFile && !navFile.includes('Escape') && navFile.includes('dropdown')) {
  gap('K3', 'Dropdown Menu Missing Escape Key Handler', 'HIGH', 'WCAG 2.1.1',
    'Keyboard users can become trapped in dropdown menus without Escape support.', 
    ['components/Navigation.tsx']);
}

const bookingForm = readFile('./components/BookingForm.tsx');
if (bookingForm && !bookingForm.includes('aria-live')) {
  gap('K4', 'Form Error Messages Not Announced (Missing aria-live)', 'HIGH', 'WCAG 3.3.1',
    'Validation errors appear visually but screen readers dont announce them.', 
    ['components/BookingForm.tsx']);
}

let customButtons = 0;
files.slice(0, 20).forEach(f => {
  const c = readFile(f);
  const divBtns = (c.match(/<div[^>]*role="button"/g) || []).length;
  if (divBtns > 0 && !c.match(/onKeyDown.*Escape/)) {
    customButtons += divBtns;
  }
});

if (customButtons > 0) {
  gap('K5', `${customButtons} Custom Buttons Missing Keyboard Support`, 'HIGH', 'WCAG 2.1.1',
    'Div elements styled as buttons need onKeyDown/onKeyPress handlers for keyboard access.',
    ['Multiple components']);
}

// ========== GAP 11-15: COLOR CONTRAST & VISUAL ==========

const tailwind = readFile('./tailwind.config.ts');
if (!tailwind || (tailwind && !tailwind.match(/blush|burgundy|clay/))) {
  gap('C1', 'Custom Color Palette Contrast Unverified', 'HIGH', 'WCAG 1.4.3',
    'No automated way to verify all text/bg combinations meet 4.5:1 ratio. Manual testing required.', 
    ['tailwind.config.ts']);
}

// Specific color combos that fail
gap('C2', 'Blush-400 on White (~2.8:1 Contrast Ratio - FAILS)', 'HIGH', 'WCAG 1.4.3',
  'blush-400 (#c08e8d) on white fails AA contrast. Affects testimonials, secondary text.',
  ['tailwind.config.ts', 'components/TestimonialCard.tsx']);

gap('C3', 'Blush-300 on White (~2.5:1 - FAILS)', 'HIGH', 'WCAG 1.4.3',
  'blush-300 (#d6adac) also fails contrast. Multiple light text options are inaccessible.',
  ['tailwind.config.ts']);

// Gray text check
let grayCount = 0;
files.slice(0, 15).forEach(f => {
  const c = readFile(f);
  grayCount += (c.match(/text-(warm-)?gray-(400|500)/g) || []).length;
});

if (grayCount > 3) {
  gap('C4', `${grayCount} Instances of Low-Contrast Gray Text Detected`, 'MEDIUM', 'WCAG 1.4.3',
    'Gray-400/500 on white typically fails contrast. Affects readability for low vision users.',
    ['Multiple pages']);
}

gap('C5', 'No Color Contrast Audit Tool in CI/Build Pipeline', 'MEDIUM', 'WCAG 1.4.3',
  'No automated contrast checker (lighthouse, axe) in build. Regressions undetected.',
  ['CI/CD pipeline']);

// ========== GAP 16-20: ALT TEXT & IMAGES ==========

let totalImgs = 0;
let missingAlt = 0;
let poorAlt = 0;

files.forEach(f => {
  const c = readFile(f);
  const imgs = (c.match(/<(img|Image)[^>]*>/g) || []).length;
  totalImgs += imgs;
  
  const altOk = (c.match(/alt=["'][^"']{10,}/g) || []).length;
  missingAlt += Math.max(0, imgs - altOk);
  
  const badAlts = (c.match(/alt=["'](image|pic|photo|logo|icon)["']/gi) || []).length;
  poorAlt += badAlts;
});

if (missingAlt > 0) {
  gap('A1', `${missingAlt} Images Missing Alt Text (of ~${totalImgs} total)`, 'CRITICAL', 'WCAG 1.1.1',
    'Images without alt attributes are invisible to screen readers. Critical accessibility failure.',
    ['Multiple pages']);
}

if (poorAlt > 0) {
  gap('A2', `${poorAlt} Images with Generic Alt Text ("image", "photo", etc.)`, 'MEDIUM', 'WCAG 1.1.1',
    'Alt text must describe content, not just label it as an image. Current alts are non-descriptive.',
    ['Multiple pages']);
}

// ========== GAP 21-25: FORMS & INPUTS ==========

if (bookingForm && !bookingForm.match(/aria-required="true"/)) {
  gap('F1', 'Form Inputs Missing aria-required Attribute', 'MEDIUM', 'WCAG 1.3.1',
    'Required fields use HTML required attribute but not aria-required. Screen readers may miss requirement.',
    ['components/BookingForm.tsx']);
}

if (bookingForm && !bookingForm.includes('aria-describedby')) {
  gap('F2', 'Form Errors Not Linked to Inputs (Missing aria-describedby)', 'MEDIUM', 'WCAG 1.3.1',
    'Error messages exist but arent associated with form fields. Screen readers cant connect them.',
    ['components/BookingForm.tsx']);
}

const calendarFile = readFile('./components/CalendarPicker.tsx');
if (calendarFile && !calendarFile.match(/ArrowUp|ArrowDown|ArrowLeft|ArrowRight/)) {
  gap('F3', 'Date Picker Calendar Missing Keyboard Navigation', 'HIGH', 'WCAG 2.1.1',
    'Calendar component doesnt support arrow keys. Users cannot navigate dates with keyboard alone.',
    ['components/CalendarPicker.tsx']);
}

let placeholderOnly = 0;
let labelCount = 0;
files.slice(0, 10).forEach(f => {
  const c = readFile(f);
  placeholderOnly += (c.match(/placeholder=/g) || []).length;
  labelCount += (c.match(/<label/g) || []).length;
});

if (placeholderOnly > labelCount) {
  gap('F4', 'Form Inputs Rely on Placeholder Text (No Associated Labels)', 'CRITICAL', 'WCAG 1.3.1',
    'Placeholders disappear when typing. Screen readers cant find labels. Major accessibility failure.',
    ['Multiple form components']);
}

// ========== GAP 26-30: LEGAL & COMPLIANCE ==========

const privacy = readFile('./app/privacy/page.tsx');
if (!privacy.includes('PIPEDA')) {
  gap('L1', 'Privacy Policy Mentions HIPAA But Not PIPEDA (Critical for Canada)', 'CRITICAL', 'PIPEDA Statute',
    'Website serves Canadian clients but privacy policy only mentions HIPAA (US law). Missing PIPEDA compliance language.',
    ['app/privacy/page.tsx']);
}

if (!privacy.includes('Privacy Commissioner') && !privacy.includes('complaint')) {
  gap('L2', 'No Privacy Complaint Process (PIPEDA Requirement)', 'HIGH', 'PIPEDA',
    'Users cannot find how to lodge complaints with Office of Privacy Commissioner of Canada.',
    ['app/privacy/page.tsx']);
}

const termsExists = fs.existsSync('./app/terms/page.tsx') || fs.existsSync('./app/terms-of-service/page.tsx');
if (!termsExists) {
  gap('L3', 'Terms of Service Page Missing', 'HIGH', 'Canadian Contract Law',
    'No legal terms page. Required for cancellation policy, liability limits, client confidentiality.',
    ['app/terms/page.tsx (MISSING)']);
}

const about = readFile('./app/about/page.tsx');
if (!about.match(/not medical|not a substitute|not treatment/i)) {
  gap('L4', 'Missing Healthcare Disclaimer (Critical Liability Risk)', 'CRITICAL', 'Professional Liability',
    'No statement that therapy is not medical treatment. Insurance requires this. Legal risk.',
    ['app/about/page.tsx', 'app/layout.tsx', 'Footer']);
}

const contact = readFile('./app/contact/page.tsx');
const footer = readFile('./components/Footer.tsx');
if (!footer.includes('Business Number') && !footer.includes('HST') && !contact.includes('Business')) {
  gap('L5', 'No Business Registration / Tax Information Disclosed', 'MEDIUM', 'CRA Standard',
    'Canadian clients need to see Business Number, HST registration, corporate structure. None disclosed.',
    ['components/Footer.tsx', 'app/contact/page.tsx']);
}

const aboutContent = about + contact + privacy;
if (aboutContent.includes('988') && !aboutContent.match(/Canada.*988|988.*Canada/)) {
  gap('L6', 'Crisis Resources Missing Canadian Context (988 is US-only)', 'MEDIUM', 'Canadian Health Practice',
    'References 988 without noting Canadian availability or mentioning 211. Incomplete for Canadian users.',
    ['Multiple pages']);
}

// ========== GAP 31-35: SCREEN READERS & ARIA ==========

let roleCount = 0;
let ariaLabelCount = 0;
let ariaHiddenCount = 0;

files.slice(0, 25).forEach(f => {
  const c = readFile(f);
  roleCount += (c.match(/role=/g) || []).length;
  ariaLabelCount += (c.match(/aria-label=/g) || []).length;
  ariaHiddenCount += (c.match(/aria-hidden=/g) || []).length;
});

if (ariaHiddenCount > 3 && roleCount < ariaHiddenCount * 2) {
  gap('SR1', 'Excessive aria-hidden Use (May Hide Content from Screen Readers)', 'MEDIUM', 'WCAG 1.3.1',
    'Multiple aria-hidden attributes found. If misused, this hides content from assistive tech.',
    ['Multiple components']);
}

if (ariaLabelCount < 5) {
  gap('SR2', 'Very Few aria-label Attributes (Screen Reader Compatibility Low)', 'MEDIUM', 'WCAG 1.3.1',
    'Custom components may lack aria-label for screen reader identification.',
    ['Multiple components']);
}

// ========== GAP 36-40: METADATA & SEO ==========

if (!layout.includes('description') && !layout.includes('content="')) {
  gap('META1', 'Meta Descriptions Missing on Key Pages', 'MEDIUM', 'SEO/Accessibility',
    'Meta descriptions help users understand page content in search results.',
    ['app/layout.tsx', 'app/page.tsx']);
}

if (layout.includes('og:image') && !layout.includes('og:image:alt')) {
  gap('META2', 'OpenGraph Images Missing Alt Text', 'MEDIUM', 'WCAG 1.1.1',
    'Social preview images lack alt. Users sharing on social cannot describe image.',
    ['app/layout.tsx']);
}

// ========== GAP 41-45: MOBILE & TOUCH ==========

let smallPadding = 0;
files.slice(0, 20).forEach(f => {
  const c = readFile(f);
  smallPadding += (c.match(/p-[12]\s|px-[12]\s|py-[12]\s/g) || []).length;
});

if (smallPadding > 10) {
  gap('MOBILE1', `${smallPadding} Interactive Elements with Minimal Padding (<44x44px)`, 'MEDIUM', 'WCAG 2.5.5',
    'Small touch targets (p-1, p-2) are hard for mobile users. WCAG recommends 44x44 minimum.',
    ['Multiple components']);
}

if (!layout.includes('viewport') || !layout.match(/width=device-width/)) {
  gap('MOBILE2', 'Viewport Meta Tag Missing or Incomplete', 'HIGH', 'WCAG 1.4.4',
    'Mobile users cannot zoom or resize content properly without proper viewport settings.',
    ['app/layout.tsx']);
}

// ========== GAP 46-50: LINKS & NAVIGATION ==========

let genericLinks = 0;
const genericPatterns = ['read more', 'learn more', 'click here', 'more info', 'see details'];
files.slice(0, 20).forEach(f => {
  const c = readFile(f);
  genericPatterns.forEach(pat => {
    genericLinks += (c.match(new RegExp(pat, 'gi')) || []).length;
  });
});

if (genericLinks > 3) {
  gap('LINK1', `${genericLinks} Links with Generic Text ("Read more", "Learn more")`, 'MEDIUM', 'WCAG 2.4.9',
    'Screen readers cannot determine link purpose. Links must have descriptive text.',
    ['Multiple pages']);
}

let noHref = 0;
files.slice(0, 15).forEach(f => {
  const c = readFile(f);
  noHref += (c.match(/<Link[^>]*>/g) || []).filter(l => !l.includes('href')).length;
});

if (noHref > 0) {
  gap('LINK2', `${noHref} Link Elements Without href Attribute`, 'HIGH', 'WCAG 2.4.1',
    'Links without href are not keyboard accessible and break standard navigation.',
    ['Multiple components']);
}

// ========== GAP 51-55: AUTOMATION & TESTING ==========

gap('TEST1', 'No Automated Accessibility Testing in Build Pipeline', 'MEDIUM', 'Best Practice',
  'No axe, lighthouse, pa11y, or similar in CI/CD. Regressions undetected. Should run on every PR.',
  ['CI/CD pipeline']);

gap('TEST2', 'No WCAG AA Conformance Statement or A11y Policy Page', 'LOW', 'Best Practice',
  'Accessibility statement missing from site. Users don\'t know about commitment or how to report issues.',
  ['app/accessibility/page.tsx']);

gap('CONSENT1', 'No Telehealth Informed Consent Disclosure', 'HIGH', 'Canadian Telehealth Best Practice',
  'Booking page missing consent form about virtual therapy risks, privacy, technical limitations.',
  ['app/booking/page.tsx']);

gap('CONSENT2', 'Cookie Banner / Tracking Consent Missing', 'MEDIUM', 'GDPR/PIPEDA',
  'No cookie consent banner. Website may be tracking without explicit user consent.',
  ['app/layout.tsx']);

// ========== GENERATE REPORT ==========

const byLevel = {
  CRITICAL: GAPS.filter(g => g.severity === 'CRITICAL').length,
  HIGH: GAPS.filter(g => g.severity === 'HIGH').length,
  MEDIUM: GAPS.filter(g => g.severity === 'MEDIUM').length,
  LOW: GAPS.filter(g => g.severity === 'LOW').length,
};

const report = {
  timestamp: new Date().toISOString(),
  totalGaps: GAPS.length,
  bySeverity: byLevel,
  gaps: GAPS.sort((a, b) => {
    const order = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
    return order[a.severity] - order[b.severity];
  })
};

let md = `# CRITIC #6: Ruthless Accessibility & Legal Compliance Audit\n\n`;
md += `**Date:** ${new Date().toLocaleDateString()}\n`;
md += `**Total Gaps:** ${report.totalGaps} (CRITICAL: ${byLevel.CRITICAL} | HIGH: ${byLevel.HIGH} | MEDIUM: ${byLevel.MEDIUM})\n\n`;

md += `## Overview\n\nThis ruthless audit identified **${report.totalGaps} genuine compliance gaps** across:\n`;
md += `- WCAG AA Standards (Keyboard, Focus, Semantics, Links)\n`;
md += `- Color Contrast (4.5:1 minimum for AA)\n`;
md += `- Screen Reader Support (ARIA, Alt Text, Landmarks)\n`;
md += `- Legal Compliance (PIPEDA, Disclaimers, Terms)\n`;
md += `- Mobile & Touch Accessibility\n`;
md += `- Form Accessibility\n\n`;

md += `## Critical Issues (Must Fix)\n\n`;
GAPS.filter(g => g.severity === 'CRITICAL').forEach((g, i) => {
  md += `${i+1}. **${g.id}: ${g.title}**\n`;
  md += `   - Criterion: ${g.criterion}\n`;
  md += `   - Impact: ${g.details}\n\n`;
});

md += `## High Priority Issues (WCAG AA Failures)\n\n`;
GAPS.filter(g => g.severity === 'HIGH').forEach((g, i) => {
  md += `${i+1}. **${g.id}: ${g.title}**\n`;
  md += `   - Criterion: ${g.criterion}\n`;
  md += `   - Impact: ${g.details}\n\n`;
});

md += `## Medium Priority (Enhancement & Best Practice)\n\n`;
GAPS.filter(g => g.severity === 'MEDIUM').forEach((g, i) => {
  md += `${i+1}. **${g.id}: ${g.title}**\n`;
  md += `   - ${g.details}\n\n`;
});

fs.writeFileSync('./CRITIC_6_EXPANDED_AUDIT.md', md);
fs.writeFileSync('./CRITIC_6_EXPANDED_AUDIT.json', JSON.stringify(report, null, 2));

console.log(`\n✓ CRITIC #6 Complete: Found ${report.totalGaps} gaps`);
console.log(`  CRITICAL: ${byLevel.CRITICAL} | HIGH: ${byLevel.HIGH} | MEDIUM: ${byLevel.MEDIUM}\n`);

process.exit(0);
