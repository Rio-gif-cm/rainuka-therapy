# POLISHER TEAM COORDINATION
**Design Lead: POLISHER #1**  
**Team Members: Polishers 2-10**  
**Status:** Active Collaboration  
**Updated:** September 1, 2026

---

## CRITIC FEEDBACK SUMMARY

### Source Reports (Latest Audits)
1. **DESKTOP_UX_AUDIT_1440PX.md** — 12 improvements (spacing, typography, hierarchy, buttons)
2. **MOBILE_UX_OPTIMIZATION_AUDIT_375PX.md** — 12 improvements (text sizing, touch targets, contrast)
3. **FORM_UX_MICROCOPY_AUDIT.md** — 14 friction points in booking form
4. **BUTTON_AUDIT_REPORT.md** — Button sizing inconsistency
5. **TYPOGRAPHY_AUDIT.md** — Font sizing and line-height issues
6. **DESKTOP_UX_AUDIT_QUICK_REFERENCE.txt** — Phase 1 quick wins ready

---

## TOP PRIORITY FIXES (CRITICAL)

### 🔴 Batch 1: Button Sizing (QUICK WIN)
**Issue:** Inconsistent button sizes across responsive breakpoints  
**Impact:** Desktop CTAs feel too small; mobile targets <48px (WCAG violation)  
**Fix:**
- Desktop: 56px primary buttons (lg+ breakpoint)
- Mobile: 48px buttons (WCAG AA minimum)
- Padding: 16/24/32px variants (sm/md/lg)
- Tailwind extension: `btn-py-sm/md/lg`, `btn-px-sm/md/lg`

**Files to Update:**
- `tailwind.config.ts` — Add button sizing variants
- `app/globals.css` — Add desktop button media queries
- All button components — Apply `btn-py-lg`/`btn-px-lg` on lg+ breakpoints

**Effort:** LOW (1-2 hours) | **Impact:** HIGH (visible immediately)

---

### 🟠 Batch 2: Typography & Line-Height (HIGH PRIORITY)
**Issue:** Text too cramped on desktop; hard to read on mobile  
**Current:**
- Body: 1.6 line-height (desktop feels dense)
- Mobile: 16px base (some sections 14px)
- Line-length: >800px on 1440px screens (eye strain)

**Fix:**
- Desktop (lg+): 1.75–1.8 line-height, 65ch max-width (hero)
- Mobile (base): Enforce 16px minimum, 1.6 line-height
- Utility classes: `.prose-width-desktop`, `.text-base-mobile`, `.leading-lg`

**Files to Update:**
- `tailwind.config.ts` — Add line-height scale
- `app/globals.css` — Desktop typography media queries (already drafted)
- Components: Apply `.prose-width-desktop` to hero text

**Effort:** LOW (1 hour) | **Impact:** HIGH (readability +25%)

---

### 🟡 Batch 3: Color Hierarchy & Contrast (MEDIUM PRIORITY)
**Issue:** Accent color (burgundy) inconsistent; form text contrast needs improvement  
**Current Problems:**
- CTA buttons vary in color (some sage, some burgundy)
- Text hierarchy muddled (secondaries same weight as tertiary)
- Colored backgrounds (burgundy, sage) fail 4.5:1 contrast for small text

**Fix:**
- Define 4-tier text hierarchy: `.text-primary/secondary/tertiary/quaternary`
- CTA buttons: Use burgundy (#8B3A3A) with white text (8:1 contrast)
- Section backgrounds: Sage/burgundy only as overlays; ensure white text 4.5:1+
- Utility: `.text-hierarchy` mixin

**Files to Update:**
- `tailwind.config.ts` — Color scale (primary/secondary/tertiary)
- `app/globals.css` — Text color utilities
- Form/CTA components — Apply text hierarchy classes

**Effort:** MEDIUM (2-3 hours) | **Impact:** HIGH (visual clarity)

---

### 🟢 Batch 4: Spacing & Section Padding (LOWER PRIORITY)
**Issue:** Desktop sections feel cramped; mobile has inconsistent padding  
**Current:**
- Desktop: 40px padding (too tight on 1440px+)
- Sections: Vary from 20–60px (no system)

**Fix:**
- Desktop padding scale: 64px (xl), 80px (2xl), 96px (cinema)
- Mobile: Keep 24px padding (optimal thumb-zone)
- Utility classes: `.section-padding`, `.section-padding-lg`, `.section-padding-xl`

**Files to Update:**
- `tailwind.config.ts` — Extend spacing
- `app/globals.css` — Section padding media queries
- All sections — Apply `.section-padding` classes

**Effort:** MEDIUM (2-3 hours) | **Impact:** MEDIUM (aesthetics)

---

## TEAM COORDINATION PROTOCOL

### How to Collaborate
1. **Read This Document** — Everyone understands priorities
2. **Pick a Batch** — Polisher 2 → Batch 1, Polisher 3 → Batch 2, etc.
3. **Share Draft** — Post code in `.hermes/POLISHER-DRAFTS/` folder
4. **Request Feedback** — "@Polisher #X, review my button sizing fix?"
5. **Refine Together** — Iterate until all agree
6. **Commit** — When approved by 2+ polishers

### Communication
- **Sync Point:** Share drafts in `.hermes/POLISHER-DRAFTS/` before committing
- **Feedback Format:** "I like X, but Y needs adjustment because Z"
- **Blocking Issues:** Tag POLISHER #1 (design lead) for decisions

---

## IMPLEMENTATION ROADMAP

### Phase 1: CRITICAL WINS (Today — 2 Hours)
- [ ] Batch 1: Button sizing variants in Tailwind
- [ ] Batch 2: Typography line-height & max-width
- [ ] Test desktop 1440px + mobile 375px

### Phase 2: COLOR & HIERARCHY (Tomorrow — 3 Hours)
- [ ] Batch 3: Color hierarchy utilities
- [ ] Apply to form components
- [ ] Verify 4.5:1 contrast on all text

### Phase 3: POLISH (Later This Week — 3 Hours)
- [ ] Batch 4: Section padding scale
- [ ] Desktop refinements (buttons, links)
- [ ] Final accessibility audit

---

## FILES TO MODIFY

**Shared Foundation:**
- `tailwind.config.ts` — Centralized design tokens
- `app/globals.css` — Global utilities & media queries
- `package.json` — Dependencies (if needed)

**Components (Per Batch):**
- Batch 1: `components/Buttons/*`
- Batch 2: `components/Hero.tsx`, `app/page.tsx`
- Batch 3: `components/BookingForm*`, `components/CTA*`
- Batch 4: All layout sections

---

## SUCCESS CRITERIA ✅

- [ ] All button touch targets ≥48px (mobile WCAG AA)
- [ ] Desktop buttons ≥56px primary
- [ ] Text line-height 1.75–1.8 on desktop
- [ ] Line-length ≤65ch on desktop
- [ ] Text contrast 4.5:1 minimum (WCAG AA)
- [ ] Spacing consistent (24px mobile, 64–96px desktop)
- [ ] Lighthouse accessibility score ≥95
- [ ] Zero layout shift (CLS: 0)
- [ ] All commits include audit references

---

## NEXT STEP
**Polisher #1 (Design Lead):** Await team feedback. Once ready, delegate batches to Polishers 2-10.

**Team:** Review this doc. Ask questions. Ready to start Phase 1?
