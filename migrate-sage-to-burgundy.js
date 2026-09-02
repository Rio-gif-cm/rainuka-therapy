#!/usr/bin/env node

/**
 * Sage → Burgundy Migration Script
 * Replaces all "burgundy-*' color class references with 'burgundy-*'
 * Handles TSX, JSX, CSS, and other text files
 */

const fs = require('fs');
const path = require('path');

let filesModified = 0;
let replacementsCount = 0;

function migrateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Replace sage-* with burgundy-* (case-insensitive for class names)
    // Patterns: text-sage-X, bg-sage-X, border-sage-X, etc.
    content = content.replace(/\b(text|bg|border|ring|from|to|via|placeholder)-sage-(\d{1,3}|DEFAULT)\b/g, 
                            '$1-burgundy-$2');
    
    // Replace class="...sage-" patterns
    content = content.replace(/className="([^"]*\s)?sage-/g, 'className="$1burgundy-');
    
    // Replace style object references (less common but check anyway)
    content = content.replace(/['"]sage-/g, '"burgundy-');
    
    // Replace in comments too for documentation
    content = content.replace(/sage-(\d{1,3})/g, 'burgundy-$1');
    
    // If content changed, write it back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      const count = (originalContent.match(/sage-/g) || []).length;
      replacementsCount += count;
      filesModified++;
      console.log(`✓ ${path.relative('.', filePath)} (${count} replacements)`);
    }
  } catch (e) {
    // Skip unreadable files
  }
}

function walkDir(dir) {
  try {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      // Skip build artifacts, node_modules, .git, etc.
      if (['node_modules', '.next', '.git', '.vercel', 'out', 'build', '.turbo'].includes(file.name)) {
        continue;
      }
      
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        walkDir(fullPath);
      } else if (/\.(tsx?|jsx?|css|md|mdx)$/.test(file.name)) {
        migrateFile(fullPath);
      }
    }
  } catch (e) {
    // Skip unreadable directories
  }
}

console.log('🔄 Migrating sage-* → burgundy-*\n');
console.log('=' .repeat(60) + '\n');

walkDir('.');

console.log('\n' + '='.repeat(60));
console.log(`\n✅ Migration complete!\n`);
console.log(`   Files modified: ${filesModified}`);
console.log(`   Total replacements: ${replacementsCount}`);
console.log(`\n   Next: Verify build with 'npm run build'\n`);
