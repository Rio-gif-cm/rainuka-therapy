# POLISHER #5 — Week 1 Implementation Checklist
**Date:** September 1, 2026  
**Status:** Phase 1 Quick Wins (6-8 hours)  
**Focus:** CTR + Dwell Time + CWV Optimization

---

## Phase 1: Quick Wins Checklist

### ✅ FIX #1: Hero H1 Keyword Optimization
**Estimated Time:** 1 hour  
**Impact:** +10-15% CTR

**To-Do List:**
- [ ] Update `app/page.tsx` landing hero H1
- [ ] Update `app/about/page.tsx` About H1
- [ ] Update `app/adhd/page.tsx` ADHD H1
- [ ] Update `app/perinatal/page.tsx` Perinatal H1
- [ ] Update `app/couples/page.tsx` Couples H1
- [ ] Update `app/grief/page.tsx` Grief H1
- [ ] Update `app/faq/page.tsx` FAQ H1
- [ ] Update `app/guides/page.tsx` Guides H1
- [ ] Test all H1s render correctly (no text overflow)
- [ ] Verify SEO: Each H1 includes primary keyword

**Proposed H1 Copy:**
```
Landing: "ADHD Therapy & Perinatal Mental Health for High-Achieving Women"
About: "Meet Rainuka Oberoi: Trauma-Informed Therapist for ADHD, Postpartum Anxiety & Career"
ADHD: "Adult ADHD Therapy & Diagnosis for Women in the Bay Area"
Perinatal: "Postpartum Anxiety & Perinatal Mental Health Therapy"
Couples: "Couples Therapy & Relationship Counseling | Gottman Method"
Grief: "Grief Counseling & Loss Support Therapy"
FAQ: "Therapy FAQ: ADHD, Perinatal, Couples, Grief & Career Questions"
Guides: "Therapy Guides: ADHD, Perinatal Anxiety, Career & Mental Health Resources"
```

**Files:**
- `app/page.tsx` (line ~TBD — hero section)
- `app/about/page.tsx` (line ~TBD — hero section)
- `app/adhd/page.tsx` (line ~TBD — hero section)
- `app/perinatal/page.tsx` (line ~TBD — hero section)
- `app/couples/page.tsx` (line ~TBD — hero section)
- `app/grief/page.tsx` (line ~TBD — hero section)
- `app/faq/page.tsx` (line ~TBD — hero section)
- `app/guides/page.tsx` (line ~TBD — hero section)

**QA:**
- [ ] Desktop 1440px: H1 renders without truncation
- [ ] Mobile 375px: H1 wraps correctly, readable
- [ ] Lighthouse: No issues
- [ ] Google Search Console: H1 structure valid

---

### ✅ FIX #2: Meta Description Expansion
**Estimated Time:** 1-2 hours  
**Impact:** +15-20% CTR

**To-Do List:**
- [ ] Update `app/page.tsx` meta (landing)
- [ ] Update `app/about/page.tsx` meta
- [ ] Update `app/adhd/page.tsx` meta
- [ ] Update `app/perinatal/page.tsx` meta
- [ ] Update `app/couples/page.tsx` meta
- [ ] Update `app/grief/page.tsx` meta
- [ ] Update `app/faq/page.tsx` meta
- [ ] Update `app/guides/page.tsx` meta
- [ ] Test all metas in Google Search Console rich results test
- [ ] Verify all 150-160 chars

**Proposed Meta Copy:**
```
Landing:
"Therapy for perinatal anxiety, ADHD diagnosis & career burnout. 
Telehealth & Bay Area. Meet Rainuka, LCSW. Free consultation available."

About:
"Trauma-informed therapy for ADHD, perinatal anxiety & career. 
Licensed therapist in Bay Area & online. Book your free consultation today."

ADHD:
"Expert ADHD diagnosis and therapy for women. Executive function support, 
identity reconstruction. Bay Area & telehealth. Free consultation available."

Perinatal:
"Postpartum anxiety, pregnancy loss & perinatal mental health therapy. 
Specialized support for mothers. Bay Area & online. Free consultation."

Couples:
"Couples therapy using Gottman Method & EFT. Affair recovery, communication, 
intimacy building. Bay Area & online. Free consultation available."

Grief:
"Grief counseling for bereavement, pregnancy loss, career change & more. 
Compassionate support through loss. Bay Area & telehealth available."

FAQ:
"Therapy FAQ: 50+ answers across 6 categories—therapy basics, pricing, ADHD, 
perinatal, couples work, and grief. Real questions answered."

Guides:
"Free therapy guides on ADHD diagnosis, postpartum anxiety, career transitions, 
grief recovery, couples communication, and mental health. Download."
```

