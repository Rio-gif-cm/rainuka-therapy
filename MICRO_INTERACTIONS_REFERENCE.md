# Micro-Interactions Quick Reference

## Animation Timings & Easing

All animations use: **cubic-bezier(0.2, 0.8, 0.2, 1)** — smooth, natural ease curve

| Duration | Use Case | Example |
|----------|----------|---------|
| **150ms** (--duration-fast) | State echoes, press feedback | Button active, border color |
| **250ms** (--duration-base) | Hover, focus, small reveals | Button lift, form focus glow |
| **400ms** (--duration-slow) | Surfaces in motion, entrances | Card entrance, step transitions |

---

## Component Animations

### Buttons

```
Hover:
  - BG: burgundy-600 → burgundy-700
  - Shadow: 0 4px 6px → 0 10px 25px (primary)
  - Lift: translateY(0) → translateY(-2px)
  - Duration: 250ms
  - Easing: cubic-bezier(0.2, 0.8, 0.2, 1)

Active (Press):
  - Settle: translateY(-2px) → translateY(0)
  - Shadow reduces slightly
  - Duration: 150ms (quick press response)

Focus-Visible:
  - Ring: 3px solid burgundy-600
  - Offset: 4px
  - Combined with hover shadow
```

### Form Inputs

```
Focus:
  - Border: warm-gray-200 → burgundy-500
  - Background: white → rgba(248, 250, 247, 0.8)
  - Box-shadow: 0 0 0 4px rgba(157, 187, 141, 0.2) + inset highlights
  - Duration: 250ms

Error:
  - Border: warm-gray-200 → alert-500
  - Background: white → alert-50
  - Box-shadow: 0 0 0 4px rgba(171, 89, 67, 0.15)
  - Duration: 250ms

Success:
  - Checkmark: scale(0.5) rotateZ(-45deg) → scale(1)
  - Duration: 250ms with 1.1 scale overshoot at 50%
  - Message: translateY(-4px) opacity(0) → translateY(0) opacity(1)
  - Duration: 250ms
```

### Cards

```
Hover:
  - Lift: translateY(0) → translateY(-4px)
  - Shadow: 0 4px 6px → 0 20px 40px
  - Duration: 250ms
  
Arrow Nudge (child element):
  - translateX(0) → translateX(4px)
  - Duration: 300ms
  - Triggers on card:hover
```

### Form Errors

```
Error Message Slide:
  - From: opacity(0) max-height(0) translateY(-4px)
  - To: opacity(1) max-height(200px) translateY(0)
  - Duration: 150ms (quick feedback)
  - Easing: cubic-bezier(0.2, 0.8, 0.2, 1)
```

### Form Steps

```
Step Enter:
  - From: opacity(0) translateX(12px)
  - To: opacity(1) translateX(0)
  - Duration: 250ms
  
Step Exit:
  - From: opacity(1) translateX(0)
  - To: opacity(0) translateX(-12px)
  - Duration: 150ms
```

---

## CSS Variables

```css
/* Motion System */
--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;

/* Colors (for reference) */
--burgundy-50: #f8faf7;
--burgundy-500: #82a86c;
--burgundy-600: #6b944f;
--burgundy-700: #547c3f;
--alert-50: #fcf5f3;
--alert-500: #ab5943;
--alert-600: #934833;
--warm-gray-200: #ddd4cc;
--warm-gray-900: #3f3935;
```

---

## Accessibility

### Reduced Motion
All animations wrapped in:
```css
@media (prefers-reduced-motion: reduce) {
  /* Animation: none !important; */
  /* Transform: none !important; */
  /* Transition: none !important; */
}
```

### Keyboard Navigation
- All buttons: `:focus-visible` with 3px ring
- Form inputs: `:focus` with glow
- Cards: `:focus-visible` with 2px ring
- No focus traps; semantic HTML order respected

### Touch Targets
- Minimum: 48px (desktop)
- Mobile: 56px (via media queries in globals.css)
- All buttons/cards meet WCAG AA standard

---

## Performance Tips

✅ **Do This**
- Animate `transform`, `opacity`, `box-shadow` (GPU accelerated)
- Use short durations (150-400ms)
- Avoid animating `width`, `height`, `top`, `left`, `padding`, `margin`
- Use `will-change: transform` only on complex elements

❌ **Don't Do This**
- Animate `all` property (causes layout thrashing)
- Use `linear` easing (feels robotic)
- Create animations over 1 second (feels sluggish)
- Animate layout properties (causes reflows)

---

## Component Integration Checklist

- [ ] Import `micro-interactions-enhanced.css` in layout
- [ ] Replace buttons with `<EnhancedButton />`
- [ ] Replace form inputs with `<EnhancedFormInput />`
- [ ] Replace textareas with `<EnhancedTextarea />`
- [ ] Wrap cards with `<EnhancedCard />`
- [ ] Test on mobile: 56px touch targets
- [ ] Test reduced motion: settings → accessibility
- [ ] Test keyboard nav: Tab through all inputs
- [ ] Test in Chrome, Firefox, Safari, Edge
- [ ] Check focus rings are visible on all interactive elements

---

## Examples

### Button Usage
```jsx
<EnhancedButton variant="primary" size="md" onClick={handleClick}>
  Schedule a Call
</EnhancedButton>
```

### Form Input Usage
```jsx
<EnhancedFormInput
  label="Email"
  name="email"
  value={email}
  onChange={handleChange}
  onBlur={handleBlur}
  error={emailError}
  success={emailValid}
  successMessage="Email confirmed"
  required
/>
```

### Card Usage
```jsx
<EnhancedCard href="/perinatal" hoverable>
  <h3>Perinatal Mental Health</h3>
  <p>Description...</p>
</EnhancedCard>
```

---

## Testing Reduced Motion

**macOS:**
System Preferences → Accessibility → Display → Reduce motion

**Windows:**
Settings → Ease of Access → Display → Show animations

**Browser DevTools (Chrome/Edge):**
1. F12 → Rendering tab
2. Scroll to "Emulate CSS media feature prefers-reduced-motion"
3. Select "prefers-reduced-motion: reduce"

All animations should **stop immediately** when enabled.

---

## Files Created

| File | Purpose |
|------|---------|
| `app/micro-interactions-enhanced.css` | All animation keyframes + states |
| `components/EnhancedComponents.tsx` | Reusable component library |
| `MICRO_INTERACTIONS_GUIDE.md` | Full documentation + integration |
| `BOOKING_FORM_EXAMPLE.tsx` | Example integration pattern |

---

## Quick Troubleshooting

**Animation isn't playing?**
- Check CSS file is imported in layout
- Verify `prefers-reduced-motion` not enabled
- Check browser DevTools for CSS errors

**Animation is too slow/fast?**
- Adjust `--duration-*` in globals.css
- Stick to 150ms, 250ms, or 400ms
- Don't go below 150ms (feels jittery)
- Don't go above 400ms (feels sluggish)

**Animation is janky/stuttering?**
- Only animate `transform`, `opacity`, `box-shadow`
- Avoid `width`, `height`, `padding`, `margin`
- Enable hardware acceleration: `will-change: transform`
- Check browser DevTools Performance tab

**Focus ring not visible?**
- Ensure `:focus-visible` is used (not `:focus`)
- Check outline color contrasts with background
- Verify outline is not set to `none`
- Test with Tab key (not mouse)
