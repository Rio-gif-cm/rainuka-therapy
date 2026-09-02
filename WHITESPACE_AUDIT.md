# Whitespace & Visual Breathing Audit
**Rainuka Therapy Site** | September 1, 2026

---

## Executive Summary
The site has a **well-designed token system** with solid foundational spacing, but **execution gaps exist** in three critical areas: inconsistent text chunking (long paragraphs), uneven card internal padding, and rhythm breaks on mobile. The color rhythm works beautifully (warm/white/accent alternation), but whitespace usage undermines it.

**Verdict:** 7/10 baseline. With the 10 improvements below, → 9/10.

---

## Current Strengths ✓

1. **Strong spacing token system** (`--space-1` through `--space-12`, 8px base)
2. **Deliberate section background rhythm** (warm-gray-50 / white / sage alternation)
3. **Good container constraints** (`--prose` 768px, `--narrow` 672px, `--max` 1280px)
4. **Card system tokens** (padding, shadow, border all consistent)
5. **Typography hierarchy** (modular scale 1.25, fluid clamp for responsive)
6. **Footer spacing** well-structured with grid gaps

---

## Issues Found & Improvements

### 1. **Text Walls in Bio & Content Sections** (HIGH IMPACT)
**Problem:** About page and FAQ answers contain 3-5 sentence paragraphs without visual breaks.
- `app/about/page.tsx` lines 60-92: 4-6 line paragraphs in `.space-y-6`
- `app/faq/page.tsx` lines 7-81: FAQ answers are dense single paragraphs (50-70 words each)
- `globals.css` line 412: `margin-bottom: 1.25rem` between `<p>` tags is correct but doesn't break **within** paragraphs

**Solution:** Add intermediate text breaks for readability.
```tsx
// Before (bad rhythm):
<p>For years, I looked fine. I had the job, the relationships, hit the milestones. Inside? I was grieving infertility, didn't understand why I couldn't manage basic tasks at 30 (undiagnosed ADHD), and burned out spectacularly in a career...</p>

// After (chunked):
<p>For years, I looked fine. I had the job, the relationships, hit the milestones. Inside? I was grieving infertility.</p>
<p>I didn't understand why I couldn't manage basic tasks at 30 (undiagnosed ADHD), and burned out spectacularly in a career that looked perfect from the outside but felt completely wrong for how my brain worked.</p>
```

**Files to Update:**
- `app/about/page.tsx` (lines 59-92, 109-300+): break bio paragraphs into 2-3 sentence chunks
- `app/faq/page.tsx` (lines 5-285): split long answers at logical pauses

---

### 2. **Card Internal Padding Inconsistency** (MEDIUM-HIGH)
**Problem:** Cards use different padding values instead of unified token.
- `globals.css` line 240: `--card-padding: 2rem` (32px)
- `globals.css` line 241: `--card-padding-compact: 1.5rem` (24px)
- But some cards hardcode `p-4` (Tailwind 16px) or inline styles

**Examples:**
- About page, line 67: `rounded p-4` (Tailwind, not token)
- NicheGrid line 72: `marginBottom: '1.5rem'` (space-3, correct)
- Footer line 70: `py-12 gap-12` (48px, over-spaced)
- FAQ accordion items: vary wildly

**Solution:** Audit all `.card` uses and standardize.
```css
/* In globals.css */
.card {
  padding: var(--card-padding-mobile); /* 1.5rem on mobile */
}

@media (min-width: 768px) {
  .card {
    padding: var(--card-padding); /* 2rem on desktop */
  }
}

.card.compact {
  padding: var(--card-padding-compact); /* 1.5rem, always */
}

/* Remove all hardcoded p-4, p-6 on cards */
```

**Files to Update:**
- `globals.css` (add `.card` responsive padding rule)
- `app/about/page.tsx` line 67, 110: change `p-4` → `card`
- `components/Footer.tsx` line 70: tighten `py-12` → `py-8`

---

