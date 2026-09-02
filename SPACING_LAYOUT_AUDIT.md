# Spacing & Layout Consistency Audit

**Date:** September 1, 2026  
**Auditor:** Design System Review  
**Repository:** rainuka-therapy  
**Focus:** 8px Grid System, Padding/Margin Consistency, Breathing Room, Section Spacing Harmony

---

## Executive Summary

The Wonderloud Therapy site has a **solid foundation** with a documented 8px base unit system defined across CSS custom properties, TypeScript spacing constants, and Tailwind config. However, there are **7 critical improvements** needed to achieve perfect consistency and optimal breathing room across all sections.

**Audit Findings:**
- ✅ **8px grid system is defined** in globals.css, styles.ts, and tailwind.config.ts
- ⚠️ **Inconsistent application** across components (inline styles vs. class-based)
- ⚠️ **Heading margins** not always respecting the 8px scale
- ⚠️ **Card padding** inconsistencies in compact mode
- ⚠️ **Gap ratios** between card grids not harmonious (24px vs 32px vs 48px used sporadically)
- ⚠️ **Section transitions** have awkward breathing room in places
- ⚠️ **Mobile responsiveness** padding doesn't scale proportionally

---

## 1. Current State Analysis

### 1.1 8px Grid System Definition ✅

**globals.css (lines 121-159):**
```css
--space-1: 0.5rem;   /*   8px  (2)  */
--space-2: 1rem;     /*  16px  (4)  */
--space-3: 1.5rem;   /*  24px  (6)  */
--space-4: 2rem;     /*  32px  (8)  */
--space-5: 2.5rem;   /*  40px  (10) */
--space-6: 3rem;     /*  48px  (12) */
--space-7: 3.5rem;   /*  56px  (14) */
--space-8: 4rem;     /*  64px  (16) */
--space-10: 5rem;    /*  80px  (20) */
--space-12: 6rem;    /*  96px  (24) */
--space-16: 8rem;    /* 128px  (32) */
```

**Verified:** All multiples of 8px ✓

### 1.2 Spacing Constants Mirroring ✅

**styles.ts (lines 46-58):** Constants match CSS custom properties exactly.  
**tailwind.config.ts:** Uses base Tailwind 8px scale (space-1→8px, space-2→16px, etc.).

### 1.3 Section Padding Scale ✅

**globals.css (lines 134-141):**
```css
--section-y: var(--space-8);      /* 64px mobile */
--section-y-sm: var(--space-5);   /* 40px mobile */
--section-y-lg: var(--space-10);  /* 80px mobile */
```

**CSS media query responsive adjustments present for tablet/desktop.** ✓

### 1.4 Grid Gaps ✅

```css
--gap-tight: var(--space-3);   /* 24px */
--gap-card: var(--space-4);    /* 32px */
--gap-feature: var(--space-6); /* 48px */
```

Defined but **not always used** in components.

---

## 2. Issues Found

### Issue 1: Heading Margin Inconsistency ⚠️

**Location:** globals.css (lines 349-401)

**Problem:**
- h1 margin-bottom: `1.5rem` (24px)
- h2 margin-bottom: `1.5rem` (24px)
- h3 margin-bottom: `1rem` (16px) ← Not on 8px scale
- h4 margin-bottom: `0.75rem` (12px) ← Not on 8px scale
- h5 margin-bottom: `0.5rem` (8px) ✓
- h6 margin-bottom: `0.5rem` (8px) ✓

The Owl selector also adds:
- `* + h2 { margin-top: 3rem; }` (48px, not 8px aligned for narrow spacing)
- `* + h3 { margin-top: 2.25rem; }` ← Not on 8px scale
- `* + h4 { margin-top: 1.75rem; }` ← Not on 8px scale

**Impact:** Mid-level headings (h3, h4) break the 8px rhythm when they appear mid-content.

**Recommendation:** Snap to nearest 8px value:
- h3 margin-bottom: `1rem` → `1.5rem` (or stay at 1rem if intent is tight)
- h4 margin-bottom: `0.75rem` → `0.5rem` or `1rem`
- `* + h3 { margin-top: 2.25rem; }` → `2rem` (32px)
- `* + h4 { margin-top: 1.75rem; }` → `1.5rem` or `2rem`

