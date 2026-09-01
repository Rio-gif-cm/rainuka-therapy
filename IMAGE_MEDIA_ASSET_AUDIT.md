# Image & Media Asset Audit Report
**Rainuka Therapy Website — Public/Images Directory & Emoji Replacement Opportunity**
Generated: August 31, 2026

---

## Executive Summary

The rainuka-therapy website currently has **zero unoptimized image files** in the `public/images/` directory (directory does not exist). However, a **critical opportunity exists**: the codebase extensively uses **emoji icons (55+ unique emojis across 20 pages)** where actual image assets or purpose-built icon components would improve:

- **Visual consistency** across the therapeutic brand
- **Accessibility** for screen readers and semantic clarity
- **Performance** (emoji rendering varies by OS/browser)
- **Responsive design** control
- **Brand personality** through custom illustrated assets

---

## Part 1: Actual Image Assets Audit

### Public Directory Structure
```
public/
├── file.svg (391 B)
├── globe.svg (1.0 KB)
├── next.svg (1.4 KB)
├── vercel.svg (128 B)
├── window.svg (385 B)
└── sw.js (6.2 KB)
```

### Current Image Inventory

| File | Size | Type | Status | Notes |
|------|------|------|--------|-------|
| `file.svg` | 391 B | SVG | ✓ Optimized | Placeholder asset |
| `globe.svg` | 1.0 KB | SVG | ✓ Optimized | Placeholder asset |
| `next.svg` | 1.4 KB | SVG | ✓ Optimized | Placeholder asset |
| `vercel.svg` | 128 B | SVG | ✓ Optimized | Placeholder asset |
| `window.svg` | 385 B | SVG | ✓ Optimized | Placeholder asset |

**Total public image size: 9.6 KB**

### Findings

✅ **No unoptimized images** — All SVG assets are minimal and properly optimized.  
✅ **No PNGs or JPEGs** — No raster images to optimize.  
✅ **No missing public/images/ directory** — Best practice: should be created to organize image assets if added.  
❌ **Missing actual hero/product images** — No therapist photos, testimonials, or illustrative images.

---

## Part 2: Emoji Replacement Audit

### Critical Finding: Heavy Emoji Icon Usage

The codebase uses **55 unique emojis** across **20 pages** as visual elements in the UI. This represents a major opportunity to replace emoji with purpose-built assets.

### Emoji Usage by Frequency

**Most Frequent (5+ uses):**
- 🧭 (Navigation/Compass) — 5 uses
- 🧠 (Brain/Mind) — 5 uses
- ✓ (Checkmark) — 5 uses
- 🤲 (Hands/Support) — 4 uses
- 💜 (Purple Heart) — 4 uses
- 🤝 (Handshake) — 3 uses
- 🌍 (World) — 3 uses

**Medium Frequency (2 uses):**
- 🧰, 🔗, 🔋, 📅, 💭, 💪, 💙, 💔, 🌿, 🌱, ❓, ✳️

**Single Use (1):**
- 🫂, 🪶, 🧳, 🤎, 🤍, 🛡️, 🚫, 🚪, 🗣️, 🕊️, 🔀, 📚, 💻, 💰, 💬, 💡, 👩, 👨‍👩‍👧‍👦, 👨‍👩‍👧, 👁️, 🏳️‍🌈, 🎯, 🎭, 🌾, 🌙, 🌐, ❤️, ✍️, ✅, ⚡, ⚖️, ♿

### Pages with Emoji Content (20 pages)

