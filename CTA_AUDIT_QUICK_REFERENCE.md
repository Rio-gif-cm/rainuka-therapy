# CTA Audit Quick Reference — 11 Improvements at a Glance

**Audit Date:** 2026-09-02  
**Report:** `CTA_PLACEMENT_VISIBILITY_AUDIT.md`  
**Git Commit:** `0f18921`

---

## Critical Gaps (Address First)

| Gap | Impact | Fix |
|-----|--------|-----|
| No sticky mobile CTA | 15-20% conversion loss | Add `StickyBookingCTA` component |
| Button sizes inconsistent | WCAG failures | Standardize to py-4 (48px) minimum |
| Hero has 3+ CTAs | Cognitive overload | Reduce to 1 primary + 1 secondary |
| Touch targets <44px | Accessibility | Use px-6 py-4 for all buttons |

---

## 11 Improvements: What & Where

### 1️⃣ Sticky Mobile CTA Bar (HIGH)
**Problem:** Long pages (specs, guides) require scroll to find booking.  
**Solution:** Add `components/StickyBookingCTA.tsx` — appears after 500px scroll.  
**Pages:** /adhd, /perinatal, /career, /guides  
**Est. Impact:** ↑ 15-20% mobile bookings

### 2️⃣ Button Standardization (HIGH)
**Problem:** Buttons are py-2, py-3, py-4—no consistency.  
**Solution:** Set primary to px-6 py-4 (56×48px) across all pages.  
**Files:** `components/Button.tsx` or update `EnhancedComponents.tsx`  
**Est. Impact:** ↑ 10-12% accessibility score

### 3️⃣ Hero CTA Clutter (MEDIUM)
**Problem:** Homepage hero has Book + 3 persona cards + "Explore" = 5 paths.  
**Solution:** Single "Book Consultation" button + "Explore" link only.  
**Files:** `components/HeroSection.tsx`  
**Est. Impact:** ↓ decision paralysis

### 4️⃣ Section-End CTAs (MEDIUM)
**Problem:** Content sections end abruptly; users scroll to footer to book.  
**Solution:** Add sage-50 section after each major block with CTA.  
**Files:** Create `components/SectionCTA.tsx`  
**Pages:** /perinatal, /adhd, /career, /guides, /about  
**Est. Impact:** ↑ 8-12% engagement

### 5️⃣ Microcopy Standardization (MEDIUM)
**Problem:** Labels vary: "Book"/"Schedule"/"Get started"/"Learn more".  
**Solution:** Create `src/data/microcopy.ts` with 5 canonical labels.  
**Canonical Labels:**
- "Book Consultation" (primary booking)
- "Schedule Now" (alternative)
- "Explore [X]" (discovery)
- "Learn More" (info pages)
- "Get in Touch" (contact)

**Est. Impact:** ↑ 5-8% conversion

### 6️⃣ Mobile Button Sizing (HIGH)
**Problem:** Mobile (375px) squeezes buttons; text wraps.  
**Solution:** Use `px-4 sm:px-6 py-3 sm:py-4` for responsive padding.  
**Files:** `app/styles.ts` or `tailwind.config.ts`  
**Est. Impact:** ↓ 20% mis-taps

### 7️⃣ Color & Contrast Enforcement (MEDIUM)
**Problem:** Outline buttons unclear; insufficient contrast on tinted backgrounds.  
**Solution:** Create button variant palette with tested contrast ratios.  
```
.btn-primary: bg-sage-600 text-white (7.2:1 ✅)
.btn-secondary: border-sage-600 text-sage-600 (5.2:1 ✅)
.btn-tertiary: text-sage-600 underline (5.2:1 ✅)
```
**Files:** `app/styles.ts`  
**Est. Impact:** ↑ 6-8% accessibility

### 8️⃣ Booking Form Emphasis (MEDIUM)
**Problem:** Submit button looks same as other buttons; no urgency.  
**Solution:** Add shadow, scale, bold text, social proof badge.  
**Files:** `components/BookingForm.tsx`  
**Est. Impact:** ↑ 10-15% form completion

### 9️⃣ Contrast Testing Matrix (HIGH)
**Problem:** Sage colors only tested on white backgrounds.  
**Solution:** Test on all tints (white, sage-50, burgundy, accent).  
**Files:** Create `src/utils/contrast-checker.ts`  
**Test Matrix:**
- ✅ Good: sage button on white/light
- ⚠️ Caution: sage link on tinted sections
- ❌ Bad: sage button on burgundy

**Est. Impact:** ↑ accessibility for 8% colorblind users

