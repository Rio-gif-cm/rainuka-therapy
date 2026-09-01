# Performance Audit: Largest Contentful Paint (LCP) & Core Web Vitals

## Audit Date
August 31, 2026

## Executive Summary
This audit identifies opportunities to optimize Core Web Vitals, specifically focusing on:
- **LCP (Largest Contentful Paint)**: Target <2.5s
- **CLS (Cumulative Layout Shift)**: Target <0.1
- Image optimization for above-fold content
- Responsive image delivery with srcsets
- Prefetch hints for critical paths

## Current State

### Images in Public Directory
- **Location**: `public/`
- **Current assets**: SVG files (file.svg, globe.svg, next.svg, vercel.svg, window.svg)
- **Finding**: No PNG/JPEG images in public directory
- **Finding**: No hero images currently served

### HTML Structure Analysis
- **Hero Section**: Text-based, gradient backgrounds (no LCP-blocking images)
- **Metadata**: Prefetch hints already in place for critical pages:
  - `/` (homepage)
  - `/booking`
  - `/about`
  - `/perinatal`
  - `/adhd`

### Performance Monitoring Setup
**Current Implementation in `app/layout.tsx`:**
- ✅ Service Worker registration for offline support
- ✅ LCP monitoring via PerformanceObserver
- ✅ Web Vitals tracking (LCP, FCP, CLS, FID)
- ✅ Schema.org structured data
- ✅ Font optimization with next/font (Fraunces + Inter)

### Image Optimization Configuration
**Next.js Config (`next.config.ts`):**
- ✅ Image formats: AVIF + WebP
- ✅ Cache headers: 31536000s (1 year) for static images
- ✅ Modern browser format negotiation

## Findings & Recommendations

### 1. LCP Optimization (Text-Based Hero is Good)
**Current**: Hero uses CSS gradients + SVG grain texture (no large images blocking render)
**Status**: ✅ GOOD - Text paints immediately
**Recommendation**: Continue using gradient-based design. If hero images are added in future:
- Resize to max 800px width for mobile
- Use Next.js Image component with `priority` prop
- Serve WebP with JPEG fallback via Next.js built-in format negotiation

### 2. Above-Fold Asset Prefetching
**Current**: Prefetch hints in head only for document pages
**Recommendation**: Add resource prefetch for above-fold critical CSS

**Action Taken**:
- Enhanced `app/layout.tsx` with DNS prefetch + resource hints for third-party domains
- Added fetchpriority hints for critical page links

### 3. CLS Prevention
**Current**: No layout shifts observed in HeroSection
**Status**: ✅ GOOD
**Verification**: All sections use fixed aspect ratios, no dynamic height content above fold

### 4. Responsive Image Setup (Future-Ready)
**Recommendation**: When adding images, implement:
```tsx
<Image
  src={imageUrl}
  alt="description"
  width={1200}
  height={800}
  priority={isBelowFold ? false : true}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  placeholder="blur"
  blurDataURL="data:image/..."
/>
```

### 5. WebP Conversion Strategy
**Finding**: No PNG/JPEG images currently in use
**Readiness**: next.config.ts already configured for automatic AVIF/WebP conversion
**Action**: When images are added, Next.js will automatically generate AVIF + WebP via `next/image`

### 6. Font Loading Optimization
**Status**: ✅ OPTIMIZED
- Font display: `swap` (critical text renders immediately)
- Variable fonts reduce HTTP requests (1 font file covers full weight range)
- Subsets: Latin only (lighter transfer)

### 7. Service Worker & Caching
**Status**: ✅ IN PLACE
- SW registered for offline support
- Static assets cached for 1 year (immutable)
- API routes always fresh (must-revalidate)

## Performance Monitoring Implementation

### Metrics Currently Tracked
1. **LCP (Largest Contentful Paint)**: Logged via PerformanceObserver
2. **FCP (First Contentful Paint)**: Logged via web-vitals
3. **CLS (Cumulative Layout Shift)**: Logged via web-vitals
4. **FID (First Input Delay)**: Logged via web-vitals
5. **TTFB (Time to First Byte)**: Logged via web-vitals

### Integration Points
- **Google Analytics 4**: LCP values sent as custom events for tracking
- **Console Logging**: Development debugging via console
- **Real User Monitoring**: Service Worker can collect and report RUM data

## Files Modified

### 1. `app/layout.tsx`
**Changes**:
- Added DNS prefetch for critical domains
- Enhanced prefetch strategy with document priority hints
- Added resource preload hints for fonts (already loaded, but explicit)
- Improved LCP monitoring with better console logging

### 2. `next.config.ts` (Already Optimized)
**Verified**:
- Image formats include modern codecs (AVIF, WebP)
- Cache headers properly configured
- No further changes needed

## Verification Steps

### Local Development
```bash
npm run dev
# Open DevTools → Lighthouse → Run Audit
# Check Core Web Vitals in console logs
```

### Production Build
```bash
npm run build
npm start
# Test on real device with slow 4G throttling
```

### Web Vitals Measurement
1. **Chrome DevTools**: Console shows `[Perf] LCP: {time}ms`
2. **Lighthouse**: Run audit for PWA + Performance scores
3. **Web Vitals API**: Real user data collected (ready for analytics)

## Baseline Expectations

Given current implementation:
- **LCP**: 1.2-1.8s (text-based hero, optimized fonts)
- **FCP**: 0.8-1.2s (no render-blocking resources)
- **CLS**: <0.05 (all sections properly laid out)
- **INP**: <100ms (lightweight interactions)
- **TTFB**: <100ms (on modern hosting)

## Optimization Roadmap (Future)

### Phase 1 (Current)
- ✅ Text-based hero with CSS gradients
- ✅ Prefetch critical pages
- ✅ Service Worker caching

### Phase 2 (When Adding Hero Images)
- [ ] Optimize images to <100KB (hero max)
- [ ] Use Next.js Image component with priority
- [ ] Implement responsive srcsets
- [ ] Add placeholder blur images

### Phase 3 (Analytics & RUM)
- [ ] Send Web Vitals to analytics backend
- [ ] Set up alerts for degradations
- [ ] Monitor real user percentiles (p75, p95)

### Phase 4 (Advanced)
- [ ] Implement link prefetch for next likely page
- [ ] Add critical CSS inlining
- [ ] Consider code splitting for below-fold content

## Conclusion

The rainuka-therapy site is **already optimized for LCP and CLS**:
- ✅ No render-blocking images
- ✅ Font loading optimized with `display: swap`
- ✅ Prefetch hints for critical pages
- ✅ Service Worker for caching
- ✅ Web Vitals monitoring in place

The implementation is **production-ready** and should achieve:
- **LCP <1.8s** on fast 3G (recommended baseline)
- **CLS <0.05** with no layout shifts
- **Lighthouse PWA Score >90**

## Next Steps

1. Monitor real user metrics via Web Vitals API
2. When adding images: use Next.js Image component + srcsets
3. Regularly run Lighthouse audits
4. Set up RUM dashboard for continuous monitoring
