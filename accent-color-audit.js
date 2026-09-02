#!/usr/bin/env node
/**
 * ACCENT COLOR USAGE AUDIT
 * 
 * Verifies burgundy/deep-gray/sea-blue accent usage:
 * 1. Are they used only on CTAs, highlights, and hover states?
 * 2. No random accent color bursts?
 * 3. Clear accent hierarchy (primary/secondary/tertiary)?
 * 4. Do accents actually improve readability/hierarchy?
 */

const fs = require('fs');
const path = require('path');

// Define accent colors in the system
const ACCENT_COLORS = {
  'burgundy': { type: 'primary', usage: 'Brand primary', variants: ['burgundy-50', 'burgundy-600', 'burgundy-900'] },
  'sea-blue': { type: 'secondary-accent', usage: 'Cool accent, CTAs, secondary highlights', variants: ['sea-blue-400', 'sea-blue-600'] },
  'deep-gray': { type: 'secondary', usage: 'Dark contrast, grounded states', variants: ['deep-gray-600', 'deep-gray-900'] },
  'sage': { type: 'primary-alias', usage: 'Legacy alias for burgundy', variants: ["burgundy-50', "burgundy-600', "burgundy-900'] },
  'clay': { type: 'persona-accent', usage: 'Warmth, invitation, CTAs, perinatal', variants: ['clay-50', 'clay-600'] },
  'dusk': { type: 'persona-accent', usage: 'Steady, grounded; men, ADHD, grief', variants: ['dusk-50', 'dusk-600'] },
  'honey': { type: 'persona-accent', usage: 'Career, seasonal, caution', variants: ['honey-50', 'honey-600'] },
  'blush': { type: 'persona-accent', usage: 'Tender mauve; couples, testimonials', variants: ['blush-50', 'blush-600'] },
  'alert': { type: 'semantic', usage: 'Errors, warnings (muted brick)', variants: ['alert-50', 'alert-600'] },
};

// Context categories for accent usage
const CONTEXT_CATEGORIES = {
  'CTA': { allowed: true, description: 'Call-to-action buttons' },
  'hover': { allowed: true, description: 'Hover/focus states' },
  'highlight': { allowed: true, description: 'Visual emphasis/highlights' },
  'border-accent': { allowed: true, description: 'Top/left border accent on cards' },
  'background': { allowed: false, description: 'Full background (often overuse)' },
  'text': { allowed: false, description: 'Body text in accent color' },
  'random': { allowed: false, description: 'No clear purpose' },
};

const findings = {
  total_files: 0,
  files_with_accents: [],
  accent_usage_summary: {},
  hierarchy_issues: [],
  readability_concerns: [],
  recommendations: [],
};

// Scan for accent color usage
function scanFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const fileFindings = {
      path: filePath.replace(process.cwd(), '.'),
      usages: [],
    };

    lines.forEach((line, idx) => {
      let matched = false;
      
      Object.keys(ACCENT_COLORS).forEach(color => {
        const regex = new RegExp(`(${color})-\\d{1,3}`, 'g');
        const matches = line.match(regex);
        
        if (matches) {
          matched = true;
          matches.forEach(match => {
            // Determine context
            let context = 'unknown';
            if (line.includes('btn') || line.includes('CTA') || line.includes('button')) context = 'CTA';
            else if (line.includes('hover:') || line.includes(':hover')) context = 'hover';
            else if (line.includes('border-t') || line.includes('border-l') || line.includes('border-accent')) context = 'border-accent';
            else if (line.includes('bg-')) context = 'background';
            else if (line.includes('text-')) context = 'text';
            else if (line.includes('from-') || line.includes('to-')) context = 'gradient';
            
            fileFindings.usages.push({
              line: idx + 1,
              match,
              context,
              code: line.trim().substring(0, 100),
            });
          });
        }
      });
    });

    if (fileFindings.usages.length > 0) {
      findings.files_with_accents.push(fileFindings);
    }
  } catch (err) {
    // Ignore binary files
  }
}