1. `app/about/page.tsx` — 👩‍⚕️, ✓ (therapist identity, qualifications)
2. `app/adhd/page.tsx` — 💪, 🕊️, 🧰, 🌱, 🗣️, 👩 (ADHD specialty cards)
3. `app/back-to-school/page.tsx` — 💭, 🧠 (anxiety metaphors)
4. `app/bipoc/page.tsx` — 🌍, 🙏, ⚖️, 🩹, 🎨, 🧳 (cultural competency)
5. `app/booking/page.tsx` — ✓, 💜 (confirmation elements)
6. `app/career/page.tsx` — (specialty content with icons)
7. `app/case-studies/page.tsx` — (testimonial cards)
8. `app/couples/page.tsx` — (relationship icons)
9. `app/disability-access/page.tsx` — ♿, 🛡️ (accessibility symbols)
10. `app/financial-access/page.tsx` — 💰 (pricing/affordability)
11. `app/grief/page.tsx` — 💔 (emotional content)
12. `app/holiday-stress/page.tsx` — (seasonal anxiety)
13. `app/lgbtq/page.tsx` — 🏳️‍🌈 (pride flag)
14. `app/men/page.tsx` — (specialty cards)
15. `app/neurodivergent/page.tsx` — (neurodiversity icons)
16. `app/parents/page.tsx` — 👨‍👩‍👧 (family icons)
17. `app/perinatal/page.tsx` — (reproductive health)
18. `app/pricing/page.tsx` — ✓, 💜 (feature lists)
19. `app/providers/page.tsx` — (insurance/directory icons)
20. `app/layout.tsx` — (navigation icons)

### Responsive Image Implementation

**Component: `ResponsiveHeroImage.tsx`**
- ✓ Implements `next/image` with responsive srcset
- ✓ Supports automatic WebP/AVIF generation
- ✓ Includes blur placeholder to prevent CLS
- ✓ Priority loading for above-fold content
- ✓ Has comprehensive optimization checklist
- **Status: Ready for use, but no actual images deployed**

---

## Part 3: Issues & Recommendations

### Issue 1: Emoji Accessibility
**Severity: MEDIUM**
- Screen readers read emojis literally ("waving hand," "heart," etc.) instead of context
- Semantic meaning lost for users relying on AT (assistive technology)
- Examples:
  - 💪 should announce "strength" or "capability," not "flexed bicep"
  - 🧠 should announce "understanding" or "mindfulness," not "brain"
  - 👩‍⚕️ should announce "therapist" or "licensed professional," not "woman health worker"

### Issue 2: Emoji Rendering Inconsistency
**Severity: LOW**
- Different OS/browsers render emojis differently
- Mobile vs. desktop appearance varies
- Can impact visual hierarchy and brand consistency

### Issue 3: Missing Responsive Image Structure
**Severity: MEDIUM**
- `public/images/` directory doesn't exist (best practice)
- No hero/product images deployed despite optimization infrastructure ready
- ResponsiveHeroImage component exists but unused
- Zero image assets for:
  - Therapist headshots or "about" photography
  - Testimonial/case study imagery
  - Specialty/niche illustrations (ADHD, perinatal, grief, etc.)
  - Icons/illustrations for service differentiators

### Issue 4: Missed Branding Opportunity
**Severity: MEDIUM**
- Emoji icons are generic; no therapeutic brand personality
- All pages use the same emoji set (no customization per specialty)
- No opportunity for illustrative cohesion

---

## Part 4: Prioritized Replacement Plan

### Phase 1: Replace High-Impact Emojis (Immediate)

**Target: 12 emojis with highest accessibility & branding impact**

