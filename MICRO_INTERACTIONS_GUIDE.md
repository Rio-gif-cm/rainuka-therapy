# Micro-Interactions & Animation Enhancements

## Overview

This document outlines the micro-interaction enhancements applied to the rainuka-therapy site, following SuperDesign principles. All animations are **purposeful, smooth, quick (200-400ms), and restrained**.

---

## Design System

### Motion Tokens (from globals.css)
```css
--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1)  /* Smooth, natural curve */
--duration-fast: 150ms     /* State echoes (colour, border, press) */
--duration-base: 250ms     /* Hover, focus, small reveals */
--duration-slow: 400ms     /* Surfaces in motion, entrances */
```

### Principles Applied
1. **Purposeful**: Every animation has a reason (feedback, state change, guidance)
2. **Smooth**: Always `cubic-bezier(0.2, 0.8, 0.2, 1)` — never linear
3. **Quick**: 200-400ms keeps interactions snappy without feeling instant
4. **Restrained**: One animation per element; no excessive motion
5. **Accessible**: All animations respect `prefers-reduced-motion`

---

## Component Enhancements

### 1. Button Interactions

#### Before
- Hover: Simple color change + shadow
- Active: Settled back to rest (via globals.css)
- Focus: Outline ring (2px)

#### After (Enhanced)
```
Hover State:
  - Background darkens (burgundy-700)
  - Shadow deepens: 0 10px 25px rgba(107, 148, 79, 0.25)
  - Lift: translateY(-2px) — smooth, responsive
  - Duration: 250ms with ease-standard curve
  
Active State (Press Feedback):
  - Settle back to rest: translateY(0)
  - Shadow reduces: 0 4px 12px rgba(107, 148, 79, 0.15)
  - Duration: 150ms — quick press response
  
Focus-Visible (Keyboard Navigation):
  - Ring: 3px solid burgundy-600
  - Offset: 4px
  - Combined with hover shadow for clarity
  
Disabled State:
  - Opacity: 0.6
  - Cursor: not-allowed
  - No pointer events
```

**Demo Usage** (EnhancedButton.tsx):
```jsx
<EnhancedButton variant="primary" size="md" onClick={handleClick}>
  Schedule a Call
</EnhancedButton>
```

---

### 2. Form Input Focus States

#### Before
- Focus: Border color burgundy-500 + sage glow (3px ring)
- Background: Light sage tint
- No visual hierarchy between rest/focus

#### After (Enhanced)
```
Focus State:
  - Border: 1.5px solid burgundy-500
  - Background: rgba(248, 250, 247, 0.8) — subtle lift
  - Box-shadow (layered):
    • Outer glow: 0 0 0 4px rgba(157, 187, 141, 0.2)
    • Inset highlight: inset 0 2px 4px rgba(157, 187, 141, 0.1)
    • Inset depth: inset 0 -2px 4px rgba(255, 255, 255, 0.5)
  - Duration: 250ms — calm, intentional transition
  
Error State:
  - Border: 1.5px solid alert-500 (muted brick)
  - Background: var(--alert-50) — warm tint
  - Box-shadow: 0 0 0 4px rgba(171, 89, 67, 0.15)
  - Never jarring; colour + icon + text carry meaning
  
Success State:
  - Border: 1.5px solid burgundy-600
  - Background: rgba(248, 250, 247, 0.5)
  - Checkmark (✓) animates in with ease
```

**Demo Usage** (EnhancedFormInput.tsx):
```jsx
<EnhancedFormInput
  label="Your Email"
  name="email"
  value={email}
  onChange={handleChange}
  onBlur={handleBlur}
  error={emailError}
  success={emailValid}
  successMessage="Email confirmed"
/>
```

---

### 3. Success Animations

#### Checkmark Entrance
```
@keyframes successCheckmark {
  0% {
    opacity: 0;
    transform: scale(0.5) rotateZ(-45deg);
  }
  50% {
    transform: scale(1.1) rotateZ(0deg);  /* Subtle bounce */
  }
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0deg);
  }
}
Duration: 250ms (--duration-base)
Easing: cubic-bezier(0.2, 0.8, 0.2, 1)
```

**Visual Effect**: The checkmark scales up from a tiny rotated state, overshoots slightly, then settles. Feels delightful without being distracting.

#### Success Message Fade
```
@keyframes successMessageFadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
Duration: 250ms
```

**Visual Effect**: Message slides up gently while fading in. Draws attention without jarring.

---

### 4. Card Hover States

#### Before
- Hover: Shadow deepening only
- Focus: No visible focus ring

#### After (Enhanced)
```
Hover State:
  - Transform: translateY(-4px) — lift effect
  - Shadow: 0 20px 40px rgba(63, 57, 53, 0.12)
  - Duration: 250ms
  - Arrow nudge animation on .explore-arrow child (4px right)
  
Focus-Visible:
  - Outline: 2px solid burgundy-600
  - Offset: 2px
  - Respects keyboard navigation
```

**Demo Usage** (EnhancedCard.tsx):
```jsx
<EnhancedCard hoverable href="/perinatal">
  <div style={{ fontSize: '3.5rem' }}>🤰</div>
  <h3>Perinatal Mental Health</h3>
  <p>Pregnancy loss, infertility, postpartum anxiety...</p>
  <span className="explore-arrow">Find Your Path →</span>
</EnhancedCard>
```

---

### 5. Form Field Error Messages

#### Animation
```
@keyframes errorMessageSlide {
  from {
    opacity: 0;
    max-height: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    max-height: 200px;
    transform: translateY(0);
  }
}
Duration: 150ms (--duration-fast) — quick feedback
```

**Visual Effect**: Error message slides up and fades in. No jarring pop; feels like content appearing naturally.