// Walk directory recursively
function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      walkDir(filePath);
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.css'))) {
      findings.total_files++;
      scanFile(filePath);
    }
  });
}

// Analyze findings for hierarchy and readability
function analyzeHierarchy() {
  const colorCounts = {};
  const contextCounts = {};
  
  findings.files_with_accents.forEach(file => {
    file.usages.forEach(usage => {
      const color = usage.match.split('-')[0];
      colorCounts[color] = (colorCounts[color] || 0) + 1;
      contextCounts[usage.context] = (contextCounts[usage.context] || 0) + 1;
      
      // Check for issues
      if (usage.context === 'text') {
        findings.readability_concerns.push({
          file: file.path,
          line: usage.line,
          issue: `Accent color used for body text: ${usage.match}`,
          severity: 'medium',
        });
      } else if (usage.context === 'background' && usage.match.includes('50') === false && usage.match.includes('100') === false) {
        findings.readability_concerns.push({
          file: file.path,
          line: usage.line,
          issue: `Dark accent used as background: ${usage.match}`,
          severity: 'high',
        });
      }
    });
  });
  
  findings.accent_usage_summary = {
    by_color: colorCounts,
    by_context: contextCounts,
  };
  
  // Hierarchy check
  const expectedHierarchy = {
    'sage': 'Most used (primary)',
    'clay': 'Medium use (persona)',
    'sea-blue': 'Medium use (secondary CTA)',
    'dusk': 'Low use (specific persona)',
    'honey': 'Low use (specific persona)',
    'blush': 'Low use (specific persona)',
  };
  
  Object.entries(colorCounts).forEach(([color, count]) => {
    findings.hierarchy_issues.push({
      color,
      count,
      expected: expectedHierarchy[color] || 'Verify usage',
    });
  });
}

// Generate recommendations
function generateRecommendations() {
  const recommendations = [];
  
  // Check 1: Burgundy/Sea Blue usage
  const usages = findings.accent_usage_summary.by_color;
  if (!usages['sea-blue'] || usages['sea-blue'] < 5) {
    recommendations.push({
      priority: 'medium',
      title: 'Sea-Blue Under-utilized',
      description: 'Sea-blue should be the secondary CTA color, but is used sparingly.',
      action: 'Add sea-blue to secondary CTAs, hover states on secondary actions',
      example: 'Secondary "Learn More" links, checkbox focus states',
    });
  }
  
  if (!usages['deep-gray'] || usages['deep-gray'] < 3) {
    recommendations.push({
      priority: 'low',
      title: 'Deep-Gray Mostly Unused',
      description: 'Deep-gray is defined but rarely used. Consider if it serves a purpose.',
      action: 'Either use deep-gray for info/grounded states or remove from palette',
      example: 'Info boxes, secondary borders, grounded text for men/ADHD personas',
    });
  }
  
  if (usages['sage'] > 150) {
    recommendations.push({
      priority: 'medium',
      title: 'Sage Over-used',
      description: 'Sage (burgundy) is dominant across many contexts, diluting impact.',
      action: 'Reduce sage to primary CTAs and key highlights only. Move form inputs to warm-gray.',
      example: 'Form labels, error text, info boxes can use warm-gray instead',
    });
  }
  
  // Check 2: Readability concerns
  if (findings.readability_concerns.length > 3) {
    recommendations.push({
      priority: 'high',
      title: 'Readability Issues Found',
      description: `${findings.readability_concerns.length} instances of accent colors in non-ideal contexts.`,
      action: 'Review and move to neutral alternatives',
      files: findings.readability_concerns.slice(0, 3).map(c => c.file),
    });
  }
  
  // Check 3: Hierarchy clarity
  recommendations.push({
    priority: 'medium',
    title: 'Establish Clear Accent Hierarchy',
    description: 'Define when each accent is used to prevent confusion.',
    action: 'Document: sage=primary CTA, clay=secondary CTA, sea-blue=tertiary CTA/hover',
    example: 'Primary: "Book Now" | Secondary: "Learn More" | Tertiary: icon hover',
  });
  
  // Check 4: Consistency check
  const filesCount = findings.files_with_accents.length;
  recommendations.push({
    priority: 'medium',
    title: 'Accent Color Consistency Audit',
    description: `${filesCount} files contain accent colors. Verify consistent application.`,
    action: 'Run visual QA on key pages (booking, about, specialty pages)',
    example: 'Ensure all primary CTAs are the same color; all hover states consistent',
  });
  
  findings.recommendations = recommendations;
}

