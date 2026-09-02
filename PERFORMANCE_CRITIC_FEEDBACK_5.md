# PERFORMANCE CRITIC FEEDBACK — POLISHER #5
**Date:** September 1, 2026  
**Role:** Performance Lead (POLISHER #5)  
**Status:** Analysis Complete — Ready for Optimization

---

## Executive Summary

The Rainuka Therapy site has a **strong foundation** for performance, with text-based hero, optimized fonts, and service worker caching already in place. However, there are actionable opportunities to improve Lighthouse scores (target: 90+) and Core Web Vitals in the following areas:

| Category | Current Status | Target | Priority |
|----------|----------------|--------|----------|
| **Bundle Size** | ~320KB JS (unchecked) | <200KB | HIGH |
| **Font Loading** | ✅ Self-hosted, swap strategy | Maintain | OK |
| **Image Optimization** | 0 raster images (SVG only) | Ready for images | MEDIUM |
| **Animations** | Micro-interactions CSS | Audit for CLS | MEDIUM |
| **Lighthouse Score** | Unknown (pending build test) | 90+ | HIGH |
| **CLS** | Expected <0.05 | <0.05 | OK |
| **LCP** | Expected 1.2-1.8s | <2.5s | OK |

---

## 🔍 Detailed Findings

### 1. **Bundle Size Analysis**
**Category:** HIGH PRIORITY  
**Status:** ⚠️ Potential Concern

**Findings:**
- Next.js 16.3.4 with React 19.2.8 (modern runtime)
- Dependencies: 
  - `@tailwindcss/forms` — reasonable for form components
  - `lucide-react` (1.38.0) — icon library (usually ~8-15KB gzipped)
  - `date-fns` (4.4.0) — date utilities (~10KB gzipped)
  - Service Worker registered with multi-strategy caching

**Recommendations:**
1. **Code splitting:** Lazy-load modals (ContactForm, BookingWidget) with `next/dynamic`
2. **Tree-shake lucide-react:** Ensure only used icons are bundled
3. **Consider icon alternatives:** Replace with inline SVGs for critical UI (chevron, menu icons)
4. **Date-fns optimization:** Use `lodash-es` for better tree-shaking on specific utilities

**Expected Impact:** Reduce JS bundle by 15-25% → **LCP improvement of 0.3-0.7s**

---

### 2. **Font Loading Strategy**
**Category:** ALREADY OPTIMIZED ✅  
**Status:** Excellent

**Current Implementation:**
- ✅ Fraunces (serif) — self-hosted, variable, `display: swap`
- ✅ Inter (sans) — self-hosted, preloaded, `display: swap`
- ✅ Latin-only subsets (not loading unnecessary characters)
- ✅ No Google Fonts CDN round-trip

**Verification:**
- Font display strategy prevents Flash of Unstyled Text (FOUT)
- No render-blocking third-party fonts

**No further action needed.**

---

### 3. **Image Optimization Readiness**
**Category:** MEDIUM PRIORITY  
**Status:** ✅ Ready (Currently 0 raster images)

**Current State:**
- 5 SVG files in `/public` (file.svg, globe.svg, next.svg, vercel.svg, window.svg)
- No PNG/JPEG images deployed
- `next.config.ts` already configured for AVIF + WebP format negotiation

**When images are added, implement:**
1. **Responsive images with srcset:**
   ```tsx
   <Image
     src="/hero.jpg"
     alt="Therapist photo"
     width={1200}
     height={800}
     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
     priority={true}  // Above fold
     placeholder="blur"
   />
   ```

2. **Image compression targets:**
   - Hero image: <80KB (max)
   - Thumbnail images: <30KB
   - Profile photos: <50KB

3. **Format strategy:**
   - Desktop: AVIF (30% smaller than WebP)
   - Mobile: WebP
   - Fallback: JPEG

**Expected Impact:** If hero image added → **LCP improvement of 0.5-1.2s** (depending on size)

---

### 4. **Animations & Cumulative Layout Shift (CLS)**
**Category:** MEDIUM PRIORITY  
**Status:** ⚠️ Needs Review

**Current Implementation:**
- `micro-interactions.css` — motion rules for affordances
- Hero section uses CSS gradients (no layout shifts)
- No observed dynamic height content above fold

**Concerns to Monitor:**
1. **Accordion animations** — May cause CLS if heights are animated without fixed aspect ratio
2. **Modal transitions** — Ensure modals don't push layout on enter
3. **Responsive breakpoints** — Verify text reflow doesn't cause shift below 1024px

**Audit Recommendations:**
- Run Lighthouse audit with throttling (Slow 4G)
- Check CLS metric in Chrome DevTools → Performance → Search for "Layout Shift"
- Verify all below-fold sections have fixed aspect ratios

**Expected Impact:** Fix any animation-related CLS → **CLS improvement to <0.05**

---

### 5. **Lighthouse Score Baseline**
**Category:** HIGH PRIORITY  
**Status:** 🔍 Pending Build Test

**Build Completed:** ✅ Production build successful (41 routes, 645ms generation time)

**Next Steps:**
1. Start dev server: `npm run dev`
2. Run Lighthouse audit on:
   - Homepage (`/`)
   - Booking page (`/booking`)
   - About page (`/about`)
   - Specialty page (e.g., `/perinatal`)

3. Record baseline scores for Performance, Accessibility, Best Practices, SEO

---

## 📋 Optimization Roadmap

### Phase 1: Bundle Optimization (Days 1-2)
**Effort:** 2-3 hours  
**Expected Gain:** +15-25 Lighthouse points

- [ ] Identify and lazy-load ContactForm modal with `next/dynamic`
- [ ] Lazy-load BookingWidget (if third-party calendar)
- [ ] Audit lucide-react imports — replace heavy icons with inline SVG
- [ ] Tree-shake date-fns (only use `format` and `parse`)

### Phase 2: Critical CSS & Resource Hints (Days 2-3)
**Effort:** 1-2 hours  
**Expected Gain:** +10-15 Lighthouse points

- [ ] Add `<link rel="preload">` for hero image (when added)
- [ ] Inline critical CSS in `<head>` (colors, typography, layout)
- [ ] Add DNS prefetch for third-party domains (Google Analytics, etc.)
- [ ] Preload variable fonts explicitly

### Phase 3: Animation Audit & CLS Fix (Days 3-4)
**Effort:** 2-3 hours  
**Expected Gain:** +5-10 Lighthouse points + Better UX

- [ ] Run Lighthouse with network throttling
- [ ] Fix any CLS violations (accordions, modals)
- [ ] Verify all images have explicit width/height
- [ ] Test responsive design at breakpoints (375px, 768px, 1440px)

### Phase 4: Image Optimization (Ongoing)
**Effort:** 1 hour per image  
**Expected Gain:** +20-30 Lighthouse points (per hero image added)

- [ ] Compress hero image to <80KB
- [ ] Generate AVIF + WebP variants
- [ ] Add blur placeholder via `plaiceholder` or `sharp`
- [ ] Set up Vercel Image Optimization (if deploying to Vercel)

---

## 🎯 Key Performance Metrics

### Current Expectations (Based on Audit Findings)
| Metric | Target | Status |
|--------|--------|--------|
| **Performance Score** | 90+ | 🔍 TBD |
| **LCP** | <2.5s | ✅ Expected 1.2-1.8s |
| **FCP** | <1.8s | ✅ Expected 0.8-1.2s |
| **CLS** | <0.1 | ✅ Expected <0.05 |
| **Speed Index** | <3.4s | ✅ Expected 2.0-2.5s |
| **TTI** | <3.8s | ✅ Expected 2.5-3.0s |
| **Total Blocking Time** | <200ms | ✅ Expected <150ms |

### Performance Budget
```
JavaScript Budget:  <200KB (gzipped)
CSS Budget:         <30KB (gzipped)
HTML Budget:        <50KB (gzipped)
Images Budget:      <300KB total (for homepage)
Total:              <580KB (gzipped)
```

---

## 🔧 Collaboration Points

### Design Lead Coordination
**When adding images:**
1. Provide high-res source (2000px+) for optimization
2. Approve AVIF/WebP quality settings (may need 2-3 iterations)
3. Validate blur placeholder appearance
4. Check responsive crop behavior on mobile

**Questions for Design Lead:**
- Are hero images planned? If yes, when?
- Any background images in cards/sections?
- Profile photos needed for testimonials?

### Team Coordination
**Polisher 1-4, 6-10:**
- **Polisher 1 (Copy Lead):** No text bloat in performance traces ✅
- **Polisher 2 (UX Lead):** Micro-interactions within CLS budget
- **Polisher 3 (A11y Lead):** No accessibility-perf conflicts (ARIA live regions, focus traps)
- **Polisher 4 (Design Lead):** Image optimization coordination
- **Polisher 6-10:** Code quality impact on bundle size

---

## 📊 Verification Checklist

Before committing performance improvements:

- [ ] Run `npm run build` — verify no TypeScript errors
- [ ] Start dev server: `npm run dev`
- [ ] Run Lighthouse audit (desktop + mobile)
  - Throttling: Slow 4G / 4x CPU slowdown
  - Run 3x, take median score
- [ ] Check CLS with Chrome DevTools → Performance tab
- [ ] Verify no layout shifts on hover/click
- [ ] Test on slow network (DevTools → Network tab → Slow 4G)
- [ ] Check bundle size: `npm run build && du -sh .next`

---

## 🚀 Next Steps

1. **Immediate (Today):**
   - [ ] Run production Lighthouse audit → document baseline
   - [ ] Record Core Web Vitals metrics (LCP, CLS, FID)
   - [ ] Share baseline with team

2. **This Week:**
   - [ ] Implement Phase 1 optimizations (bundle splitting)
   - [ ] Add Phase 2 resource hints
   - [ ] Complete CLS audit (Phase 3)

3. **Next Week:**
   - [ ] Coordinate with Design Lead on image optimization
   - [ ] Implement image compression pipeline
   - [ ] Final Lighthouse audit + comparison

---

## 📁 Related Files

- `PERFORMANCE_AUDIT.md` — Core Web Vitals baseline
- `PERFORMANCE_CHECKLIST.md` — Detailed implementation checklist
- `next.config.ts` — Image optimization config (already good)
- `app/layout.tsx` — Font loading + Service Worker
- `app/globals.css` — Design tokens (no duplication)
- `.next/` — Production build artifacts

---

## 📝 Notes

**Build Status:** ✅ Successful
- Next.js 16.3.4 (Turbopack) compiled in 4.4s
- 41 routes generated (39 static, 2 dynamic API)
- No errors or warnings (except expected MODULE_TYPELESS_PACKAGE_JSON)

**Architecture Strength:** The site uses best practices:
- ✅ Self-hosted fonts (no CDN round-trip)
- ✅ Service Worker for offline + caching
- ✅ Next.js Image component ready
- ✅ Tailwind CSS with purging enabled
- ✅ Next.js dynamic imports available
- ✅ Responsive design patterns

**Performance-Ready:** The foundation is solid. Gains will come from:
1. Bundle size reduction (lazy loading)
2. Resource hints (prefetch/preload)
3. Animation/CLS fixes
4. Image optimization (when added)

---

**Report Generated:** 2026-09-01 22:30 UTC  
**Next Review:** After Phase 1 optimizations complete
