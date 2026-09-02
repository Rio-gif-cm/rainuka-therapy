# CTA Consistency & Recommendations Summary

## Quick Reference: Color Standardization

### Current State ❌
- 11 different colors detected across 106 CTAs
- Inline styles override design system
- Inconsistent hover/active states

### Target State ✅
```
PRIMARY CTA:     #6b944f (Sage 600)
PRIMARY HOVER:   #547c3f (Sage 700)
PRIMARY ACTIVE:  #426232 (Sage 800)
OUTLINE CTA:     border: #6b944f, color: #6b944f
```

**All CTAs must use class-based styles, NOT inline backgroundColor.**

---

## Text Label Standardization

### By Destination

| Page Type | Primary CTA | Secondary CTA | Notes |
|-----------|------------|---------------|-------|
| Homepage | Book your consultation | See all FAQs → | Teal accent ok here |
| Specialty (/adhd, /perinatal, /career) | Book [Specialty] Consultation | Explore [topic] | Contextual |
| Pricing | Book now | See pricing details | Action-oriented |
| About | Ready to work with me? | Explore specialties | Relationship-focused |
| Guides | Schedule consultation | Explore related guides | Learning path |
| Resources | Get provider list | Learn about access | Information-focused |
| Contact/FAQ | Send message | Schedule call | Multi-path |

### Rules
✅ **DO:**
- Use benefit-driven language ("Start ADHD Assessment" not "Click here")
- Include context ("Book Perinatal Consultation" not just "Book")
- Match tone to page (professional on homepage, warm on about)

❌ **DON'T:**
- Use vague text ("More", "Here", "Click")
- Mix terminology on same page ("Book" + "Schedule" + "Get started")
- Hide action in secondary text

---

## CTA Positioning Rules

### All Pages
1. **Above Fold:** Primary CTA must be visible without scrolling
2. **Body:** Max 2 CTAs per viewport (avoid choice paralysis)
3. **Footer:** Backup CTA + contact info

### Mobile Specific
- Button: min 44x44px touch target
- Text: min 16px font size
- Spacing: min 8px between clickable elements
- Width: min 80% of viewport

---

## Verification Checklist

### Color Consistency ✅
- [ ] All `<Link>` tags to `/booking` use `btn-primary` class
- [ ] No inline `backgroundColor` styles on buttons
- [ ] Homepage hero CTA decided: sage or accent?
- [ ] Hover states work on all CTAs

### Text Clarity ✅
- [ ] No "Click here", "More", "→" vague text
- [ ] Specialty pages use contextual copy
- [ ] Booking CTAs use "Book with Rainuka" pattern
- [ ] Navigation CTAs use verbs ("Explore", "Learn", "Discover")

### Accessibility ✅
- [ ] All CTA colors pass WCAG AA contrast (4.5:1)
- [ ] All buttons have `:focus` outline (2px, 3px offset)
- [ ] Touch targets min 44x44px tested on mobile
- [ ] Keyboard navigation works (Tab, Enter, Escape)

### Conversion Funnel ✅
- [ ] All booking CTAs → `/booking` page
- [ ] `/booking` page has working form/calendar
- [ ] No orphaned CTAs (invalid destinations)
- [ ] Pricing page has CTA on each tier
- [ ] Bottom of every page has secondary CTA

---

## High-Impact Fixes (Priority Order)

### 1️⃣ Remove Inline Styles (1 hour)
**File:** `app/page.tsx` (line 196-206)
```jsx
// BEFORE (BROKEN):
style={{
  backgroundColor: '#3d8aa8',
  color: 'white',
  ...
}}

// AFTER (CORRECT):
className="btn-primary"
```

### 2️⃣ Standardize Button Colors (2 hours)
- Search repo for: `backgroundColor: '#`
- Replace all with: `className="btn-primary"`
- Test on all 32 pages
- Decide: keep teal accent for homepage hero or switch to sage?

### 3️⃣ Audit Mobile Touch Targets (1 hour)
- Open each page on iPhone/Android
- Tap each CTA
- Verify min 44x44px (no accidental mis-taps)
- Check text size >= 16px

### 4️⃣ Standardize Text Labels (2 hours)
- Create label dictionary
- Search each page for booking CTAs
- Replace with standardized copy
- Test on users if possible

### 5️⃣ Verify Contrast Compliance (30 min)
- Test Sage #6b944f on white (WebAIM)
- Test Sage #6b944f on burgundy (if used)
- Document passing ratios
- Add to design system

---

## Files to Update

1. **app/page.tsx** - Remove inline CTA styles (hero section)
2. **app/pricing/page.tsx** - Add CTA to each pricing tier
3. **app/about/page.tsx** - Ensure strong closing CTA
4. **app/styles.ts** - Add color token documentation
5. **DESIGN_SYSTEM.md** (create) - CTA guidelines + examples
6. **PR template** (update) - Add CTA consistency checklist

---

## Success Metrics

Track these post-implementation:

| Metric | Target | Impact |
|--------|--------|--------|
| CTA Color Count | ≤ 3 | Brand consistency |
| WCAG Contrast Pass Rate | 100% | Accessibility |
| Mobile Touch Target Pass Rate | 100% | Mobile conversion |
| Booking CTA Click Rate | +5-15% | Revenue |
| Avg CTAs per Page | 2-3 | User clarity |

---

## Appendix: Color Palette

```
PRIMARY (All main CTAs):
  Rest:   #6b944f (Sage 600)
  Hover:  #547c3f (Sage 700)
  Active: #426232 (Sage 800)

OUTLINE (Secondary):
  Border: #6b944f
  Text:   #6b944f
  Hover:  #547c3f

ACCENT (Homepage hero only - optional):
  Color:  #3d8aa8 (Teal)
  Hover:  #2f6a86 (Dark Teal)

FORBIDDEN (Remove all):
  #d4a574 (warm brown)
  #4d6a86 (blue-gray)
  #fdf7f4 (off-white)
  All other ad-hoc colors
```

---

**Last Updated:** January 15, 2025  
**Maintainer:** Design System Team  
**Review Cycle:** Quarterly