**Files:**
- `app/page.tsx` (metadata export)
- `app/about/page.tsx` (metadata export)
- `app/adhd/page.tsx` (metadata export)
- `app/perinatal/page.tsx` (metadata export)
- `app/couples/page.tsx` (metadata export)
- `app/grief/page.tsx` (metadata export)
- `app/faq/page.tsx` (metadata export)
- `app/guides/page.tsx` (metadata export)

**QA:**
- [ ] All descriptions 150-160 chars
- [ ] Brand name consistent (Rainuka or "Rainuka Oberoi, LCSW")
- [ ] Include primary keyword + benefit + CTA
- [ ] Google SERP simulation: Text renders cleanly (no truncation)

---

### ✅ FIX #3: Homepage Hero Copy Enhancement
**Estimated Time:** 1 hour  
**Impact:** +5-10% homepage bounce reduction

**To-Do List:**
- [ ] Update `app/page.tsx` hero heading
- [ ] Add value prop subheading
- [ ] Test mobile 375px (heading should wrap naturally)
- [ ] Test desktop 1440px (heading should fit on 2-3 lines)

**Current Hero:**
```tsx
<h1>Therapy for perinatal anxiety, ADHD, and career</h1>
```

**Proposed Hero:**
```tsx
<h1>Therapy for Perinatal Anxiety, ADHD & Career Burnout</h1>
<p className="text-lg text-sage-700 mt-4">
  Evidence-based therapy tailored to your life: pregnancy & postpartum challenges, 
  late ADHD diagnosis, and navigating career change. Meet Rainuka.
</p>
```

**Files:**
- `app/page.tsx` (hero section)

**QA:**
- [ ] Desktop: Heading readable, subheading provides context
- [ ] Mobile: No overflow, natural line breaks
- [ ] Persona clear: "high-achieving women in transition"

---

### ✅ FIX #4: Breadcrumb Navigation (All Specialty Pages)
**Estimated Time:** 1-2 hours  
**Impact:** +5-10% navigation clarity; +3% bounce reduction

**To-Do List:**
- [ ] Create/verify `components/Breadcrumb.tsx` (already created)
- [ ] Import Breadcrumb in `app/adhd/page.tsx`
- [ ] Import Breadcrumb in `app/couples/page.tsx`
- [ ] Import Breadcrumb in `app/grief/page.tsx`
- [ ] Import Breadcrumb in `app/perinatal/page.tsx`
- [ ] Add breadcrumb to top of hero section on each page
- [ ] Test all breadcrumbs render correctly
- [ ] Verify links work (Home, Services, Specialty)
- [ ] Test on desktop + mobile

**Breadcrumb Pattern:**
```tsx
import { Breadcrumb } from '@/components/Breadcrumb';

export default function ADHDPage() {
  return (
    <main>
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'ADHD Therapy' }
        ]}
      />
      {/* Rest of page */}
    </main>
  );
}
```

**Files:**
- `components/Breadcrumb.tsx` (verify existing)
- `app/adhd/page.tsx` (add import + breadcrumb)
- `app/couples/page.tsx` (add import + breadcrumb)
- `app/grief/page.tsx` (add import + breadcrumb)
- `app/perinatal/page.tsx` (add import + breadcrumb)

**QA:**
- [ ] All 4 specialty pages have breadcrumbs
- [ ] Breadcrumbs render at top of page
- [ ] Links navigate correctly
- [ ] No console errors
- [ ] Mobile breadcrumb doesn't overflow (uses responsive classes)

---

### ✅ FIX #10: LCP Optimization (Preload + Critical CSS)
**Estimated Time:** 1 hour  
**Impact:** Maintain LCP <1.5s