---

### Issue 2: Button Padding Not Harmonious ⚠️

**Location:** globals.css (lines 549-572)

**Problem:**
```css
.btn {
  padding: 0.875rem 1.75rem;  /* 14px vertical, 28px horizontal - not on scale */
  min-height: 48px;
}

@media (max-width: 640px) {
  .btn {
    padding: 1rem 1.5rem;     /* 16px vertical, 24px horizontal - partially on scale */
  }
}
```

**Issues:**
1. Desktop padding `0.875rem` = 14px (not 8px multiple)
2. Desktop padding `1.75rem` = 28px (not 8px multiple)
3. Mobile: `1rem` ✓ but `1.5rem` = 24px ✓ (but why not consistent with vertical?)

**Impact:** Button feels slightly cramped/off compared to the system rhythm. Accessibility: 48px height is good, but content doesn't sit centered on an 8px grid.

**Recommendation:** Change to:
```css
.btn {
  padding: 1rem 1.5rem;  /* 16px / 24px - both on scale */
  min-height: 48px;      /* Keep WCAG target, naturally achieved by 16px padding + font size */
}
```

---

### Issue 3: Card Padding Inconsistency ⚠️

**Location:** globals.css (lines 238-242)

**Problem:**
```css
--card-padding: 2rem;           /* 32px ✓ */
--card-padding-compact: 1.5rem; /* 24px ✓ */
--card-padding-mobile: 1.5rem;  /* 24px ✓ */
```

**Good,** but NOT used consistently in components:

**HeroSection.tsx, NicheGrid.tsx, page.tsx:** Many cards use **inline style `padding`** (not the variables):
- `marginBottom: '1.5rem'` ✓
- `gap: '1rem'` ← Should verify against `--gap-tight` (24px)
- `marginBottom: '3rem'` ✓

**Issue:** Some niche-card and detail-card components may not reference the CSS tokens.

**Recommendation:** Audit all `.card` usages and ensure they apply `--card-padding` via class, not inline re-padding.

---

### Issue 4: Inconsistent Gap Between Section & Content ⚠️

**Location:** Multiple files (HeroSection, NicheGrid, page.tsx)

**Problem - Example from page.tsx (line 105):**
```jsx
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
```

- `gap-8` in Tailwind = 32px ✓
- But in NicheGrid.tsx (line 49): `gap: layout.gapCard` = 32px ✓
- And in HeroSection.tsx (line 185): `gap: '3rem'` = 48px ✓

**Issue:** Hero uses 48px gap (feature-scale), niche cards use 32px gap (card-scale), but they're **visually adjacent** on the homepage. The rhythm isn't unified.

**Impact:** Eye doesn't flow smoothly through sections; they feel isolated instead of connected.

**Recommendation:** 
- Hero persona buttons: use `--gap-card` (32px) for tighter, more cohesive feel
- Keep card grids at `--gap-card` (32px) uniformly
- Reserve `--gap-feature` (48px) only for 2-up feature sections

---

### Issue 5: Mobile Breathing Room Not Proportional ⚠️

**Location:** globals.css & component breakpoints

**Problem:**
- Mobile section-y: 64px (--section-y unchanged at base)
- Desktop section-y: 96px+ (stepped up at larger breakpoints)
- **But ratio is 64:96 = 2:3**, not a comfortable visual proportion

When viewport shrinks to 375px, sections still have 64px top/bottom padding—this is adequate, but not optimized for the mobile surface area.

On a 375px mobile, 64px top+bottom padding on a section = 17% of viewport height gone to breathing room. On desktop (1280px viewport), 96px = 7.5%. Mobile feels proportionally "heavier" with spacing.

**Recommendation:** Add a mobile-specific breakpoint:
```css
@media (max-width: 480px) {
  --section-y: var(--space-6);  /* 48px - better proportion */
  --section-y-sm: var(--space-4); /* 32px */
}
```

---

### Issue 6: Hero-to-Testimonial Transition Gap ⚠️

**Location:** page.tsx (line 97)

