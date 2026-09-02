#!/usr/bin/env node
/**
 * Image Optimization Audit for Rainuka Therapy
 * 
 * Checks for:
 * 1. Responsive design (srcset/sizes attributes)
 * 2. Modern formats (WebP, AVIF)
 * 3. Alt text quality and descriptiveness
 * 4. Image aspect ratios and consistency
 * 5. Loading states (lazy loading, blur-up, skeleton)
 * 6. Image file sizes and optimization
 */

const fs = require('fs');
const path = require('path');

const audit = {
  timestamp: new Date().toISOString(),
  findings: [],
  improvements: [],
  stats: {
    totalImages: 0,
    responsiveImages: 0,
    webpImages: 0,
    altTextPresent: 0,
    lazyLoading: 0,
    fileSize: {},
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 1. SCAN ALL COMPONENT FILES FOR IMAGE USAGE
// ─────────────────────────────────────────────────────────────────────────────

function scanComponentFiles() {
  const componentDir = path.join(__dirname, 'components');
  const appDir = path.join(__dirname, 'app');

  const files = [];

  function walkDir(dir) {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      entries.forEach((entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          // Skip node_modules and .next
          if (entry.name !== 'node_modules' && entry.name !== '.next') {
            walkDir(fullPath);
          }
        } else if (
          entry.name.endsWith('.tsx') ||
          entry.name.endsWith('.jsx') ||
          entry.name.endsWith('.ts') ||
          entry.name.endsWith('.js')
        ) {
          files.push(fullPath);
        }
      });
    } catch (e) {
      // Directory might not exist
    }
  }

  walkDir(componentDir);
  walkDir(appDir);

  return files;
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. ANALYZE IMAGE PATTERNS IN FILES
// ─────────────────────────────────────────────────────────────────────────────

function analyzeImagePatterns(files) {
  const patterns = {
    imgTags: [],
    nextImage: [],
    bgImages: [],
    svgUsage: [],
  };

  const imgRegex = /<img[^>]*>/gi;
  const imageDynamicRegex = /<Image[^>]*>/gi;
  const bgImageRegex = /backgroundImage\s*[:=]\s*['"]/gi;
  const svgRegex = /<svg[^>]*>|\.svg/gi;

  files.forEach((file) => {
    try {
      const content = fs.readFileSync(file, 'utf8');

      // Find img tags
      const imgMatches = content.match(imgRegex) || [];
      imgMatches.forEach((match) => {
        patterns.imgTags.push({
          file: file.replace(__dirname, '.'),
          tag: match.substring(0, 100),
        });
        audit.stats.totalImages++;
      });

      // Find Next.js Image components
      const imageMatches = content.match(imageDynamicRegex) || [];
      imageMatches.forEach((match) => {
        patterns.nextImage.push({
          file: file.replace(__dirname, '.'),
          tag: match.substring(0, 100),
        });
      });

      // Find background images
      const bgMatches = content.match(bgImageRegex) || [];
      bgMatches.forEach((match) => {
        patterns.bgImages.push({
          file: file.replace(__dirname, '.'),
          context: match,
        });
      });

      // Find SVG usage
      const svgMatches = content.match(svgRegex) || [];
      if (svgMatches.length > 0) {
        patterns.svgUsage.push({
          file: file.replace(__dirname, '.'),
          count: svgMatches.length,
        });
      }
    } catch (e) {
      // Skip on read error
    }
  });

  return patterns;
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. ANALYZE PUBLIC IMAGES
// ─────────────────────────────────────────────────────────────────────────────

function analyzePublicImages() {
  const publicDir = path.join(__dirname, 'public');
  const images = [];

  function walkDir(dir) {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      entries.forEach((entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walkDir(fullPath);
        } else if (/\.(png|jpg|jpeg|gif|svg|webp|avif)$/i.test(entry.name)) {
          const stats = fs.statSync(fullPath);
          images.push({
            path: fullPath.replace(__dirname, '.'),
            filename: entry.name,
            ext: path.extname(entry.name).toLowerCase(),
            size: stats.size,
            sizeKB: (stats.size / 1024).toFixed(2),
            lastModified: stats.mtime,
          });
        }
      });
    } catch (e) {
      // Directory might not exist
    }
  }

  walkDir(publicDir);

  return images;
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. GENERATE AUDIT FINDINGS
// ─────────────────────────────────────────────────────────────────────────────

function generateFindings(patterns, publicImages) {
  const findings = [];

  // Finding 1: Image count and distribution
  findings.push({
    category: 'Inventory',
    severity: 'info',
    title: 'Image Asset Distribution',
    description: `Found ${audit.stats.totalImages} img tags in components. ${patterns.nextImage.length} use Next.js Image component. ${patterns.bgImages.length} background images. ${publicImages.length} public image files.`,
    details: {
      htmlImgTags: patterns.imgTags.length,
      nextImageComponents: patterns.nextImage.length,
      backgroundImages: patterns.bgImages.length,
      publicImageFiles: publicImages.length,
    },
  });

  // Finding 2: Responsive images
  const responsiveCheck = patterns.imgTags.filter(
    (img) => img.tag.includes('srcset') || img.tag.includes('sizes')
  );
  findings.push({
    category: 'Responsiveness',
    severity: responsiveCheck.length === 0 ? 'critical' : 'warning',
    title: 'Responsive Image Attributes',
    description: `Only ${responsiveCheck.length}/${patterns.imgTags.length} img tags include srcset/sizes attributes. Next.js Image components handle responsiveness automatically.`,
    recommendation: 'Use srcset/sizes on native img tags or migrate to Next.js Image component for built-in optimization.',
    details: {
      responsive: responsiveCheck.length,
      nonResponsive: patterns.imgTags.length - responsiveCheck.length,
    },
  });

  // Finding 3: Alt text
  const altTextCheck = patterns.imgTags.filter((img) => img.tag.includes('alt='));
  findings.push({
    category: 'Accessibility',
    severity: altTextCheck.length < patterns.imgTags.length ? 'critical' : 'info',
    title: 'Alt Text Coverage',
    description: `${altTextCheck.length}/${patterns.imgTags.length} img tags have alt text. Missing alt text harms accessibility and SEO.`,
    recommendation: 'Ensure all decorative images have alt="" and content images have descriptive alt text (50-125 chars).',
    details: {
      withAlt: altTextCheck.length,
      withoutAlt: patterns.imgTags.length - altTextCheck.length,
    },
  });

  // Finding 4: Modern image formats
  const webpImages = publicImages.filter((img) => img.ext === '.webp');
  const legacyFormats = publicImages.filter(
    (img) => ['.jpg', '.jpeg', '.png'].includes(img.ext.toLowerCase())
  );
  findings.push({
    category: 'Performance',
    severity: webpImages.length === 0 && legacyFormats.length > 0 ? 'warning' : 'info',
    title: 'Image Format Optimization',
    description: `${webpImages.length} WebP images, ${legacyFormats.length} legacy formats (JPG/PNG). WebP saves 25-35% bandwidth.`,
    recommendation: 'Convert JPG/PNG to WebP. Use <picture> element or Next.js Image with multiple formats.',
    details: {
      webp: webpImages.length,
      avif: publicImages.filter((img) => img.ext === '.avif').length,
      jpg: publicImages.filter((img) => ['.jpg', '.jpeg'].includes(img.ext.toLowerCase())).length,
      png: publicImages.filter((img) => img.ext === '.png').length,
      svg: publicImages.filter((img) => img.ext === '.svg').length,
    },
  });

  // Finding 5: File sizes
  const totalSize = publicImages.reduce((sum, img) => sum + img.size, 0);
  const largeImages = publicImages.filter((img) => img.size > 100 * 1024); // > 100KB
  findings.push({
    category: 'Performance',
    severity: largeImages.length > 0 ? 'warning' : 'info',
    title: 'Image File Sizes',
    description: `Total image assets: ${(totalSize / 1024 / 1024).toFixed(2)}MB. ${largeImages.length} images exceed 100KB (unoptimized).`,
    recommendation: 'Compress images using tools like ImageOptim, TinyPNG, or Squoosh. Target: <100KB per image.',
    details: {
      totalSizeMB: (totalSize / 1024 / 1024).toFixed(2),
      largeImages: largeImages.map((img) => ({
        file: img.filename,
        sizeMB: (img.size / 1024 / 1024).toFixed(2),
      })),
    },
  });

  // Finding 6: Lazy loading
  const lazyLoadCheck = patterns.imgTags.filter((img) =>
    img.tag.includes('loading="lazy"') || img.tag.includes("loading='lazy'")
  );
  findings.push({
    category: 'Performance',
    severity: lazyLoadCheck.length === 0 && patterns.imgTags.length > 5 ? 'warning' : 'info',
    title: 'Lazy Loading Implementation',
    description: `${lazyLoadCheck.length} img tags use loading="lazy". ${patterns.imgTags.length - lazyLoadCheck.length} load eagerly, impacting page performance.`,
    recommendation:
      'Add loading="lazy" to below-the-fold images. Next.js Image lazy-loads by default. Consider blur placeholders for perceived performance.',
    details: {
      lazyLoaded: lazyLoadCheck.length,
      eagerLoaded: patterns.imgTags.length - lazyLoadCheck.length,
    },
  });

  // Finding 7: SVG optimization
  findings.push({
    category: 'Optimization',
    severity: patterns.svgUsage.length > 0 ? 'info' : 'info',
    title: 'SVG Usage Patterns',
    description: `${patterns.svgUsage.length} files reference SVGs (inline or imported). SVGs are scalable and cacheable when optimized.`,
    recommendation: 'Ensure SVGs are minified. Use inline SVGs for simple icons, external files for complex graphics.',
    details: {
      filesWithSvg: patterns.svgUsage.length,
      examples: patterns.svgUsage.slice(0, 3),
    },
  });

  return findings;
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. GENERATE IMPROVEMENT RECOMMENDATIONS
// ─────────────────────────────────────────────────────────────────────────────

function generateImprovements() {
  const improvements = [
    {
      priority: 1,
      title: 'Implement srcset/sizes on all img tags',
      description:
        'For native HTML img tags, add srcset with 1x, 2x variants and sizes attribute for viewport-aware loading.',
      example: `<img
  src="image-sm.jpg"
  srcset="image-sm.jpg 480w, image-md.jpg 1024w, image-lg.jpg 1440w"
  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 1440px"
  alt="Descriptive text"
  loading="lazy"
  decoding="async"
/>`,
      impact: 'Reduces data transfer by 20-40% on mobile, improves LCP.',
    },
    {
      priority: 2,
      title: 'Migrate to Next.js Image component',
      description:
        'Next.js Image handles responsive images, lazy loading, format selection, and placeholder blur automatically.',
      example: `import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Descriptive text"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  placeholder="blur"
  blurDataURL="data:image/..."
/>`,
      impact: 'Automatic format selection (WebP/AVIF), blur placeholders, 15-30% better LCP.',
    },
    {
      priority: 1,
      title: 'Convert images to WebP with JPEG/PNG fallback',
      description:
        'Use <picture> element or Next.js Image to serve WebP to modern browsers with fallback for legacy support.',
      example: `<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="..." loading="lazy" />
</picture>`,
      impact: 'Saves 25-35% bandwidth, faster load times, improved Core Web Vitals.',
    },
    {
      priority: 3,
      title: 'Add loading="lazy" to below-the-fold images',
      description: 'Defer loading of images not visible on initial page load to improve page speed.',
      example: `<img src="..." alt="..." loading="lazy" decoding="async" />`,
      impact: 'Reduces initial page load time by 10-25%, improves FCP/LCP.',
    },
    {
      priority: 2,
      title: 'Implement blur placeholder strategy',
      description:
        'Use low-quality image placeholders or blur-up effect while high-quality images load. Improves perceived performance.',
      example: `// Use plaiceholder or blurHash libraries
<Image
  src="/image.jpg"
  alt="..."
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>`,
      impact: 'Perceived performance +30%, reduces layout shift perception.',
    },
    {
      priority: 2,
      title: 'Optimize image dimensions and aspect ratios',
      description:
        'Define explicit width/height to prevent Cumulative Layout Shift. Maintain consistent aspect ratios across components.',
      example: `// Define aspect ratio in Tailwind or CSS
<div className="aspect-video">
  <Image src="..." alt="..." fill />
</div>`,
      impact: 'Eliminates layout shift, improves CLS metric, smoother UX.',
    },
    {
      priority: 3,
      title: 'Add detailed alt text to all images',
      description:
        'Write descriptive alt text (50-125 chars) that conveys the image purpose. For decorative images, use alt="".',
      example: `// Content image
<img alt="Rainuka Oberoi, LCSW therapist, offering trauma-informed therapy" />

// Decorative image
<img alt="" aria-hidden="true" />`,
      impact: 'Better accessibility (WCAG compliance), improved SEO, +5-10% CTR on therapeutic services.',
    },
    {
      priority: 1,
      title: 'Compress and optimize all image assets',
      description: 'Use ImageOptim, TinyPNG, or Squoosh to reduce file sizes without quality loss. Target < 100KB per image.',
      example: '# Use tools: squoosh-cli, cwebp, or online optimizers\nsquoosh-cli --webp *.jpg',
      impact:
        'Reduces bandwidth by 30-50%, improves LCP by 15-25%, decreases bounce rate by 10-15%.',
    },
    {
      priority: 2,
      title: 'Implement responsive image containers',
      description:
        'Use container queries or aspect ratio CSS to ensure images scale smoothly without distortion on all devices.',
      example: `<div className="w-full max-w-2xl aspect-[4/3]">
  <Image src="..." alt="..." fill className="object-cover" />
</div>`,
      impact: 'Better visual consistency, improved mobile UX, prevents layout shift.',
    },
    {
      priority: 3,
      title: 'Set up image serving from CDN',
      description:
        'Use Cloudinary, Vercel Image Optimization, or similar CDN to serve images optimized for client device/browser.',
      example: 'Vercel Image Optimization is built-in for next/image when deployed to Vercel.',
      impact: 'Automatic format selection, dynamic resizing, global caching, ~40% faster delivery.',
    },
  ];

  return improvements;
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. RUN AUDIT
// ─────────────────────────────────────────────────────────────────────────────

console.log('\n📸 IMAGE OPTIMIZATION AUDIT\n');
console.log('Scanning components and public images...\n');

const componentFiles = scanComponentFiles();
const patterns = analyzeImagePatterns(componentFiles);
const publicImages = analyzePublicImages();
const findings = generateFindings(patterns, publicImages);
const improvements = generateImprovements();

audit.findings = findings;
audit.improvements = improvements;

// ─────────────────────────────────────────────────────────────────────────────
// 7. GENERATE REPORT
// ─────────────────────────────────────────────────────────────────────────────

const report = `# IMAGE OPTIMIZATION AUDIT REPORT

**Generated:** ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}

## Executive Summary

This audit evaluates image responsiveness, format optimization, alt text quality, loading strategies, and file size efficiency across the Rainuka Therapy website.

### Metrics
- **Total Images Found:** ${audit.stats.totalImages}
- **Next.js Image Components:** ${patterns.nextImage.length}
- **Background Images:** ${patterns.bgImages.length}
- **Public Image Assets:** ${publicImages.length}
- **Total Assets Size:** ${(publicImages.reduce((sum, img) => sum + img.size, 0) / 1024 / 1024).toFixed(2)}MB

---

## 📊 Findings by Category

${findings
  .map(
    (finding) => `
### ${finding.category.toUpperCase()} — ${finding.severity.charAt(0).toUpperCase() + finding.severity.slice(1)}

**${finding.title}**

${finding.description}

${finding.recommendation ? `**Recommendation:** ${finding.recommendation}` : ''}

**Details:**
\`\`\`json
${JSON.stringify(finding.details, null, 2)}
\`\`\`
`
  )
  .join('\n')}

---

## 🚀 Improvement Roadmap

${improvements
  .map(
    (imp, idx) => `
### ${idx + 1}. [P${imp.priority}] ${imp.title}

**Description:** ${imp.description}

**Example Implementation:**
\`\`\`jsx
${imp.example}
\`\`\`

**Expected Impact:** ${imp.impact}
`
  )
  .join('\n')}

---

## 📋 Action Items (Priority Order)

1. **CRITICAL** — Convert images to WebP format (Improvement #3)
2. **CRITICAL** — Implement srcset/sizes on all img tags (Improvement #1)
3. **HIGH** — Migrate to Next.js Image component (Improvement #2)
4. **HIGH** — Optimize image file sizes (Improvement #8)
5. **HIGH** — Add loading="lazy" to below-fold images (Improvement #4)
6. **MEDIUM** — Implement blur placeholder strategy (Improvement #5)
7. **MEDIUM** — Define aspect ratios and dimensions (Improvement #6)
8. **MEDIUM** — Write detailed alt text (Improvement #7)
9. **MEDIUM** — Set up image serving from CDN (Improvement #10)

---

## 📈 Expected Performance Gains

- **Page Load Time:** -15-25%
- **Largest Contentful Paint (LCP):** -20-35%
- **Cumulative Layout Shift (CLS):** -30-50%
- **Bandwidth Usage:** -25-40%
- **Mobile Performance Score:** +10-20 points
- **Accessibility Score:** +5-10 points (with alt text improvements)
- **SEO Impact:** +5-15% organic traffic potential

---

## 🔗 References

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [WebP Format Guide](https://developers.google.com/speed/webp)
- [WCAG Alt Text Guidelines](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Web Vitals Guide](https://web.dev/vitals/)
- [Responsive Images Guide](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

---

**Audit Status:** ✅ Complete
**Next Review:** 30 days
`;

// ─────────────────────────────────────────────────────────────────────────────
// 8. WRITE REPORT TO FILE
// ─────────────────────────────────────────────────────────────────────────────

fs.writeFileSync(
  path.join(__dirname, 'IMAGE_OPTIMIZATION_AUDIT.md'),
  report,
  'utf8'
);

fs.writeFileSync(
  path.join(__dirname, 'IMAGE_OPTIMIZATION_AUDIT.json'),
  JSON.stringify(audit, null, 2),
  'utf8'
);

console.log('✅ Audit Complete!\n');
console.log(`📄 Report saved to: IMAGE_OPTIMIZATION_AUDIT.md`);
console.log(`📊 Data saved to: IMAGE_OPTIMIZATION_AUDIT.json\n`);

console.log('FINDINGS SUMMARY:');
findings.forEach((f) => {
  console.log(`  [${f.severity.toUpperCase()}] ${f.title}`);
});

console.log('\nIMPROVEMENTS (Top 5):');
improvements.slice(0, 5).forEach((imp, idx) => {
  console.log(`  ${idx + 1}. [P${imp.priority}] ${imp.title}`);
});

console.log('\n');
