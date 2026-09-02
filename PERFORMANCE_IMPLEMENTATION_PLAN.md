# PERFORMANCE OPTIMIZATION IMPLEMENTATION PLAN
**Status:** Ready to Execute  
**Lead:** POLISHER #5 (Performance)  
**Target:** +20-35 Lighthouse Points | Core Web Vitals: LCP <1.8s, CLS <0.05

---

## Phase 1: Bundle Optimization (HIGH IMPACT)
**Effort:** 2-3 hours | **Expected Gain:** +15-25 points

### 1.1 Lazy-Load Heavy Form Components

**Current Problem:**
- `BookingForm`, `BookingFormEnhanced` loaded on every route
- `ContactForm` components bundled globally
- These components use validation libraries that could defer

**Implementation:**

```tsx
// app/page.tsx (or relevant page using booking form)
import dynamic from 'next/dynamic'

const BookingForm = dynamic(
  () => import('@/components/BookingForm'),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 bg-warm-gray-50 rounded-lg animate-pulse" />
    ),
  }
)

export default function HomePage() {
  return (
    <>
      {/* Above-fold content first */}
      <HeroSection />
      
      {/* Below-fold: lazy-loaded form */}
      <Suspense fallback={<FormSkeleton />}>
        <BookingForm />
      </Suspense>
    </>
  )
}
```

**Files to Update:**
- [ ] `app/page.tsx` — wrap BookingForm
- [ ] `app/booking/page.tsx` — prioritize form if above fold
- [ ] Any page with ContactFormModal — lazy-load

**Verification:**
```bash
npm run build
# Check .next/static for reduced JS chunks
ls -lah .next/static/chunks/
```

---

### 1.2 Optimize lucide-react Icon Imports

**Current Problem:**
- lucide-react library (~50KB) may not tree-shake perfectly
- Could replace common icons (menu, close, chevron) with inline SVG

**Action Items:**
1. Audit icon usage: `grep -r "from 'lucide-react'" src/ components/`
2. Identify top 10 most-used icons
3. Replace common ones (ChevronDown, Menu, X) with inline SVG

**Example Replacement:**

```tsx
// Before
import { ChevronDown } from 'lucide-react'

export function Accordion() {
  return <ChevronDown size={24} />
}

// After (inline SVG)
function ChevronDownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}
```

**Estimated Savings:** 5-10KB gzipped

---

### 1.3 Tree-Shake date-fns

**Current Problem:**
- date-fns library used for booking calendar
- Can be 30-50KB if entire library imported