---

### 6. Form Step Transitions

For multi-step forms (like BookingForm), step changes animate smoothly:

```
Entering Step:
  @keyframes stepEnterFromRight {
    from {
      opacity: 0;
      transform: translateX(12px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  Duration: 250ms

Exiting Step:
  @keyframes stepExitToLeft {
    from { opacity: 1; transform: translateX(0); }
    to { opacity: 0; transform: translateX(-12px); }
  }
  Duration: 150ms
```

**Visual Effect**: New step slides in from the right, old step slides out to the left. Creates a sense of forward progress.

---

## File Structure

```
app/
  globals.css                           # Base motion system + button/form styles
  micro-interactions.css                # Original micro-interactions (preserved)
  micro-interactions-enhanced.css       # NEW: Enhanced animations & states
  
components/
  EnhancedComponents.tsx                # NEW: Reusable component library
    - EnhancedFormInput
    - EnhancedButton
    - EnhancedCard
    - EnhancedTextarea
  
  BookingForm.tsx                       # Existing form (ready for EnhancedFormInput)
  NicheGrid.tsx                         # Ready for EnhancedCard wrapper
```

---

## Integration Guide

### Step 1: Import Enhanced CSS
Add to your layout or page:

```tsx
import '@/app/micro-interactions-enhanced.css'
```

### Step 2: Use Enhanced Components

#### In BookingForm.tsx
```tsx
import { EnhancedFormInput, EnhancedButton, EnhancedTextarea } from '@/components/EnhancedComponents'

export default function BookingForm() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [emailValid, setEmailValid] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    // Validate...
  }

  return (
    <>
      <EnhancedFormInput
        label="Email Address"
        name="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={() => validateEmail()}
        error={emailError}
        success={emailValid}
        successMessage="Email confirmed"
        required
      />
      
      <EnhancedButton type="submit" variant="primary">
        Continue
      </EnhancedButton>
    </>
  )
}
```

#### In NicheGrid.tsx
```tsx
import { EnhancedCard } from '@/components/EnhancedComponents'

export default function NicheGrid() {
  return (
    <div style={{ display: 'grid', gap: '2rem' }}>
      {specialties.map((specialty) => (
        <EnhancedCard key={specialty.slug} href={specialty.link} hoverable>
          <div style={{ fontSize: '3.5rem' }}>{specialty.icon}</div>
          <h3>{specialty.title}</h3>
          <p>{specialty.description}</p>
          <span className="explore-arrow">Find Your Path →</span>
        </EnhancedCard>
      ))}
    </div>
  )
}
```

---

## Accessibility & Performance

### Reduced Motion Support
All animations include a `@media (prefers-reduced-motion: reduce)` block:
- Animations disabled
- Transitions removed
- Transforms set to none
- Content remains visible and interactive

### Performance Considerations
1. **GPU Acceleration**: `transform` and `opacity` use browser's GPU
2. **No Layout Thrashing**: Only `box-shadow`, `transform`, `opacity` animate
3. **Short Durations**: 150-400ms prevents long waits
4. **No Infinite Loops**: Only shimmer (loading state) repeats, and it's subtle

### WCAG Compliance
- Touch targets: 48px minimum (56px on mobile)
- Focus rings: 2-3px, 4px offset
- Contrast: All colours meet 4.5:1 AA standard
- Keyboard navigation: All interactive elements are focusable

---

## Testing Checklist

- [ ] Button hover: Smooth lift + shadow (250ms)
- [ ] Button active: Press feedback (settles to rest)
- [ ] Button focus-visible: Clear ring (keyboard only)
- [ ] Form input focus: Glow + border shift (250ms)
- [ ] Form input error: Border + background + message (150ms slide)
- [ ] Form input success: Checkmark scales in (250ms)
- [ ] Card hover: Lift + shadow (250ms)
- [ ] Card focus-visible: Outline ring (keyboard only)
- [ ] Step transitions: Slide in/out with fade (250ms enter, 150ms exit)
- [ ] Reduced motion: All animations disabled when prefers-reduced-motion
- [ ] Mobile: Touch targets 56px on mobile (confirmed in globals.css)
- [ ] Browser support: Works in modern Chrome, Firefox, Safari, Edge

---

## Before/After Summary

| Element | Before | After |
|---------|--------|-------|
| **Button Hover** | Color + shadow | Lift (-2px) + deepened shadow (250ms) |
| **Button Active** | Settles | Fast press feedback (150ms) |
| **Button Focus** | 2px ring | 3px ring + shadow combo |
| **Form Focus** | Border + 3px ring | Layered glow + inset depth (250ms) |
| **Form Error** | Instant appear | Slide-in animation (150ms) |
| **Form Success** | None | Checkmark scales in (250ms) |
| **Card Hover** | Shadow only | Lift (-4px) + shadow (250ms) |
| **Card Focus** | None | 2px ring for keyboard |
| **Form Step** | Instant swap | Slide in/out animation (250ms/150ms) |

---

## Motion System Recap

All enhanced animations use **three core properties**:
1. **Easing**: Always `cubic-bezier(0.2, 0.8, 0.2, 1)` — smooth, natural
2. **Duration**: 150ms (fast), 250ms (base), 400ms (slow)
3. **Properties**: Only `transform`, `opacity`, `box-shadow` (GPU-accelerated)

Result: Snappy, polished, accessible UX that feels intentional and calm.

---

## Future Enhancements

- [ ] Loading skeleton animations
- [ ] Multi-step form progress bar animation
- [ ] Testimonial carousel transitions
- [ ] Image fade-in on scroll (IntersectionObserver)
- [ ] Toast notification entrance/exit
- [ ] Modals with scrim fade + scale entrance