```jsx
<section className="section-padding bg-white border-b border-burgundy-100">
  <div className="container-base">
    <div className="max-w-3xl mx-auto text-center mb-12">
```

**Problem:**
- Section has `section-padding` (64px top/bottom)
- Interior container has `mb-12` on text center div (48px)
- But then `gap-8` on the grid (32px)

This creates: 64px (section top) + 48px (mb-12) = 112px of breathing room BEFORE the testimonials start.

Then between sections (if borders exist), another 64px gap.

**Verdict:** Over-spacing. Feels like separate articles, not one cohesive narrative.

**Recommendation:** Use `mb-8` (32px) instead of `mb-12` on the heading container to create 96px total pre-content breathing room (8px scale: 64px section + 32px content margin).

---

### Issue 7: Card Border & Accent Alignment ⚠️

**Location:** globals.css (lines 244-249)

```css
--card-border-width: 1px;
--card-border-color: rgba(209, 220, 200, 0.6);
--card-accent-width: 3px;
--card-accent-color: var(--burgundy-600);
```

**Problem:**
Card accent is a top 3px border, but it's **not padded inward**. Visual weight is heavy at the edge. On mobile (where cards stack taller), the accent border dominates.

**Recommendation:** No change needed if intentional, but consider:
- Reduce to 2px for lighter visual weight on mobile
- OR add `padding-top: 1rem` and move accent to `border-left` (4px) for side-accent style

---

## 3. Spacing Audit Checklist

| Aspect | Status | Notes |
|--------|--------|-------|
| 8px Base Unit Defined | ✅ | globals.css, styles.ts, tailwind.config.ts all aligned |
| Spacing Scale Complete (1-16) | ✅ | All multiples of 8px |
| Section Padding Rhythm | ✅ | Responsive scale defined (64/80/96px) |
| Heading Margins | ⚠️ | h3, h4 + Owl selector values not on 8px scale |
| Button Padding | ⚠️ | Desktop padding (0.875rem / 1.75rem) breaks scale |
| Card Padding | ✅ | Tokens defined; inconsistent application in components |
| Gap Ratios | ⚠️ | Multiple gap values (24/32/48px) used sporadically |
| Section-to-Section Transitions | ⚠️ | Some gaps over-sized (112px instead of 96px) |
| Mobile Breathing Room | ⚠️ | Not proportionally optimized for 375px viewport |
| Typography Line-height | ✅ | Consistent across scale |
| Container Gutters | ✅ | 24px (1.5rem) consistent |

---

## 4. Recommended Improvements (5-10 total)

### Improvement 1: Normalize Heading Margins to 8px Scale
**File:** `app/globals.css` (lines 367-407)

**Change:**
```css
/* Before */
h3 { margin-bottom: 1rem; }
h4 { margin-bottom: 0.75rem; }
* + h3 { margin-top: 2.25rem; }
* + h4 { margin-top: 1.75rem; }

/* After */
h3 { margin-bottom: 1.5rem; }  /* 24px, on scale */
h4 { margin-bottom: 1rem; }    /* 16px, on scale */
* + h3 { margin-top: 2rem; }   /* 32px, on scale */
* + h4 { margin-top: 1.5rem; } /* 24px, on scale */
```

**Impact:** Tighter, more consistent vertical rhythm throughout long-form content.

---

### Improvement 2: Harmonize Button Padding
**File:** `app/globals.css` (lines 549-572)

**Change:**
```css
/* Before */
.btn {
  padding: 0.875rem 1.75rem; /* 14px × 28px */
}

@media (max-width: 640px) {
  .btn {
    padding: 1rem 1.5rem; /* 16px × 24px */
  }
}

/* After */
.btn {
  padding: 1rem 1.5rem; /* 16px × 24px - on scale, all breakpoints */
  min-height: 48px;    /* Keep WCAG, now naturally centered */
}

@media (max-width: 640px) {
  /* No change needed; 1rem 1.5rem works great on mobile too */
  .btn {
    min-height: 56px; /* Slightly larger touch target only */
    min-width: 56px;
  }
}
```

**Impact:** Buttons align with 8px grid, feel less cramped, consistent touch target ratio.

---

