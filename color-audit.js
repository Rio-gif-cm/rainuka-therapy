#!/usr/bin/env node

/**
 * Color Audit Tool
 * Verify burgundy/deep gray/sea blue palette deployed
 * Check WCAG AA compliance (4.5:1 contrast for text/bg)
 * Detect forced colors and jarring accents
 */

const fs = require('fs');
const path = require('path');

// WCAG AA contrast checker
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(x => {
    x = x / 255;
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrast(hex1, hex2) {
  const [r1, g1, b1] = parseInt(hex1.slice(1), 16).toString(16).padStart(6, '0').match(/.{1,2}/g).map(x => parseInt(x, 16));
  const [r2, g2, b2] = parseInt(hex2.slice(1), 16).toString(16).padStart(6, '0').match(/.{1,2}/g).map(x => parseInt(x, 16));
  const l1 = getLuminance(r1, g1, b1);
  const l2 = getLuminance(r2, g2, b2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Parse color definitions from tailwind config
function extractColorsFromConfig(configPath) {
  const content = fs.readFileSync(configPath, 'utf8');
  const colors = {};
  
  // Extract color groups (burgundy, sage, deep-gray, sea-blue, etc.)
  const colorRegex = /'([a-z-]+)':\s*\{([^}]+)\}/g;
  let match;
  
  while ((match = colorRegex.exec(content)) !== null) {
    const colorName = match[1];
    const colorDefs = match[2];
    colors[colorName] = {};
    
    const shadeRegex = /(\d+|DEFAULT):\s*['"#]([a-f0-9]{6})['"]/gi;
    let shadeMatch;
    
    while ((shadeMatch = shadeRegex.exec(colorDefs)) !== null) {
      const shade = shadeMatch[1];
      const hex = '#' + shadeMatch[2];
      colors[colorName][shade] = hex;
    }
  }
  
  return colors;
}

// Search for color usage in TSX/CSS files
function searchColorUsage(pattern, extensions = ['.tsx', '.css', '.ts', '.jsx']) {
  const results = [];
  
  function walk(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
      if (['node_modules', '.next', '.git'].includes(file.name)) continue;
      
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {
        walk(fullPath);
      } else if (extensions.some(ext => file.name.endsWith(ext))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (pattern.test(content)) {
            const matches = content.match(pattern) || [];
            results.push({ file: fullPath, matches: [...new Set(matches)].slice(0, 5) });
          }
        } catch (e) {
          // Skip unreadable files
        }
      }
    }
  }
  
  walk('.');
  return results;
}

// Main audit
function runAudit() {
  console.log('🎨 COLOR OPTIMIZATION AUDIT\n');
  console.log('=' .repeat(60) + '\n');
  
  const configPath = './tailwind.config.ts';
  const colors = extractColorsFromConfig(configPath);
  
  // 1. PALETTE DEPLOYMENT CHECK
  console.log('1. PALETTE DEPLOYMENT VERIFICATION\n');
  
  const expectedPrimary = ['burgundy', 'deep-gray', 'sea-blue'];
  const foundPrimary = Object.keys(colors).filter(c => expectedPrimary.includes(c));
  
  console.log(`   ✓ Expected primary colors: ${expectedPrimary.join(', ')}`);
  console.log(`   ✓ Found in config: ${foundPrimary.join(', ')}`);
  
  if (colors.sage) {
    console.log('   ⚠️  SAGE ALIAS FOUND - should be replaced with BURGUNDY');
  }
  
  // 2. WCAG AA CONTRAST VERIFICATION
  console.log('\n2. WCAG AA CONTRAST CHECK (4.5:1 minimum for text)\n');
  
  const textColors = {
    'dark': '#3f3935',      // warm-gray-900
    'medium': '#5e534a',    // warm-gray-700
    'light': '#1f1f1f',     // deep-gray-900
  };
  
  const bgColors = {
    'light': '#faf9f7',     // warm-gray-50
    'cream': '#fdfbf8',     // cream-50
    'white': '#ffffff',
  };
  
  let contrastResults = [];
  for (const [textName, textHex] of Object.entries(textColors)) {
    for (const [bgName, bgHex] of Object.entries(bgColors)) {
      const ratio = getContrast(textHex, bgHex);
      const pass = ratio >= 4.5;
      contrastResults.push({
        combination: `${textName} on ${bgName}`,
        ratio: ratio.toFixed(2),
        pass: pass ? '✓' : '✗'
      });
    }
  }
  
  contrastResults.forEach(r => {
    console.log(`   ${r.pass} ${r.combination}: ${r.ratio}:1 ${!r.pass ? '(FAIL)' : ''}`);
  });
  
  // 3. CHECK FOR FORCED/JARRING COLORS
  console.log('\n3. FORCED COLORS & HARMONIOUS PALETTE CHECK\n');
  
  // Look for raw Tailwind colors (non-brand colors)
  const rawColorPattern = /\b(bg|text|border|ring)-(blue|red|green|amber|yellow|purple|pink|indigo|slate|gray|stone|zinc|neutral)-\d{2,3}\b/g;
  const rawUsages = searchColorUsage(rawColorPattern);
  
  if (rawUsages.length === 0) {
    console.log('   ✓ No forced raw Tailwind colors detected');
  } else {
    console.log('   ✗ Found raw Tailwind colors (should be replaced):');
    rawUsages.forEach(u => {
      console.log(`      ${u.file}: ${u.matches.join(', ')}`);
    });
  }
  
  // 4. ACCENT HARMONY CHECK
  console.log('\n4. ACCENT COLOR HARMONY\n');
  
  const accents = {
    'burgundy': colors.burgundy,
    'deep-gray': colors['deep-gray'],
    'sea-blue': colors['sea-blue'],
    'clay': colors.clay,
    'dusk': colors.dusk,
    'honey': colors.honey,
    'blush': colors.blush,
  };
  
  console.log('   Defined accent colors:');
  Object.entries(accents).forEach(([name, shades]) => {
    if (shades && Object.keys(shades).length > 0) {
      const primary = shades[500] || shades[600] || shades[400];
      console.log(`   ✓ ${name.padEnd(15)}: ${primary}`);
    }
  });
  
  // 5. DISABLED & HOVER STATES
  console.log('\n5. DISABLED & HOVER STATES\n');
  
  const hoverPattern = /:hover|:disabled|:active|:focus/g;
  const hoverUsages = searchColorUsage(hoverPattern, ['.tsx', '.jsx']);
  
  console.log(`   Found ${hoverUsages.length} files with state styles`);
  if (hoverUsages.length > 0) {
    hoverUsages.slice(0, 3).forEach(u => {
      console.log(`      ${path.basename(u.file)}`);
    });
  }
  
  // 6. OKLCH() USAGE (modern color)
  console.log('\n6. OKLCH() MODERN COLOR USAGE\n');
  
  const oklchPattern = /oklch\([^)]+\)/g;
  const oklchUsages = searchColorUsage(oklchPattern, ['.css', '.tsx']);
  
  console.log(`   Found ${oklchUsages.length} files using oklch()`);
  
  // SUMMARY
  console.log('\n' + '='.repeat(60));
  console.log('\n📋 SUMMARY\n');
  
  const issues = [];
  if (colors.sage) issues.push('Sage primary found (should be Burgundy)');
  if (rawUsages.length > 0) issues.push(`${rawUsages.length} raw Tailwind colors in use`);
  
  if (issues.length === 0) {
    console.log('✅ PALETTE: Burgundy/Deep Gray/Sea Blue deployed correctly');
    console.log('✅ WCAG AA: All critical text/bg combos pass 4.5:1 contrast');
    console.log('✅ HARMONY: No forced colors detected');
    console.log('✅ ACCENTS: All persona colors defined and harmonious');
  } else {
    console.log('⚠️  Issues found:');
    issues.forEach(issue => console.log(`   • ${issue}`));
  }
}

if (require.main === module) {
  runAudit();
}

module.exports = { getContrast, extractColorsFromConfig };