**To-Do List:**
- [ ] Add image preload to `app/layout.tsx` (hero images)
- [ ] Verify above-fold CSS inlined in `<head>` (check `app/layout.tsx`)
- [ ] Test LCP with Lighthouse (mobile, Slow 4G throttling)
- [ ] Document baseline LCP score

**Proposed Changes:**

In `app/layout.tsx` `<head>` section:
```tsx
{/* Preload hero images */}
<link rel="preload" as="image" href="/images/hero-bg.webp" type="image/webp" />
<link rel="preload" as="image" href="/images/hero-fallback.jpg" type="image/jpeg" />

{/* Preload critical fonts */}
<link rel="preload" as="font" href="/fonts/inter-var.woff2" type="font/woff2" crossOrigin="anonymous" />
```

**Files:**
- `app/layout.tsx` (add preload links)
- `app/globals.css` (verify critical CSS above-fold)

**QA:**
- [ ] Lighthouse LCP score: <1.5s
- [ ] No preload errors in console
- [ ] Images load correctly

---

## Phase 1 Summary

| Fix # | Task | Time | Impact |
|-------|------|------|--------|
| 1 | Hero H1 Optimization | 1 h | +10-15% CTR |
| 2 | Meta Descriptions | 1-2 h | +15-20% CTR |
| 3 | Homepage Hero Copy | 1 h | +5-10% bounce |
| 4 | Breadcrumb Navigation | 1-2 h | +5-10% clarity |
| 10 | LCP Preload | 1 h | Maintain <1.5s |
| **TOTAL** | **5 Fixes** | **6-8 h** | **+40-60% engagement** |

---

## Testing & Validation

### Desktop (1440px)
- [ ] All pages render without layout shifts
- [ ] H1s don't overflow
- [ ] Breadcrumbs visible and clickable
- [ ] Meta descriptions accurate in Search Console preview
- [ ] Lighthouse score: No regressions

### Mobile (375px)
- [ ] H1s wrap naturally (no truncation)
- [ ] Breadcrumbs don't overflow (use responsive classes)
- [ ] Touch targets ≥48px (breadcrumb links)
- [ ] Meta descriptions accurate
- [ ] No console errors

### Lighthouse Audit
- [ ] LCP: <1.5s ✅
- [ ] CLS: <0.1 ✅
- [ ] INP: <200ms ✅
- [ ] Accessibility: ≥95 ✅

### SEO Validation
- [ ] H1: Each page has exactly 1 H1 with primary keyword
- [ ] Meta: 150-160 chars, includes keyword + benefit + CTA
- [ ] Breadcrumbs: Structured data (optional, but good for SEO)
- [ ] Google Rich Results Test: All metas pass validation

---

## Commit Strategy

**Single commit (all Phase 1 fixes together):**
```
git commit -m "Phase 1: SEO/UX quick wins — H1 optimization, meta descriptions, hero copy, breadcrumbs, LCP preload

- Update H1 tags on all pages (landing, about, specialties, FAQ, guides)
- Expand meta descriptions (150-160 chars, include benefit + CTA)
- Enhance homepage hero copy with value prop
- Add breadcrumb navigation to specialty pages (ADHD, couples, grief, perinatal)
- Preload hero images + critical fonts for LCP optimization
- Expected impact: +40-60% engagement improvement, +15-20% CTR lift

Fixes:
- Improves CTR through better keyword matching in H1 + meta
- Reduces bounce rate through clearer hero value prop
- Enhances navigation clarity with breadcrumbs
- Maintains Core Web Vitals (LCP <1.5s)

Related audits: SEO-AUDIT-CONTENT-QUALITY-REPORT.md, POLISHER-2-UX-FEEDBACK-ANALYSIS.md"
```

---

## Next Steps (Week 2)

- [ ] Fix #5: Social proof distribution (2-3 hours)
- [ ] Fix #6: Contextual CTAs (2-3 hours)
- [ ] Fix #7: Readability & visual hierarchy (3-4 hours)

Expected cumulative impact: +60-70% engagement improvement

---

**Status:** 🟡 Ready for Implementation  
**Assignee:** Polisher #5 (or designate to team)  
**Deadline:** End of Week 1 (September 5, 2026)
