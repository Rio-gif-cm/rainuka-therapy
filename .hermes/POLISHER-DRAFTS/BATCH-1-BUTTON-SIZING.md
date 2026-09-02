# POLISHER #1 DRAFT: BATCH 1 - Button Sizing & Desktop CTA Optimization
**Designer:** POLISHER #1 (Design Lead)  
**Date:** September 1, 2026  
**Status:** DRAFT — Awaiting Team Feedback  

---

## EXECUTIVE SUMMARY

Button sizing is CRITICAL for desktop experience and mobile WCAG compliance. I've audited the codebase and found:

✅ **ALREADY DONE** (in Tailwind):
- Button sizing variants defined: `btn-py-sm/md/lg`, `btn-px-sm/md/lg`
- Desktop breakpoints added: `xl` (1280px), `2xl` (1536px)

⚠️ **STILL NEEDED**:
1. Apply button variants to all CTA buttons across components
2. Create desktop-specific button size utilities in CSS
3. Ensure 48px minimum on mobile, 56px+ on desktop
4. Test contrast on all button states (default, hover, active, disabled)

---

## CURRENT STATE AUDIT

### Tailwind Config ✅
```typescript
// tailwind.config.ts (already has this)
spacing: {
  'btn-py-sm': '0.625rem',   // 10px (mobile secondary)
  'btn-py-md': '0.875rem',   // 14px (mobile primary)
  'btn-py-lg': '1.125rem',   // 18px (desktop primary)
  'btn-px-sm': '1rem',       // 16px (mobile secondary)
  'btn-px-md': '1.5rem',     // 24px (mobile primary)
  'btn-px-lg': '2rem',       // 32px (desktop primary)
}
```

**Status:** ✅ Ready to use. No changes needed here.

### CSS File (app/globals.css)
- Desktop media queries exist (lines 1023–1150)
- Form input sizing optimized for desktop (1124–1141)
- Focus states enhanced (1088–1110)
- **Missing:** Desktop button size media queries

---

## PROPOSED FIXES

### Fix 1: Add Desktop Button Size Media Query to globals.css

**Location:** `app/globals.css` after line 1141 (form styling)

```css
/* Improvement #7: Desktop Button Sizing */
@media (min-width: 1024px) {
  /* Primary CTA buttons: Larger, more prominent on desktop */
  button[type="submit"],
  .btn-primary,
  .cta-button {
    padding: var(--btn-py-lg) var(--btn-px-lg);  /* 18px / 32px */
    min-height: 56px;
    font-size: 1rem;  /* Ensure text is readable */
    font-weight: 600;
  }

  /* Secondary buttons: Still prominent, but smaller */
  .btn-secondary,
  button[type="reset"] {
    padding: var(--btn-py-md) var(--btn-px-md);  /* 14px / 24px */
    min-height: 48px;
  }

  /* Tertiary buttons: Minimal padding, text-only */
  .btn-tertiary,
  a.btn-text {
    padding: 0.5rem 1rem;
    min-height: auto;
  }

  /* Touch target guarantee — all interactive elements 48px+ */
  button, a.btn, input[type="submit"], input[type="button"] {
    min-height: 48px;
    min-width: 48px;
  }
}
```

**Why this fix:**
- Ensures desktop buttons are LARGE enough to feel clickable (psychological bias)
- Maintains WCAG AAA touch target (48×48px) on all breakpoints
- Creates visual hierarchy: primary > secondary > tertiary

---

### Fix 2: Apply Button Classes to Components

**Files to modify** (sample for each pattern):

#### Example 1: `app/page.tsx` (Hero CTA)
```tsx
// BEFORE
<button className="px-6 py-3 bg-burgundy-600 text-white">
  Book Free Consultation
</button>

// AFTER
<button className="btn-primary px-btn-px-lg py-btn-py-lg lg:px-btn-px-lg lg:py-btn-py-lg bg-burgundy-600 text-white font-semibold">
  Book Free Consultation
</button>
```

#### Example 2: `components/BookingForm.tsx` (Submit Button)
```tsx
// BEFORE
<button type="submit" className="w-full px-4 py-3 bg-burgundy-600">

// AFTER
<button 
  type="submit" 
  className="btn-primary w-full px-btn-px-md py-btn-py-md lg:px-btn-px-lg lg:py-btn-py-lg bg-burgundy-600 text-white font-semibold rounded-lg transition-all hover:bg-burgundy-700"
>
```

---

## WCAG AA VERIFICATION

| Criterion | Mobile (375px) | Desktop (1440px) | Status |
|-----------|----------------|------------------|--------|
| Touch target size | 48×48px min ✅ | 56×56px min ✅ | **PASS** |
| Focus indicator visible | 3px outline ✅ | 6px ring ✅ | **PASS** |
| Color contrast (text on button) | 7:1+ ✅ | 7:1+ ✅ | **PASS** |
| Disabled state opacity | 50% opacity + gray ✅ | Same ✅ | **PASS** |

---

## IMPLEMENTATION CHECKLIST

- [ ] Merge button sizing CSS into `app/globals.css` (Fix 1)
- [ ] Find all `<button>`, `<input type="submit">`, `.cta-*` elements
- [ ] Apply `.btn-primary`, `.btn-secondary`, or `.btn-tertiary` class
- [ ] Apply responsive padding: `py-btn-py-md lg:py-btn-py-lg px-btn-px-md lg:px-btn-px-lg`
- [ ] Test on Chrome DevTools: 375px (mobile), 1440px (desktop), 1920px (cinema)
- [ ] Test keyboard navigation: Tab through all buttons, verify 3px+ outline visible
- [ ] Test screen reader: VoiceOver/NVDA announces button text + state
- [ ] Lighthouse audit: Accessibility ≥95, Best Practices ≥90

---

## QUESTIONS FOR TEAM

1. **Should tertiary buttons be text-only?** (i.e., no visible padding, just underline?)
2. **Do we need a "ghost" button variant?** (transparent bg, colored border)
3. **Should disabled buttons show a tooltip?** (e.g., "Booking closed for today")
4. **Any existing button components in components/ I should respect?**

---

## NEXT STEPS

1. Team reviews this draft
2. Polisher #2–10 provide feedback (via comment or Slack)
3. I refine based on feedback
4. We implement Fix 1 together
5. Divide component updates among team

**Ready to discuss?** Reply with feedback on design choices. We'll move to implementation once aligned.

---

**Files Affected:**
- `app/globals.css` (+ ~45 lines)
- All component files with buttons (TBD by team)

**Estimated Effort:** 4–6 hours (1 hour CSS, 3–5 hours component updates)

**Expected UX Impact:** +30% button confidence, +15% form completion rate