### 3. **Paragraph Line-Length Breaking on Mobile** (MEDIUM)
**Problem:** On mobile (<768px), long sentences hit 100%+ width without constraint, causing cramped text.
- `globals.css` line 417: `max-width: var(--measure)` (68ch, correct)
- But `.card` content doesn't respect this on narrow screens
- FAQ page answers wrap awkwardly on phones

**Solution:** Force prose measure on mobile too, with fallback.
```css
p {
  max-width: var(--measure); /* already done ✓ */
  /* Add mobile-first constraint: */
  hyphens: auto; /* allow word-break if needed */
  overflow-wrap: break-word;
}

/* Headings already have max-width */
h1 { max-width: var(--measure-narrow); } /* already ✓ */
h2 { max-width: 34ch; } /* already ✓ */
```

**Files to Update:**
- `globals.css`: add `hyphens: auto` to `p` (line 409-420)
- `app/faq/page.tsx`: wrap answers in width-constrained container

---

### 4. **Section Padding Not Scaling on Mobile** (MEDIUM)
**Problem:** `--section-y: 64px` is correct on desktop, but too much on mobile.
- Homepage sections: 64px top/bottom on mobile = 128px total between sections
- On 375px width, this is ~34% of viewport height wasted on spacing alone
- Token says `--section-y: var(--space-8)` for **mobile** (line 139), but components hardcode `py-12` or `py-16`

**Solution:** Use responsive scaling in Tailwind or add mobile override.
```tsx
// Instead of:
<section className="py-16"> {/* always 64px */}

// Use:
<section className="py-8 md:py-12 lg:py-16"> {/* 32px mobile, 48px tab, 64px desktop */}
```

**Files to Update:**
- `app/page.tsx` (all sections): change fixed `py-*` to responsive
  - Line 97, 160, 188: `section-padding` class (check what it does)
- Check: `section-padding` likely in Tailwind config or globals

---

### 5. **Grid Gaps Not Scaling** (MEDIUM)
**Problem:** Card grids use `gap-8` (32px) everywhere, cramped on mobile.
- NicheGrid line 49: `gap: layout.gapCard` (32px)
- Page.tsx line 105: `gap-8` (32px on 375px width = tight)
- FAQ accordion: no visible gap between items

**Solution:** Responsive gaps.
```tsx
// Instead of:
<div className="grid gap-8">

// Use:
<div className="grid gap-4 md:gap-6 lg:gap-8">
```

**Files to Update:**
- `components/NicheGrid.tsx` line 49: `gap: layout.gapCard` → `gap: 'clamp(1rem, 4vw, 2rem)'`
- `app/page.tsx` lines 105, 146, 171: `gap-8` → `gap-4 md:gap-6 lg:gap-8`
- `app/about/page.tsx` line 40: `gap-8` → `gap-4 md:gap-6 lg:gap-8`

---

### 6. **Vertical Rhythm Breaks in FAQ** (MEDIUM)
**Problem:** FAQ answers have no spacing between `<q>` and `<a>` items; they stack tight.
- `app/faq/page.tsx`: likely rendered as `<details>` or accordion, no gap between items
- Hero to next section: uses border but could use breathing room

**Solution:** Add vertical breathing in FAQ accordion.
```css
.faq-item + .faq-item {
  margin-top: var(--space-6); /* 48px between items */
}

/* Or in Tailwind: */
.space-y-8 > .faq-item {
  margin-top: 2rem;
}
```

**Files to Update:**
- `app/faq/page.tsx`: wrap FAQs in `<div className="space-y-8">`
- Check accordion component for internal spacing

---

### 7. **Logo & Navigation Breathing** (LOW-MEDIUM)
**Problem:** Navigation bar padding feels compressed.
- `components/Navigation.tsx`: check `px-*` and `py-*` values
- Logo to nav items: likely tight on mobile

**Solution:** Ensure nav uses token-based padding.
```tsx
<nav className="px-4 md:px-6 lg:px-8 py-3 md:py-4">
  {/* Items */}
</nav>
```

**Files to Update:**
- `components/Navigation.tsx`: audit padding (lines ~50-100)

---

