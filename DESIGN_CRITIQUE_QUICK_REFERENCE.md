# DESIGN CRITIQUE — Quick Reference Card

## Overall Rating: 6.5/10
**Status:** Strong system design (on paper), weak execution (in practice)

---

## THE BIG 3 ISSUES (Fix These First)

### 1. Color System Is Schizophrenic
- **declared:** Burgundy #6d3a47
- **actual fallback:** Sage oklch(0.52 0.14 142)
- **Impact:** Palette feels split between warm (burgundy) and cool (sage)
- **Fix:** 2 hours. Pick one. Commit to it.

### 2. Button Sizing Is Chaos
- **Problem:** 7 different size configs (py-1 → py-4, px-3 → px-8)
- **Impact:** "Book Now" on homepage is larger than on /booking page
- **Fix:** 2 hours. Standardize to 3 sizes: small/medium/large

### 3. Card Borders Lack Unity
- **Problem:** 4 different border treatments (left-only, all-around, none, top-only)
- **Colors used:** burgundy-400, burgundy-100, clay-600, none
- **Impact:** Cards feel like they're from different websites
- **Fix:** 1 hour. Choose ONE border style for cards

---

## FATAL FLAWS (6 issues breaking coherence)

| Rank | Flaw | Hex Codes | Measurements | Time |
|------|------|-----------|--------------|------|
| 1 | Burgundy/Sage conflict | #6d3a47 vs oklch(142°) | Hue delta 192° | 2h |
| 2 | Card borders vary | #c19b9f, #ede3e5, #c96547 | 1–4px width | 1h |
| 3 | Button sizing x7 | — | py-1→py-4, px-3→px-8 | 2h |
| 4 | Text color drifts | #5e534a, #7a6f68, #8f8279 | Contrast 4.3–7.1:1 | 30m |
| 5 | Spacing rhythm broken | 48px/64px/80px/96px | No consistent section gap | 1h |
| 6 | Hero gradient off-center mobile | rgb(157,187,141, 0.30) | Hardcoded %, doesn't adapt | 1h |

---

## SEVERE ISSUES (6 eroding polish)

| Rank | Flaw | Fix Time | Impact |
|------|------|----------|--------|
| 7 | Focus rings inconsistent | 1h | Keyboard nav feels broken |
| 8 | Card shadows unused | 1h | Cards don't lift together |
| 9 | Link hovers missing | 1.5h | Click feedback unclear |
| 10 | Section bg tint logic broken | 1h | Homepage monotonous |
| 11 | Typography measure hardcoded | 1h | h2/h3 max-width not tokens |
| 12 | Micro-interactions absent | 2h | Site feels static |

---

## MODERATE ISSUES (8 rough edges)

| Rank | Flaw | Fix Time | Quick Win? |
|------|------|----------|-----------|
| 13 | Nav logo jumps on tablet | 15m | ✅ Yes |
| 14 | Star icons misaligned | 10m | ✅ Yes |
| 15 | Form inputs: Tailwind blue | 1h | ✅ Yes |
| 16 | CTA arrows: emoji not glyph | 30m | ✅ Yes |
| 17 | Grid gaps inconsistent | 1h | ⚠️ Medium |
| 18 | Footer links unreadable | 30m | ✅ Yes |
| 19 | Hover colors wrong palette | 1.5h | ⚠️ Medium |
| 20 | H/body spacing lumpy | 1h | ⚠️ Medium |
| 21 | Accent stripe width varies | 30m | ✅ Yes |
| 22 | Mobile hero 100vh excessive | 30m | ✅ Yes |

---

## MINOR ISSUES (3 completeness gaps)

| Rank | Flaw | Fix Time |
|------|------|----------|
| 23 | Gradient directions mixed | 30m |
| 24 | Dark section contrast fails | 1h |
| 25 | No favicon/og:image | 15m |

---

## PRIORITY ROADMAP

### IMMEDIATE (Next 1-2 Hours)
1. **Color system decision:** Burgundy or Sage? Commit.
2. **Button standardization:** Small/Medium/Large, pick 3 sizes
3. **Card borders:** Choose 1 style, apply everywhere

### SHORT-TERM (Next 2-4 Hours)
4. Fix spacing rhythm (8px base, enforce scale)
5. Link hover states (add transition, color)
6. Form inputs (override Tailwind blue)

### MEDIUM-TERM (Next 4-8 Hours)
7. Typography measure constraints (use tokens, not hardcoded)
8. Micro-interactions (card lifts, button feedback)
9. Dark section contrast (footer link fix)
10. Mobile hero height fix

### POLISH (Next 8-10 Hours)
11. Focus ring consistency
12. Gradient direction standardization
13. Favicon + social image

---

## WHAT'S WORKING ✅

- Typography scale logic (1.25 modular ratio works perfectly)
- Heading hierarchy (h1→h6 semantic and visual)
- Mobile responsiveness (layout adapts well at breakpoints)
- Icon rendering (SVG crisp and consistent)
- A11y fundamentals (mostly WCAG AA)

---

## FILES AFFECTED

Primary offenders:
- `tailwind.config.ts` (color system confusion)
- `app/globals.css` (spacing rhythm not enforced)
- `components/HeroSection.tsx` (gradient hardcoded positions)
- `components/BookingForm.tsx` (button sizing chaos)
- Various page .tsx (inline styles overriding system)

---

## ESTIMATED EFFORT

| Tier | Hours | Cumulative |
|------|-------|-----------|
| Fatal (3 issues) | 5h | 5h |
| Severe (6 issues) | 7h | 12h |
| Moderate (8 issues) | 6h | 18h |
| Minor (3 issues) | 1.5h | 19.5h |
| Polish | 1h | 20.5h |

**Total: ~20 hours to 8.5/10 visual polish**

---

Date: September 1, 2026 | Auditor: CRITIC #1