### 🔟 Mobile Testing Framework (MEDIUM)
**Problem:** No automated tests for CTA placement or touch targets.  
**Solution:** Cypress test suite checking 375px viewport.  
**Files:** Create `test/cta-mobile.test.ts`  
**Test Cases:**
- Button height ≥48px
- CTA visible at 375px without scroll
- Sticky CTA appears after scroll
- Text doesn't wrap (16px font)

**Est. Impact:** Prevents regressions

### 1️⃣1️⃣ Animated CTA Pulse (LOW)
**Problem:** Primary CTA blends into layout; no visual attention.  
**Solution:** Add subtle pulse animation on hero CTA (load only).  
**Files:** `app/styles.ts` or `tailwind.config.ts`  
**Code:**
```css
@keyframes ctaPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(107, 148, 79, 0.4); }
  50% { box-shadow: 0 0 0 12px rgba(107, 148, 79, 0); }
}
```
**Est. Impact:** ↑ 3-5% CTR

---

## Implementation Phases

### Phase 1 (Week 1) — Quick Wins
Priority: #1, #2, #3  
**Estimated Time:** 1-2 days  
**Estimated Conversions Lift:** ↑ 25-35% (mobile bookings)

Checklist:
- [ ] Sticky mobile CTA implemented
- [ ] All buttons px-6 py-4
- [ ] Hero reduced to 1 primary CTA

### Phase 2 (Week 2) — Content Optimization
Priority: #4, #5, #6  
**Estimated Time:** 2-3 days  
**Estimated Engagement Lift:** ↑ 10-15% overall

Checklist:
- [ ] Section-end CTAs on all long pages
- [ ] Microcopy.ts created & applied
- [ ] Mobile padding classes updated

### Phase 3 (Week 3) — Compliance & Polish
Priority: #7, #8, #9, #10, #11  
**Estimated Time:** 2-3 days  
**Estimated Accessibility Gain:** ↑ 6-8%

Checklist:
- [ ] Button contrast palette defined
- [ ] Booking form submit emphasized
- [ ] Contrast tester utility created
- [ ] Mobile testing suite passes
- [ ] CTA pulse animation implemented

---

## Key Metrics to Track

**Conversion Metrics:**
- Booking form starts (baseline)
- Booking form completions (baseline)
- Booking clicks by page
- Sticky CTA engagement (post-Phase 1)

**Mobile Metrics (at 375px):**
- CTA visibility on initial load (target: 100%)
- Button touch target sizes (target: ≥48px)
- Booking CTA appearance after scroll (target: <500px)

**Accessibility Metrics:**
- Contrast ratios (target: ≥4.5:1)
- WCAG AA score (target: 95%+)
- Test regressions (target: 0)

---

## Files Reference

**Audit Files:**
- `CTA_PLACEMENT_VISIBILITY_AUDIT.md` — Full 354-line report
- `cta-audit-summary.json` — Metadata
- `cta-placement-audit.js` — Reusable audit script

**Implementation Files (to create/update):**
- `components/StickyBookingCTA.tsx` — NEW
- `components/SectionCTA.tsx` — NEW
- `components/Button.tsx` — NEW or update existing
- `src/data/microcopy.ts` — NEW
- `src/utils/contrast-checker.ts` — NEW
- `test/cta-mobile.test.ts` — NEW
- `components/HeroSection.tsx` — UPDATE
- `components/BookingForm.tsx` — UPDATE
- `app/styles.ts` — UPDATE
- `tailwind.config.ts` — UPDATE

---

## Quick Implementation Snippet

**Sticky CTA (Phase 1):**
```jsx
// components/StickyBookingCTA.tsx
'use client'
export default function StickyBookingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-sage-100 px-4 py-3 z-40">
      <Link href="/booking" className="block w-full btn-primary text-center">
        Book Consultation
      </Link>
    </div>
  )
}
```

**Microcopy (Phase 2):**
```ts
// src/data/microcopy.ts
export const CTALabels = {
  BOOK: "Book Consultation",
  SCHEDULE: "Schedule Now",
  EXPLORE: "Explore",
  LEARN_MORE: "Learn More",
  CONTACT: "Get in Touch",
}
```

---

## Success Criteria

✅ All primary CTAs ≥48×48px  
✅ Booking CTA visible without scroll on homepage  
✅ Sticky mobile CTA on pages >2000px  
✅ Microcopy uses action-oriented language  
✅ All button colors pass 4.5:1 contrast  
✅ Mobile testing suite at 375px passes  
✅ Booking conversion ↑ by measurable % (baseline before Phase 1)

---

**Report Generated:** 2026-09-02  
**Commit:** `0f18921` on `main`  
**Status:** Ready for implementation