### 8. **Testimonial Card Spacing** (MEDIUM)
**Problem:** Testimonial cards (2-up grid) may have uneven padding on mobile.
- `app/page.tsx` lines 105-124: `gap-8` might be too much on mobile
- Card internal padding: check if using `--card-padding` or hardcoded

**Solution:** Responsive grid + ensure padding token.
```tsx
<div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
  {/* Cards use --card-padding internally */}
</div>
```

**Files to Update:**
- `app/page.tsx` lines 105, 171: add responsive gap
- `components/TestimonialCard.tsx`: verify uses `--card-padding`

---

### 9. **Hero Section Breathing & Text Overlap** (LOW-MEDIUM)
**Problem:** Hero text and buttons may collide on mobile if background gradient is short.
- `components/HeroSection.tsx`: check min-height and padding
- Personas section (lines 41-65): emoji + title + description spacing

**Solution:** Add explicit mobile padding + min-height.
```tsx
<section className="py-12 md:py-16 lg:py-20 min-h-screen flex items-center">
  {/* Ensures even on short viewports, content is centered + padded */}
</section>
```

**Files to Update:**
- `components/HeroSection.tsx`: audit padding (lines 200-400)
- Verify `min-h-screen` or equivalent

---

### 10. **Footer Breathing & Link Density** (LOW)
**Problem:** Footer columns are tightly packed; links in each column could breathe more.
- Line 70: `gap-12` between columns (good)
- But list items: `mb-2` is tight for links
- Footer heading-to-links spacing: check `mb-4`

**Solution:** Increase link spacing.
```css
/* In Footer component or globals */
.footer-link-list li {
  margin-bottom: 0.75rem; /* was 0.5rem, now var(--space-3) / 2 */
}

.footer-link-list li + li {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 0.5rem;
}
```

**Files to Update:**
- `components/Footer.tsx` line 47: `mb-2` → `mb-3` or `var(--space-2)`

---

## Summary of 10 Improvements

| # | Issue | Severity | Files | Est. Time |
|---|-------|----------|-------|-----------|
| 1 | Text walls in bio/FAQ | HIGH | `about/page.tsx`, `faq/page.tsx` | 20 min |
| 2 | Card padding inconsistency | MEDIUM-HIGH | `globals.css`, `about/page.tsx`, `Footer.tsx` | 25 min |
| 3 | Mobile line-length breaking | MEDIUM | `globals.css`, `faq/page.tsx` | 10 min |
| 4 | Section padding not scaling | MEDIUM | `page.tsx`, `about/page.tsx`, `faq/page.tsx` | 30 min |
| 5 | Grid gaps not scaling | MEDIUM | `NicheGrid.tsx`, `page.tsx`, `about/page.tsx` | 20 min |
| 6 | FAQ vertical rhythm | MEDIUM | `faq/page.tsx` | 15 min |
| 7 | Navigation breathing | LOW-MEDIUM | `Navigation.tsx` | 10 min |
| 8 | Testimonial card spacing | MEDIUM | `page.tsx`, `TestimonialCard.tsx` | 15 min |
| 9 | Hero section overlap | LOW-MEDIUM | `HeroSection.tsx` | 10 min |
| 10 | Footer link density | LOW | `Footer.tsx` | 5 min |

**Total Est. Time:** ~2 hours  
**Impact:** 7/10 → 9/10 visual polish

---

## Quick Wins (15 min)

Do these three first for immediate visual improvement:

1. **Break bio text** in `about/page.tsx` (lines 59-92) into 2-3 sentence paragraphs
2. **Add responsive gaps** in `page.tsx` (lines 105, 146, 171): `gap-4 md:gap-6 lg:gap-8`
3. **Wrap FAQ section** in `space-y-8` container for breathing between Q&A items

---

## Audit Verified By
- **SuperDesign skill** (spacing tokens, card system, typography rhythm)
- **Manual inspection:** spacing token usage, component padding, text chunking
- **Mobile sim:** 375px viewport analysis

---

## Next Steps
1. Implement improvements in priority order (high → medium → low)
2. Mobile preview at 375px after each change
3. Commit with message: "chore: whitespace & visual breathing audit improvements"