// Main execution
walkDir('./app');
walkDir('./components');

analyzeHierarchy();
generateRecommendations();

// Output report
console.log('\n' + '='.repeat(70));
console.log('ACCENT COLOR USAGE AUDIT REPORT');
console.log('='.repeat(70) + '\n');

console.log(`📊 SCAN SUMMARY`);
console.log(`   Files scanned: ${findings.total_files}`);
console.log(`   Files with accent colors: ${findings.files_with_accents.length}`);
console.log(`   Total accent color usages: ${findings.files_with_accents.reduce((sum, f) => sum + f.usages.length, 0)}\n`);

console.log(`🎨 ACCENT COLOR DISTRIBUTION`);
Object.entries(findings.accent_usage_summary.by_color).forEach(([color, count]) => {
  const colorDef = ACCENT_COLORS[color];
  const bar = '█'.repeat(Math.ceil(count / 5));
  console.log(`   ${color.padEnd(15)} ${bar} ${count} usages (${colorDef?.type})`);
});

console.log(`\n🎯 USAGE CONTEXT DISTRIBUTION`);
Object.entries(findings.accent_usage_summary.by_context).forEach(([context, count]) => {
  const allowed = CONTEXT_CATEGORIES[context]?.allowed ? '✓' : '✗';
  console.log(`   ${allowed} ${context.padEnd(15)} ${count} usages`);
});

console.log(`\n⚠️  READABILITY CONCERNS (${findings.readability_concerns.length})`);
if (findings.readability_concerns.length > 0) {
  findings.readability_concerns.slice(0, 5).forEach(concern => {
    console.log(`   [${concern.severity.toUpperCase()}] ${concern.file}:${concern.line}`);
    console.log(`   → ${concern.issue}\n`);
  });
  if (findings.readability_concerns.length > 5) {
    console.log(`   ... and ${findings.readability_concerns.length - 5} more\n`);
  }
} else {
  console.log(`   ✓ No major readability issues detected\n`);
}

console.log(`📈 HIERARCHY ANALYSIS`);
findings.hierarchy_issues.slice(0, 6).forEach(issue => {
  console.log(`   ${issue.color.padEnd(15)} ${issue.count} usages → Expected: ${issue.expected}`);
});

console.log(`\n💡 RECOMMENDATIONS (${findings.recommendations.length})`);
findings.recommendations.forEach((rec, idx) => {
  const priorityEmoji = rec.priority === 'high' ? '🔴' : rec.priority === 'medium' ? '🟡' : '🟢';
  console.log(`\n   ${idx + 1}. ${priorityEmoji} ${rec.title}`);
  console.log(`      ${rec.description}`);
  console.log(`      → Action: ${rec.action}`);
  if (rec.example) console.log(`      → Example: ${rec.example}`);
});

console.log('\n' + '='.repeat(70) + '\n');

// Write detailed report to file
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    files_scanned: findings.total_files,
    files_with_accents: findings.files_with_accents.length,
    total_usages: findings.files_with_accents.reduce((sum, f) => sum + f.usages.length, 0),
  },
  accent_distribution: findings.accent_usage_summary,
  readability_concerns: findings.readability_concerns,
  hierarchy_analysis: findings.hierarchy_issues,
  recommendations: findings.recommendations,
  detailed_usages: findings.files_with_accents.slice(0, 10),
};

fs.writeFileSync('ACCENT_COLOR_AUDIT_REPORT.json', JSON.stringify(report, null, 2));
console.log('📄 Detailed report written to: ACCENT_COLOR_AUDIT_REPORT.json\n');

process.exit(0);