### Improvement 3: Unify Grid Gaps Across Components
**Files:** `app/styles.ts`, `components/HeroSection.tsx`, `components/NicheGrid.tsx`, `app/page.tsx`

**Change:**
Audit and normalize all `gap` / `gridGap` values:
- Persona buttons in hero: `gap: '3rem'` (48px) → `gap: layout.gapCard` (32px)
- Card grids: Ensure all use `layout.gapCard` (32px) or Tailwind `gap-8`
- 2-up feature sections: Use `layout.gapFeature` (48px) only when intentional

**Command to find inconsistencies:**
```bash
grep -r "gap:\s*['\"]" components/ app/ --include="*.tsx" | grep -v "layout\."
```

**Impact:** Visual cohesion, predictable spacing relationships, easier to maintain.

---

### Improvement 4: Fix Section-to-Content Margin Cascade
**File:** `app/page.tsx` (lines 96-126, 160-185, 217-248)

**Change:**
Replace `mb-12` with `mb-8` on text-center intro containers:
```jsx
/* Before */
<div className="max-w-3xl mx-auto text-center mb-12">

/* After */
<div className="max-w-3xl mx-auto text-center mb-8">
```

**Rationale:** Section-padding (64px top) + mb-8 (32px) = 96px total, which is exactly `--section-y-lg` on mobile. Proportionally better.

**Impact:** Breathing room feels intentional and measured, not excessive.

---

### Improvement 5: Add Mobile-Specific Section Padding
**File:** `app/globals.css` (add before line 308)

**Change:**
```css
/* New: mobile-specific breathing room optimization */
@media (max-width: 480px) {
  :root {
    --section-y: var(--space-6);    /* 48px instead of 64px */
    --section-y-sm: var(--space-4); /* 32px instead of 40px */
    /* --section-y-lg stays 64px (--space-8) for heros */
  }
}
```

**Impact:** Mobile surfaces won't feel as "heavy" with spacing; proportionally better viewport utilization.

---

### Improvement 6: Verify Card Padding Usage Across All Components
**Files:** All files with `.card` or inline card styles

**Command:**
```bash
grep -r "className=\".*card" components/ app/ --include="*.tsx" | wc -l
grep -r "padding.*2rem\|1.5rem" components/ app/ --include="*.tsx" | grep -v layout | wc -l
```

**Task:** Ensure all card instances use `--card-padding` via CSS class, not inline `paddingLeft/Right/Top/Bottom`.

**Impact:** Single source of truth for card spacing; changes to `--card-padding` automatically cascade.

---

### Improvement 7: Add Card Compact Variant Guidance
**File:** `app/globals.css` (after line 279)

**Change:** Document and enforce card variants:
```css
/* Standard card: 32px padding, 4px top accent */
.card {
  padding: var(--card-padding); /* 2rem / 32px */
}

/* Compact card: 24px padding, tighter spacing */
.card-compact {
  padding: var(--card-padding-compact); /* 1.5rem / 24px */
  --card-accent-width: 2px; /* Lighter visual weight */
}

/* Large card: 48px padding, used for hero sections */
.card-spacious {
  padding: 3rem; /* 48px */
}
```

**Update NicheGrid.tsx, FAQ cards, and testimonial cards to use `.card-compact`** where content is dense.

**Impact:** Clear visual hierarchy between info-dense and breathing-room cards.

---

### Improvement 8: Harmonize Section Transitions with Borders
**File:** `app/globals.css` (add after line 560)

**Change:** Define a section-divider pattern:
```css
/* Subtle section divider: 1px border at full-width scale */
.section-divider {
  border-bottom: 1px solid var(--burgundy-200);
  opacity: 0.4;
}

/* Use: <section className="section-padding section-divider"> */
```

**Rationale:** Visible borders help structure breathing room visually; users know when one section ends and another begins.

**Impact:** Visual structure clarity, reduced awkwardness in spacing perception.

---

### Improvement 9: Document Spacing Scale in a Accessible Reference
**File:** Create new `app/DESIGN_SYSTEM.md`

