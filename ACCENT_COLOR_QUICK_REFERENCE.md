# ACCENT COLOR USAGE QUICK REFERENCE

## Current State vs. Optimal
```
CURRENT (Non-Optimal):
├── Sage: 391 usages → forms, text, buttons, borders, backgrounds ✗ Diluted
├── Sea-Blue: 2 usages → missing from CTAs ✗ Unused
├── Deep-Gray: 3 usages → undefined purpose ✗ Unclear
└── Persona Accents: Inconsistent → some pages use, others don't ✗ Fragmented

OPTIMAL (After Improvements):
├── Sage: ~50-100 usages → primary CTAs, key highlights only ✓ Focal
├── Sea-Blue: ~40-60 usages → secondary CTAs, secondary actions ✓ Clear
├── Deep-Gray: ~20-30 usages → info boxes, grounded states ✓ Defined
└── Persona Accents: ~50+ usages → consistent per specialty page ✓ Organized
```

## Accent Color Hierarchy (AFTER IMPROVEMENTS)

```
┌─────────────────────────────────────────────────┐
│  PRIMARY ACTION                                 │
│  "Book Now" / "Start Booking" / "Book Therapy"  │
│  SAGE-600 • bg-sage-600 text-white              │
│  Hover: sage-700 (1 step darker)                │
│  Usage: Main CTA, hero button, booking flow     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  SECONDARY ACTION                               │
│  "Learn More" / "Read Guide" / "View Details"   │
│  SEA-BLUE-600 • text-sea-blue-600               │
│  Hover: text-sea-blue-700                       │
│  Usage: Links, secondary buttons, support CTAs  │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  TERTIARY ACTION (Specialty-Specific)           │
│  Persona-colored accent links / icon hovers     │
│  DUSK-600 / HONEY-600 / CLAY-600 / BLUSH-600   │
│  Hover: 1 step darker per color                 │
│  Usage: Page-specific accent actions            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  INFORMATION                                    │
│  Notes / Details / Disclaimers                  │
│  DEEP-GRAY-600 • text-deep-gray-700             │
│  Border: border-l-4 border-deep-gray-600        │
│  Usage: Info boxes, disclaimers, notes          │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  ERROR / WARNING                                │
│  Form validation errors, warnings               │
│  ALERT-600 • text-alert-600                     │
│  Usage: Validation messages only                │
└─────────────────────────────────────────────────┘
```

## Use Case Matrix

| Element | Current | Optimal | Rationale |
|---------|---------|---------|-----------|
| **CTA Buttons** | Sage ✓ | Sage | Primary action focal point |
| **Secondary Links** | Sage ✗ | Sea-Blue | Differentiate secondary actions |
| **Form Backgrounds** | Sage ✗ | White/Warm-Gray | Reduce visual noise |
| **Form Labels** | Sage ✗ | Warm-Gray-700 | Keep neutral, focus on input |
| **Form Errors** | Alert ✓ | Alert | Correct emphasis |
| **Info Boxes** | Sage ✗ | Deep-Gray | Signal non-actionable info |
| **Card Top Border** | Sage | Persona-Color | Specialty identification |
| **Body Text** | Sage ✗ | Warm-Gray | Preserve readability |
| **Breadcrumbs** | Sage ✗ | Warm-Gray-600 | Neutral navigation aide |
| **Hover States** | Variable ✗ | 1-2 steps darker | Consistent feedback |

## Specific File Changes Required

### BookingForm.tsx (20+ changes)
```diff
- <div className="bg-gradient-to-br from-sage-50 to-sage-100 border-2 border-sage-200">
+ <div className="bg-white border border-warm-gray-200">

- <label className="text-sage-600 text-sm font-medium">
+ <label className="text-warm-gray-700 text-sm font-medium">

- <span className="text-sage-600">Required field</span>
+ <span className="text-warm-gray-600 text-xs">Required field</span>
```

### Navigation.tsx (5+ changes)
```diff
- <a href="#" className="text-sage-600 hover:text-sage-700">
+ <a href="#" className="text-sea-blue-600 hover:text-sea-blue-700">

- <span className="text-sage-600 text-sm">
+ <span className="text-sea-blue-600 text-sm">
```

### about/page.tsx (15+ changes)
```diff
- <p className="text-sage-600">Secondary text</p>
+ <p className="text-warm-gray-700">Secondary text</p>

- <div className="bg-sage-50 border border-sage-200">
+ <div className="bg-warm-gray-50 border-l-4 border-deep-gray-600">
```

### Specialty pages (ADHD, Couples, Career, etc.)
```diff
- Add to cards:
+ {specialty === 'ADHD' && 'border-t-4 border-dusk-600'}
+ {specialty === 'Couples' && 'border-t-4 border-blush-600'}
+ {specialty === 'Perinatal' && 'border-t-4 border-clay-600'}
+ {specialty === 'Career' && 'border-t-4 border-honey-600'}
```

## Quick Copy-Paste Fixes

### Replace All Sage Form Container Backgrounds
```bash
# Find
bg-gradient-to-br from-sage-50 to-sage-100
bg-gradient-to-r from-sage-50 to-sage-50
bg-sage-50

# Replace with (context-dependent)
bg-white           # Clean form
bg-warm-gray-50    # Subtle background
```

### Replace Sage Form Labels with Warm-Gray
```bash
text-sage-600 text-sm font-medium
→ text-warm-gray-700 text-sm font-medium
```

### Replace Sage Secondary Text with Warm-Gray
```bash
text-sage-400 / text-sage-600 / text-sage-700 / text-sage-800
→ text-warm-gray-600 / text-warm-gray-700 / text-warm-gray-800 / text-warm-gray-900
```

### Add Sea-Blue to Secondary Links
```bash
text-sage-600 hover:text-sage-700
→ text-sea-blue-600 hover:text-sea-blue-700
```

## Testing Checklist After Implementation

- [ ] Booking flow: primary CTA is sage-600, cancel/back buttons are sea-blue-600
- [ ] Home page: no sage colors in body text, all secondary links are sea-blue
- [ ] About page: info boxes have deep-gray borders, no sage text
- [ ] Specialty pages: cards have colored top borders (dusk/clay/honey/blush)
- [ ] Contact form: white/warm-gray backgrounds, no sage containers
- [ ] Navigation: secondary nav links are sea-blue-600
- [ ] All CTAs: sage-600 for primary, sea-blue-600 for secondary
- [ ] Hover states: consistent darkening (sage-700, sea-blue-700)
- [ ] Error messages: alert-600 only
- [ ] Info callouts: deep-gray-600 text or borders

---

**Key Principle:** Sage (burgundy) is focal. Everything else supports it.