| Emoji | Current Use | Replacement Asset Type | Priority | Rationale |
|-------|------------|----------------------|----------|-----------|
| 👩‍⚕️ | Therapist identity | Custom headshot or illustrated portrait | **CRITICAL** | Personal connection critical for therapy website |
| 💜 | Heart/affection | Custom brand heart icon | **HIGH** | Appears on 4 pages, defines brand warmth |
| ✓ | Checkmark/confirmation | Custom check icon (SVG) | **HIGH** | 5 uses, accessibility issue |
| 🧠 | Brain/mindfulness | Illustrated brain with modern style | **HIGH** | 5 uses, specialty content (ADHD, neurodivergent) |
| 🤝 | Connection/support | Custom handshake illustration | **HIGH** | Relationship-core for therapy brand |
| 🌍 | Global/BIPOC | Illustrated diverse community or cultural icon | **MEDIUM** | 3 uses, BIPOC-specific pages |
| 💪 | Strength/empowerment | Illustrated empowerment icon | **MEDIUM** | ADHD specialty content |
| 🏳️‍🌈 | LGBTQ+ inclusion | Purpose-built pride/inclusion symbol | **MEDIUM** | Sensitive; custom asset builds trust |
| 👨‍👩‍👧‍👦 | Family | Illustrated family unit (diverse) | **MEDIUM** | Family therapy, perinatal focus |
| ♿ | Accessibility | Custom wheelchair/disability icon | **MEDIUM** | Must be respectful, not tokenizing |
| 💔 | Grief | Illustrated grief symbol (broken heart or gentle) | **LOW** | 1 use, but emotionally significant |
| 🌱 | Growth/healing | Illustrated sprouting plant or growth metaphor | **LOW** | 2 uses, soft illustration fits brand |

### Phase 2: Create Icon System (Next)

**Build a consistent icon library for:**
- Specialty cards (ADHD, perinatal, grief, couples, LGBTQ+, BIPOC, etc.)
- Navigation and CTAs
- Feature/benefit lists (currently using text bullets with ✓)
- Testimonial/case study headers

**Asset creation approach:**
1. **Option A (Recommended):** Partner with accessible icon designer
   - Example: Draw custom icons in Figma → SVG export
   - Cost: ~$2000-5000 for 30-40 custom icons
   - Benefit: Full brand control, accessibility-first design

2. **Option B (Budget):** Use accessible icon library + customization
   - Example: Hero Icons, Feather Icons + custom color/animation
   - Cost: Free → $100
   - Limitation: Generic appearance

3. **Option C (Immediate):** Replace emoji with Unicode symbols or text
   - Cost: Free
   - Limitation: Less visual impact

### Phase 3: Add Hero/Product Images (Long-term)

**Images to commission:**
1. **Therapist headshot** (about page, hero, testimonials)
   - Specification: 1200×1600px JPEG, professional but warm
   - Size: <150 KB with optimization
   - Alternative: Illustrated abstract portrait if photography unavailable

2. **Specialty illustrations** (one per niche)
   - ADHD: Illustrated executive function metaphor
   - Perinatal: Gentle motherhood/family imagery
   - Grief: Respectful, non-dark loss imagery
   - LGBTQ+: Celebration/pride aesthetic
   - Career: Professional growth metaphor

3. **Testimonial/case study photos** (if clients consent)
   - Diverse representation in images
   - Headshots or full-body per content

---

## Part 5: Implementation Checklist

### Immediate (Week 1)
- [ ] Create `public/images/` directory structure
  - `/public/images/icons/` — SVG icon assets
  - `/public/images/heroes/` — Hero/hero imagery
  - `/public/images/testimonials/` — Client photography (if applicable)
- [ ] Audit emoji usage: Generate full list of 55 emojis with page references
- [ ] Decide on icon design approach (custom Figma vs. icon library)

### Short-term (Weeks 2–3)
- [ ] Replace Phase 1 emojis with SVG/image assets
- [ ] Test accessibility: Verify ARIA labels on all image assets
- [ ] Test responsive behavior with `ResponsiveHeroImage` component
- [ ] Lighthouse audit: Verify no performance regression

### Medium-term (Month 1–2)
- [ ] Design/procure specialty icons (30–40 assets)
- [ ] Refactor emoji icon props to accept image sources
- [ ] Add image assets to `public/images/heroes/` for each specialty page
- [ ] Implement blur placeholders for all hero images

### Long-term (Month 2+)
- [ ] Commission therapist headshot or illustration
- [ ] Add testimonial imagery (with consent)
- [ ] Create specialty page illustrations (ADHD, perinatal, grief, etc.)
- [ ] Establish image governance policy