**Content:**
```markdown
# Design System Spacing Reference

## 8px Base Unit Scale

All spacing on Wonderloud Therapy uses a base unit of 8px (0.5rem).

### Defined Scales

**Spacing variables:** `--space-1` through `--space-16`
- `--space-1`: 8px
- `--space-2`: 16px
- `--space-3`: 24px
- `--space-4`: 32px
- `--space-5`: 40px
- `--space-6`: 48px
- etc.

**Section padding:** Responsive
- Mobile: 64px (--section-y)
- Tablet: 80px
- Desktop: 96px

**Grid gaps:**
- Tight (lists, dense content): 24px (--gap-tight)
- Cards (standard): 32px (--gap-card)
- Features (2-up, breathing room): 48px (--gap-feature)

### When to Use Which

- Padding inside cards: Always use CSS tokens (--card-padding, --card-padding-compact)
- Gaps between grids: Use layout.gapCard or layout.gapFeature
- Heading margins: Use 8px-aligned values (1rem, 1.5rem, 2rem, 2.5rem, 3rem)
- Button padding: Use 1rem (vertical) × 1.5rem (horizontal)
- Section breathing room: Let section-padding handle it; don't add extra margins

### Anti-Patterns

❌ Don't use: 0.75rem, 1.25rem, 1.75rem, 2.25rem (these break the 8px scale)
❌ Don't add margin-top to sections (sections own their breathing room via padding)
❌ Don't mix inline padding with CSS token padding on the same element
✅ Do use: CSS tokens (layout.*, spacing.*)
✅ Do measure twice, commit once (audit spacing before merge)
```

**Impact:** Reduces future spacing errors; new developers can onboard faster.

---

### Improvement 10: Commit & Document Audit Results
**File:** Create `SPACING_AUDIT_RESULTS.md` and commit

Summarize:
- Baseline: 8px system defined ✅
- Issues fixed: (list the 8+ improvements above)
- Testing: Verify no regressions on mobile (375px), tablet (768px), desktop (1280px)
- Next: Schedule quarterly reviews to catch drift

---

## 5. Implementation Priority

| Priority | Improvement | Effort | Impact | Files |
|----------|-------------|--------|--------|-------|
| **P0** | Heading margins → 8px scale | Low | High | globals.css |
| **P0** | Button padding → 1rem × 1.5rem | Low | Medium | globals.css |
| **P1** | Unify grid gaps | Medium | High | 4 components |
| **P1** | Fix mb-12 → mb-8 cascade | Low | Medium | page.tsx |
| **P2** | Mobile section padding breakpoint | Low | Medium | globals.css |
| **P2** | Card padding audit | Medium | High | 6+ components |
| **P3** | Card compact variant guidance | Low | Low | globals.css |
| **P3** | Section dividers | Low | Low | globals.css |
| **P3** | DESIGN_SYSTEM.md documentation | Low | Low | new file |

---

## 6. Testing Plan

After each improvement:

1. **Visual regression on three breakpoints:**
   - Mobile: 375px (iPhone SE)
   - Tablet: 768px (iPad)
   - Desktop: 1280px (MacBook)

2. **Measure:**
   - All padding/margin values with DevTools (should be 8px multiples)
   - Visual alignment with browser grid overlay (use Firefox "Overlay Grid")
   - Breathing room consistency: sections should feel neither crowded nor isolate

3. **Content pages to test:**
   - Homepage (all 8 sections)
   - /about
   - /perinatal, /adhd, /career (specialty pages)
   - /booking (form layout)
   - /faq (accordion spacing)

---

## 7. Conclusion

The Wonderloud Therapy design system has a **strong foundation** with a well-defined 8px grid system and responsive spacing scale. However, consistent application across all components is incomplete. By implementing these **10 improvements**, the site will achieve:

✅ Perfect 8px alignment across all spacing  
✅ Harmonious section breathing room  
✅ Optimal mobile viewport utilization  
✅ Easier maintenance and future consistency  
✅ Professional, polished aesthetic  

**Estimated time to complete:** 2-3 hours  
**Risk level:** Low (mostly CSS tweaks, no breaking changes)  
**Recommendation:** Implement all P0 and P1 items before next deployment.

---

**Audit completed:** 2026-09-01  
**Next review:** 2026-12-01 (quarterly)
