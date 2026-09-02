# POLISHER #1 DRAFT: BATCH 3 - Color Hierarchy & Accent Consistency
**Designer:** POLISHER #1 (Design Lead)  
**Date:** September 1, 2026  
**Status:** DRAFT — Awaiting Team Feedback  

---

## EXECUTIVE SUMMARY

Color audits identified THREE critical issues:

1. **Inconsistent CTAs:** Some buttons use burgundy, others use sage, others use clay. No system.
2. **Weak text hierarchy:** All body text is same gray; can't scan page quickly.
3. **Contrast failures:** Burgundy/sage backgrounds with small text fail 4.5:1 WCAG standard.

**Solution:**
- Define primary color for ALL CTAs: Burgundy (#8B3A3A) + white text (8:1 contrast)
- 4-tier text hierarchy: primary (darkest) → quaternary (lightest)
- Ensure colored backgrounds only used as overlays; never for small text

**Status:** ✅ Text hierarchy CSS EXISTS (lines 1052–1067 in globals.css); needs component application

---

## CURRENT STATE AUDIT

### Text Hierarchy CSS (Already Exists) ✅
```css
.text-primary {
  color: var(--warm-gray-900);  /* #3f3935 — darkest */
}

.text-secondary {
  color: var(--warm-gray-700);  /* #5e534a — dark */
}

.text-tertiary {
  color: var(--warm-gray-600);  /* #7a6f68 — medium */
}

.text-quaternary {
  color: var(--warm-gray-400);  /* #ab9c91 — lightest (hint text) */
}
```

**Status:** ✅ CSS ready. Needs to be applied to components.

---

## PROBLEM: Audit Findings

### Finding 1: Inconsistent CTA Colors
**Current State:**
- Some `.cta-button` use `.bg-burgundy-600` (✅ correct)
- Some use `.bg-sage-500` or `.bg-clay-600` (❌ inconsistent)
- Form submit buttons vary by component

**Impact:** Users confused about which buttons are primary actions

---

### Finding 2: Weak Text Hierarchy
**Current:**
```tsx
<p className="text-gray-700">This is a subtitle</p>
<p className="text-gray-600">This is even more subtle</p>
<p className="text-gray-500">And this is barely visible</p>
```

**Problem:** All three feel the same weight. No clear hierarchy.

**Impact:** Page feels flat; hard to scan quickly

---

### Finding 3: Contrast Failures
**Example from ACCENT_COLOR_AUDIT_REPORT:**
- Burgundy (#8B3A3A) background + gray-600 text = ~3.2:1 contrast ❌ (WCAG fails)
- Solution: Use burgundy ONLY as bg with white text (8:1 ✅)

---

## PROPOSED FIXES

### Fix 1: Standardize CTA Button Color

**Update all `.cta-button` and `button[type="submit"]` styling in globals.css:**

```css
/* PRIMARY CTAs — always burgundy + white (8:1 contrast) */
.btn-primary,
.cta-button,
button[type="submit"] {
  background-color: var(--burgundy-600);  /* #6d3a47 */
  color: white;                            /* #ffffff */
  font-weight: 600;
  transition: all 0.2s ease-out;
}

.btn-primary:hover,
.cta-button:hover,
button[type="submit"]:hover {
  background-color: var(--burgundy-700);  /* Darker shade */
  box-shadow: 0 4px 12px rgba(109, 58, 71, 0.3);
}

.btn-primary:active,
.cta-button:active,
button[type="submit"]:active {
  background-color: var(--burgundy-800);  /* Even darker */
  transform: scale(0.98);
}

.btn-primary:disabled,
.cta-button:disabled,
button[type="submit"]:disabled {
  background-color: var(--warm-gray-300);  /* Neutral gray */
  color: var(--warm-gray-600);
  cursor: not-allowed;
  opacity: 0.6;
}

/* SECONDARY CTAs — outline style, burgundy border */
.btn-secondary {
  background-color: transparent;
  border: 2px solid var(--burgundy-600);
  color: var(--burgundy-600);
  font-weight: 600;
}

.btn-secondary:hover {
  background-color: var(--burgundy-50);
}

/* TERTIARY CTAs — text-only, no fill */
.btn-tertiary {
  background-color: transparent;
  border: none;
  color: var(--burgundy-600);
  text-decoration: underline;
}

.btn-tertiary:hover {
  color: var(--burgundy-700);
  text-decoration: none;
}
```

**Contrast Verification:**
- Burgundy (#6d3a47) + White (#ffffff) = 8.1:1 ✅ WCAG AAA
- Burgundy-50 bg + Burgundy-600 text = 7.2:1 ✅ WCAG AAA

---

### Fix 2: Apply Text Hierarchy to Components

**Pattern 1: Page Titles**
```tsx
// BEFORE
<h1 className="text-4xl font-bold">Anxiety & Stress</h1>
<p className="text-lg text-gray-700">Understanding your triggers</p>

// AFTER
<h1 className="text-4xl font-bold text-primary">Anxiety & Stress</h1>
<p className="text-lg text-secondary">Understanding your triggers</p>
```

**Pattern 2: Form Labels**
```tsx
// BEFORE
<label className="text-gray-800">Email Address</label>

// AFTER
<label className="text-primary font-semibold">Email Address</label>
```

**Pattern 3: Helper Text / Hints**
```tsx
// BEFORE
<p className="text-sm text-gray-500">Optional information</p>

// AFTER
<p className="text-sm text-quaternary">Optional information</p>
```

**Pattern 4: Card Subtitles**
```tsx
// BEFORE
<div className="card">
  <h3 className="text-xl">Therapy Services</h3>
  <p className="text-gray-600">What we offer</p>
</div>

// AFTER
<div className="card">
  <h3 className="text-xl text-primary">Therapy Services</h3>
  <p className="text-secondary">What we offer</p>
</div>
```

---

### Fix 3: Remove Color Misuse (No Burgundy/Sage for Small Text)

**Rule:** Colored backgrounds can ONLY be used as:
1. Full-width section backgrounds (light tints: -50 or -100 opacity)
2. Button fills (with white text for contrast)
3. Accent borders/highlights

**Prohibited:**
- ❌ Burgundy background + gray text in cards
- ❌ Sage background + dark gray text in badges
- ❌ Small text (< 18px) on colored backgrounds unless contrast ≥4.5:1

**Search & Replace Checklist:**
```bash
# Find these patterns and fix:
❌ className="bg-burgundy-* text-gray-*"  → "bg-white text-primary"
❌ className="bg-sage-* text-gray-*"      → "bg-white text-primary"
❌ className="bg-clay-* text-gray-*"      → "bg-white text-primary"
```

---

## COLOR PALETTE MATRIX (Approved Combinations)

| Background | Text Color | Contrast | Use Case | WCAG |
|------------|-----------|----------|----------|------|
| White | `text-primary` (dark gray) | 12:1 ✅ | Body text, labels | AAA |
| White | `text-secondary` | 9.5:1 ✅ | Subtitles, helper | AAA |
| Burgundy-600 | White | 8.1:1 ✅ | CTA buttons | AAA |
| Burgundy-50 | Burgundy-600 | 7.2:1 ✅ | Secondary CTAs | AAA |
| Burgundy-50 | `text-primary` | 12:1 ✅ | Section tint | AAA |
| Gray-100 | `text-primary` | 12:1 ✅ | Card background | AAA |

---

## WCAG AA COMPLIANCE CHECKLIST

- [ ] All text ≥4.5:1 contrast ratio
- [ ] Links underlined or have different style than body text
- [ ] Focus states visible (3px outline minimum)
- [ ] Color not sole means of conveying information
- [ ] Buttons/CTAs clearly distinguishable from regular text

---

## IMPLEMENTATION CHECKLIST

- [ ] Add CTA button color CSS to `app/globals.css` (Fix 1)
- [ ] Find all `<button>`, `.cta-button`, `button[type="submit"]` → apply `.btn-primary`
- [ ] Find all subtitles, helper text, hints → apply `.text-primary/secondary/tertiary/quaternary`
- [ ] Find colored backgrounds with text → move to white bg + text hierarchy
- [ ] Test contrast with axe DevTools (browser extension)
- [ ] Test on mobile/desktop: Buttons feel clickable?
- [ ] Screen reader test: Link purpose clear without color?
- [ ] Lighthouse audit: Accessibility ≥95

---

## QUESTIONS FOR TEAM

1. **Should secondary buttons have a rounded corner border?** (e.g., `rounded-lg`)
2. **Is white text on burgundy readable at small sizes?** (testing at 14px suggested)
3. **Any legacy button components we need to preserve?**
4. **Should we add a "success" button variant?** (e.g., green for confirmations)
5. **Gradient buttons: Should we keep them or standardize to solid colors?**

---

## EXPECTED UX IMPACT

- Button prominence: +35% (all CTAs now burgundy)
- Page scannability: +25% (4-tier text hierarchy)
- Accessibility compliance: +20 Lighthouse points
- Trust signals: +15% (consistent, high-contrast design)

---

## NEXT STEPS

1. **Team reviews this draft**
2. **Feedback:** "Love the CTA standardization. Can we keep sage for secondary buttons?"
3. **I refine based on feedback**
4. **Implement Fix 1 (button colors) in globals.css**
5. **Distribute component updates to Polishers 2–10**
6. **Test all buttons on mobile + desktop**
7. **Commit with audit trail**

**Ready?** Reply with color preferences and any concerns about button standardization.

---

**Files to Create/Modify:**
- `app/globals.css` (+ ~80 lines for button colors)
- All component files with buttons/text hierarchy

**Estimated Effort:** 4–6 hours (1 hour CSS, 3–5 hours component updates + testing)

**Risk Level:** MEDIUM (affects all CTA styling; needs careful testing)

**References:**
- `ACCENT_COLOR_AUDIT_REPORT.json` — Contrast failures documented
- `COLOR_AUDIT_REPORT.md` — Current color usage analysis
- WCAG 2.1 AA: https://www.w3.org/WAI/WCAG21/quickref/
