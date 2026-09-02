# Button & Interactive Elements Audit Report
**Date:** September 1, 2026  
**Scope:** Button sizing, hover states, focus states, disabled states, loading states  
**Repository:** rainuka-therapy (Next.js, Sage design system)

---

## Executive Summary

The button and interactive elements system is **well-structured** with modern oklch color tokens and micro-interactions. However, several improvements enhance consistency, accessibility, and visual feedback across all states.

**Audit Coverage:**
- ✅ EnhancedButton component (primary, secondary, outline variants)
- ✅ EnhancedFormInput & EnhancedTextarea (form controls)
- ✅ EnhancedCard (hoverable containers)
- ✅ HeroSection persona cards and CTAs
- ✅ BookingForm buttons
- ✅ Global CSS button states (globals.css)

---

## 1. Button Sizing Consistency

### Current State
| Size | Padding | Font Size | Min Height | Usage |
|------|---------|-----------|-----------|-------|
| **sm** | 0.5rem 1rem | 0.875rem (14px) | 40px | Secondary actions |
| **md** | 0.875rem 1.75rem | 1rem (16px) | 48px | Primary CTAs |
| **lg** | 1rem 2rem | 1.0625rem (17px) | 56px | Hero CTAs |

### ✅ Findings
- WCAG compliant: minimum 48px height (touch target standard)
- Consistent 8px rhythm spacing
- Vertical padding creates proper visual weight

### 🔧 Improvements

**1. Add `xl` size variant for hero CTAs**
- Padding: `1.25rem 2.5rem`
- Font size: `1.125rem` (18px)
- Min height: `64px`
- Use case: large hero buttons in banner sections

**2. Add `xs` size variant for secondary UI**
- Padding: `0.375rem 0.75rem`
- Font size: `0.8125rem` (13px)
- Min height: `36px`
- Use case: chip-style buttons, micro-CTAs

**3. Standardize button width consistency**
- Add optional `fullWidth` prop
- Default: inline (current)
- Option: `w-full` for form submission contexts

---

## 2. Hover States

### Current Implementation
✅ **Primary variant:** 
- Transform: `translateY(-2px)` (lift effect)
- Shadow: enhanced from `0 4px 6px` → `0 10px 25px`
- Opacity: 1 → 1
- Duration: `var(--duration-base)` (250ms)

✅ **Outline variant:**
- Background: transparent → burgundy-50
- Border: burgundy-600 → burgundy-700
- Box shadow: added
- Transform: `scale(1.02)`

### 🔧 Improvements

**4. Add background color shift to primary hover**
- Current: only shadow + transform
- Proposed: burgundy-600 → burgundy-700 (darker green)
- Makes state change more obvious
- Aligns with global CSS `.btn-primary:hover` (which IS darker)

**5. Smooth disabled state hover**
- Currently: disabled buttons don't update hover states
- Proposed: Add `cursor: not-allowed` + `opacity: 0.5` in CSS
- Add early return in onMouseEnter when disabled

**6. Add focus-visible ring styling**
- Current: rely on default browser outline
- Proposed: `outline: 2px solid burgundy-600; outline-offset: 2px;`
- Matches card system focus design
- Visible from keyboard navigation

---

## 3. Focus States

### Current Implementation
⚠️ **Issue:** No explicit `focus-visible` handling in EnhancedButton
- Relies on browser default
- Hidden on non-keyboard users (better UX, but less consistent)
- No visible ring

### WCAG Compliance Check
- ❌ Focus indicator not always visible
- ❌ No outline offset (contrast with button)
- ⚠️ Some focus states rely on shadow alone

### 🔧 Improvements

**7. Implement focus-visible state pattern**
```css
.btn:focus-visible {
  outline: 2px solid var(--burgundy-600);
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(107, 148, 79, 0.1);
}
```
- Keyboard-only focus ring (better UX for mouse users)
- Applies to all button variants
- Meets WCAG AA contrast requirements

**8. Add aria-pressed & aria-checked support**
- Allow toggle buttons with state
- Update aria-label dynamically
- CSS selector: `[aria-pressed="true"]`

---

## 4. Disabled States

### Current Implementation
✅ **Good:**
- Opacity reduced to 0.6
- Cursor changes to `not-allowed`
- Click handlers properly blocked

⚠️ **Issues:**
- No visual border/color shift
- Disabled hover states still apply (minor)
- Loading state disabled but cursor doesn't change

### 🔧 Improvements