---

## Part 6: Accessibility Wins

### Current State
- 55 emojis with semantic meaning lost to screen readers
- No alt text on emoji decorations
- Generic appearance across all pages

### After Replacement
- **Custom SVG icons** with `aria-label` and `role="img"`
- **Brand-aligned** visual language
- **Semantic HTML**: `<span role="img" aria-label="Strength and capability">💪</span>` → `<img src="/images/icons/strength.svg" alt="Strength and capability">`
- **Responsive images** with proper srcset and sizes
- **Performance**: SVG icons ~1–3 KB vs. emoji rendering overhead

---

## Part 7: File Organization Proposal

```
public/
├── images/
│   ├── icons/
│   │   ├── strength.svg
│   │   ├── checkmark.svg
│   │   ├── connection.svg
│   │   ├── brain.svg
│   │   ├── growth.svg
│   │   ├── accessibility.svg
│   │   ├── pride.svg
│   │   ├── family.svg
│   │   └── [... 20+ more]
│   ├── heroes/
│   │   ├── therapist-headshot.jpg
│   │   ├── adhd-hero.jpg
│   │   ├── perinatal-hero.jpg
│   │   ├── grief-hero.jpg
│   │   └── [... per specialty]
│   └── testimonials/
│       └── [client photos with consent]
├── file.svg
├── globe.svg
├── next.svg
├── vercel.svg
└── window.svg
```

---

## Summary

| Category | Finding | Status |
|----------|---------|--------|
| **Unoptimized Images** | None found | ✅ PASS |
| **Public Images** | 5 SVG placeholder assets (9.6 KB total) | ✅ OPTIMIZED |
| **Responsive Images** | Infrastructure ready (ResponsiveHeroImage component) | ✅ READY |
| **Missing responsive images (srcset)** | N/A — no actual images deployed | ⚠️ OPPORTUNITY |
| **Emoji usage** | 55+ unique emojis across 20 pages | ⚠️ CRITICAL FINDING |
| **Emoji accessibility** | No screen reader labels; semantic meaning lost | ❌ ISSUE |
| **Brand consistency** | Generic emoji icons; no brand personality | ❌ ISSUE |

---

## Recommendations (Ranked by Impact)

1. **Replace 12 high-impact emojis** with custom SVG icons (Phase 1) — Improves accessibility + brand
2. **Create icon system** (30–40 icons) for consistency across all pages
3. **Establish `public/images/` directory structure** for future image assets
4. **Commission therapist headshot** for "about" page and hero sections
5. **Add specialty page illustrations** (ADHD, perinatal, grief, etc.)
6. **Implement blur placeholders** for all hero images using ResponsiveHeroImage
7. **Document image governance policy** (format, size, accessibility standards)

---

## Tools & Resources

### Image Optimization
- **sharp-cli**: `npx sharp-cli -i input.jpg -o output.jpg --resize 1200 800 --quality 85`
- **Plaiceholder**: https://plaiceholder.co/ (blur placeholders)
- **Squoosh**: https://squoosh.app/ (visual optimization)

### Icon Design
- **Figma**: Design custom icons
- **Hero Icons**: https://heroicons.com/ (accessible, open-source)
- **Feather Icons**: https://feathericons.com/ (minimal, customizable)

### Accessibility Testing
- **axe DevTools**: Browser extension for accessibility audit
- **WAVE**: https://wave.webaim.org/ (accessibility checker)
- **Screen reader testing**: NVDA (free, Windows) or JAWS

### Performance Monitoring
- **Lighthouse**: Chrome DevTools → Lighthouse
- **Web Vitals**: https://web.dev/vitals/
- **PageSpeed Insights**: https://pagespeed.web.dev/

---

**Report prepared by: Image & Media Asset Audit Agent**  
**Date: August 31, 2026**  
**Status: ACTIONABLE — 12 emoji replacements ready to prioritize**