**Action Items:**
1. Replace `import { format, parse }` from 'date-fns' 
2. Consider lighter alternative: `date-fns/format` (only what's needed)
3. Or use native `Intl.DateTimeFormat` for simple cases

**Example:**

```tsx
// Before: imports entire date-fns
import { format, parse } from 'date-fns'

// After: modular imports
import { format } from 'date-fns/format'
import { parse } from 'date-fns/parse'

// Or native (for simple cases)
const formatted = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(date)
```

---

## Phase 2: Resource Hints & Critical CSS (MEDIUM IMPACT)
**Effort:** 1-2 hours | **Expected Gain:** +10-15 points

### 2.1 Inline Critical CSS

**Action:**
1. Identify above-fold CSS (header, hero, primary button styles)
2. Extract to `<style>` tag in `app/layout.tsx`
3. Keep full CSS in `globals.css` for hydration

```tsx
// In <head> of layout.tsx
<style dangerouslySetInnerHTML={{__html: `
  /* Critical above-fold CSS */
  :root {
    --color-sage: #5B6B59;
    --color-dusk: #3D3D46;
  }
  html { font-family: Inter, sans-serif; }
  body { margin: 0; }
  .header { background: var(--color-dusk); }
  .hero { min-height: 100vh; }
  .btn { padding: 12px 24px; border-radius: 8px; }
  .btn-primary { background: var(--color-sage); color: white; }
`}} />
```

**Measurement:** Reduces render-blocking CSS by 30-50%

---

### 2.2 Add Resource Preload/Prefetch Hints

```tsx
// In <head> of layout.tsx (after <meta> tags)

<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
<link rel="dns-prefetch" href="https://www.google-analytics.com" />

{/* Prefetch critical routes (user likely to navigate) */}
<link rel="prefetch" href="/booking" />
<link rel="prefetch" href="/about" />
<link rel="prefetch" href="/guides" />

{/* Preload fonts (already done via next/font, but explicit helps some browsers) */}
<link 
  rel="preload"
  as="font"
  href="/fonts/fraunces-variable.woff2"
  type="font/woff2"
  crossOrigin="anonymous"
/>
<link 
  rel="preload"
  as="font"
  href="/fonts/inter-400.woff2"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

---

## Phase 3: Animation & CLS Audit (MEDIUM IMPACT)
**Effort:** 2-3 hours | **Expected Gain:** +5-10 points + UX improvement

### 3.1 Run CLS Audit

**Steps:**
1. Start dev server: `npm run dev`
2. Open Chrome DevTools → Performance tab
3. Click "Record" → scroll page → click "Stop"
4. Search for "Layout Shift" in trace
5. Check Cumulative Layout Shift metric

**Common Issues to Check:**
- Accordion expanding (height animation)
- Modal appearing (pushing content)
- Images without aspect ratio
- Text overflow on breakpoints

### 3.2 Fix Accordion Animations (if CLS > 0.05)

```tsx
// Bad: animates height (causes CLS)
<motion.div animate={{ height: 'auto' }}>
  <AccordionContent />
</motion.div>

// Good: use max-height or opacity
<motion.div
  animate={{ maxHeight: '300px', opacity: 1 }}
  initial={{ maxHeight: 0, opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  <AccordionContent />
</motion.div>

// Or better: CSS transition with fixed max-height
<div className="accordion-item" data-expanded={isOpen}>
  <div className="accordion-content">
    <Content />
  </div>
</div>

/* CSS */
.accordion-item[data-expanded="false"] .accordion-content {
  max-height: 0;
  overflow: hidden;
}
.accordion-item[data-expanded="true"] .accordion-content {
  max-height: 1000px; /* Must be >= actual content height */
}
.accordion-content {
  transition: max-height 0.3s ease;
}
```

---

## Phase 4: Image Optimization Setup (ONGOING)
**Effort:** 1 hour per image | **Expected Gain:** +20-30 points per hero image

### 4.1 Image Compression Pipeline

**When adding images to `/public/images/`:**

```bash
# Install tools
npm install -D sharp squoosh-cli

# 1. Compress to JPEG (baseline)
npx squoosh-cli --jpeg quality=80 image.png

# 2. Convert to WebP
npx squoosh-cli --webp quality=80 image.png

# 3. Convert to AVIF (best compression)
npx squoosh-cli --avif quality=65 image.png

# Verify sizes
ls -lh image.*
# Expected: original 800KB → jpeg 80KB → webp 60KB → avif 45KB
```

### 4.2 Responsive Image Component

```tsx
// components/ResponsiveImage.tsx
import Image from 'next/image'

interface ResponsiveImageProps {
  src: string
  alt: string
  priority?: boolean
  sizes?: string
}

export function ResponsiveImage({
  src,
  alt,
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px',
}: ResponsiveImageProps) {
  // Assume images are in /public/images/
  const baseName = src.replace(/\.\w+$/, '')
  
  return (
    <picture>
      {/* AVIF for modern browsers (30% smaller) */}
      <source srcSet={`${baseName}.avif`} type="image/avif" />
      
      {/* WebP fallback (25% smaller than JPEG) */}
      <source srcSet={`${baseName}.webp`} type="image/webp" />
      
      {/* JPEG fallback for older browsers */}
      <Image
        src={`${baseName}.jpg`}
        alt={alt}
        width={1200}
        height={800}
        priority={priority}
        sizes={sizes}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJ..." // Generate via plaiceholder
      />
    </picture>
  )
}
```

### 4.3 Coordinate with Design Lead

**Questions to Ask:**
1. Are hero images planned? Timeline?
2. Max file size allowed by brand guidelines?
3. Any specific photo treatments (filters, overlays)?
4. Resolution/aspect ratio requirements?

**Approval Workflow:**
1. Design provides high-res image (2000px+)
2. Performance creates AVIF/WebP/JPEG variants
3. Design approves quality (may need 2-3 iterations)
4. Performance implements with blur placeholder
5. Both verify on slow network (DevTools Slow 4G)

---

## 📋 Execution Checklist

### Before Starting
- [ ] All team members aware of changes
- [ ] Git branch created: `performance/bundle-optimization`
- [ ] Baseline Lighthouse score documented

### Phase 1 Execution
- [ ] Lazy-load BookingForm (all relevant pages)
- [ ] Optimize lucide-react imports
- [ ] Tree-shake date-fns
- [ ] Test: `npm run build && npm run dev`
- [ ] Verify bundle size: `npm run build 2>&1 | grep -A5 "Route"`

### Phase 2 Execution
- [ ] Add critical CSS inline
- [ ] Add resource hint links
- [ ] Test: no visual change, just metrics
- [ ] Verify: DevTools → Network → CSS now shows fewer requests

### Phase 3 Execution
- [ ] Run CLS audit
- [ ] Fix any accordions/modals causing shift
- [ ] Test on mobile (375px breakpoint)
- [ ] Verify CLS < 0.05

### Phase 4 Execution
- [ ] When images added: compress with squoosh-cli
- [ ] Implement ResponsiveImage component
- [ ] Add blur placeholders
- [ ] Test: slow 4G network (4x CPU slowdown)

### Final Verification
- [ ] Run Lighthouse 3x (take median)
- [ ] Compare to baseline (target +20-30 points)
- [ ] Core Web Vitals: LCP < 1.8s, CLS < 0.05
- [ ] No console errors or warnings
- [ ] Mobile performance score 85+

---

## 🔗 Coordination with Team

**Polisher 1 (Copy Lead):**
- No performance impact from text (currently optimized)
- Confirm no text bloat causes reflow on mobile

**Polisher 2 (UX Lead):**
- CLS fixes may affect interaction feedback timing
- Validate animations still feel responsive

**Polisher 3 (A11y Lead):**
- Lazy-loaded components must have focus management
- Verify skip-to-main-content link still works

**Polisher 4 (Design Lead):**
- Critical for image optimization coordination
- Approve format/quality trade-offs

**Polisher 6-10:**
- Monitor bundle size impact from new dependencies
- Flag any heavy component imports

---

## 📊 Success Metrics

| Metric | Baseline | Target | Status |
|--------|----------|--------|--------|
| Performance Score | 🔍 TBD | 90+ | [ ] |
| LCP | 1.2-1.8s | <1.8s | [ ] |
| CLS | <0.05 | <0.05 | [ ] |
| Bundle Size (JS) | ~320KB | <200KB | [ ] |
| First Byte to Paint | <1s | <1s | [ ] |

---

## ⚠️ Risk & Mitigation

| Risk | Mitigation |
|------|-----------|
| Lazy loading breaks form on slow networks | Provide fallback skeleton UI |
| Icon replacement changes visual appearance | Test with design lead before commit |
| CLS fix slows interactions | Use CSS transitions, not JavaScript |
| Image quality issues | Test AVIF/WebP on multiple devices |

---

## 📁 Files to Create/Modify

**Create:**
- [ ] `components/ResponsiveImage.tsx` — image component with AVIF/WebP
- [ ] `lib/image-optimization.ts` — helper utilities

**Modify:**
- [ ] `app/layout.tsx` — add critical CSS + resource hints
- [ ] `app/page.tsx` — lazy-load BookingForm (and similar pages)
- [ ] `micro-interactions.css` — fix accordion max-height animations
- [ ] Search & replace lucide-react heavy icons
- [ ] `next.config.ts` — (may add image service config)

---

**Document Created:** 2026-09-01 22:45 UTC  
**Status:** Ready for Phase 1 execution  
**Next Step:** Baseline Lighthouse audit → Phase 1 implementation