**9. Enhanced disabled state styling**
- Opacity: 0.6 → 0.5 (more obvious)
- Background: burgundy-600 → burgundy-300 (desaturated)
- Box shadow: removed or reduced
- Border color: for outline buttons

**10. Loading state cursor behavior**
- Add `cursor: wait` or `cursor: progress` for loading
- Add spinner icon (currently uses ⟳ symbol)
- Consider aria-busy="true"

---

## 5. Loading States

### Current Implementation
✅ **Present:**
- `loading` prop disables button
- Spinner icon: ⟳ character
- Animation: `shimmer` (infinite)
- Prevents double submission

⚠️ **Issues:**
- Spinner animation undefined in CSS (needs keyframes)
- No feedback text (e.g., "Submitting...")
- Icon may not be accessible to screen readers

### 🔧 Improvements

**11. Robust loading animation**
```css
@keyframes shimmer {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.btn[data-loading="true"] {
  animation: shimmer var(--duration-slow) var(--ease-standard) infinite;
}
```

**12. Add loading text option**
- Prop: `loadingText="Submitting..."`
- Hides button text, shows spinner + text
- Better UX: user knows what's happening

**13. Add loading state to form inputs**
- Mirror button loading pattern
- Disable input during submission
- Show optional spinner within input

---

## 6. Additional Enhancements

### Variant Consistency
**Current:** primary, secondary, outline  
**Issue:** secondary looks identical to primary (both burgundy-600)

**14. Redesign secondary variant**
- Background: burgundy-50 (light background)
- Color: burgundy-700 (dark text)
- Border: 1px burgundy-200
- Hover: burgundy-100 background, burgundy-700 border
- Use case: less urgent CTAs

### Form Button Consistency
**15. Align form buttons with component buttons**
- BookingForm submit buttons inherit browser defaults
- Map to EnhancedButton with proper variants
- Ensure form buttons match hero CTAs visually

### Icon Button Support
**16. Add icon-only button variant**
- Square aspect ratio (40px x 40px for md)
- Centered padding: 0.5rem
- Use case: close modals, toggle menus
- Accessibility: aria-label required

---

## Audit Checklist

| Item | Status | Notes |
|------|--------|-------|
| Touch target size (48px+) | ✅ Pass | All primary buttons WCAG compliant |
| Color contrast | ✅ Pass | Sage-600 on white meets 4.5:1 |
| Hover feedback | ⚠️ Partial | Missing bg color shift on primary |
| Focus indicator | ❌ Missing | No visible focus ring |
| Disabled state | ✅ Good | Opacity + cursor working |
| Loading state | ✅ Present | Animation needs CSS definition |
| Keyboard navigation | ✅ Pass | Buttons receive focus |
| Reduced motion | ✅ Pass | Uses CSS `@media (prefers-reduced-motion)` |
| Loading text | ❌ Missing | No feedback text option |
| Icon button variant | ❌ Missing | No square button option |

---

## Implementation Priority

### High (Accessibility & Critical UX)
1. **Focus-visible rings** (WCAG 2.1 AA requirement)
2. **Disabled state visual redesign** (clarity)
3. **Loading animation keyframes** (CSS completeness)

### Medium (Consistency & Polish)
4. **Primary hover background shift**
5. **Secondary variant redesign**
6. **Icon button variant**
7. **Loading text option**

### Low (Enhancement & Future)
8. **XL & XS size variants**
9. **Full-width option**
10. **Toggle/toggle-group buttons**

---

## Files to Update

- `components/EnhancedComponents.tsx` — Add new props, improve states
- `app/globals.css` — Add focus-visible rules, loading keyframes
- `app/styles.ts` — Add new size/variant constants
- `components/BookingForm.tsx` — Replace native buttons with EnhancedButton
- New: `components/ButtonGallery.tsx` — Interactive demo of all states

---

## Testing Recommendations

1. **Keyboard navigation** — Tab through all buttons, verify focus ring
2. **Reduced motion** — Enable `prefers-reduced-motion`, verify no animations
3. **Touch devices** — Verify 48px+ target size on mobile
4. **Color contrast** — Use axe, WAVE, or contrast checker
5. **Screen reader** — NVDA/JAWS read button labels correctly
6. **Dark mode** (future) — Plan colors if dark theme is added

---

## Conclusion

The button system has a **strong foundation** with good semantic HTML and modern design tokens. These 10 improvements ensure **maximum accessibility, clarity, and polish** while maintaining the calm, professional tone of the Rainuka Therapy brand.

Estimated effort: **2-3 hours** (implementation + testing)
