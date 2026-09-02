# Rainuka Therapy Design System

**Version:** 1.0  
**Last Updated:** September 2024  
**Owner:** Rainuka Therapy  
**Status:** Reference Guide  

---

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing System](#spacing-system)
4. [Shadows & Depth](#shadows--depth)
5. [Border Radius](#border-radius)
6. [Animations & Transitions](#animations--transitions)
7. [Component Patterns](#component-patterns)
8. [Responsive Breakpoints](#responsive-breakpoints)
9. [Design Tokens Reference](#design-tokens-reference)
10. [Quality Assurance Checklist](#quality-assurance-checklist)

---

## Color System

### Overview

Rainuka's color palette uses **OKLCH color space** for perceptually uniform, modern color management. The system avoids raw Tailwind defaults, prioritizing intentional, semantic, accessible colors that support therapeutic and inclusive messaging.

### Primary Brand Colors

#### Burgundy (Primary Brand Color)
The primary color representing Rainuka's grounded, sophisticated identity.

```css
:root {
  --burgundy-50: #f7f3f4;
  --burgundy-100: #ede3e5;
  --burgundy-200: #d9bfc5;
  --burgundy-300: #c19b9f;
  --burgundy-400: #a8707f;
  --burgundy-500: #8a4f61;
  --burgundy-600: #6d3a47;    /* Primary brand color */
  --burgundy-700: #58303a;
  --burgundy-800: #482a32;
  --burgundy-900: #3c222a;
}
```

**OKLCH Values:**
- **Burgundy-600:** `oklch(0.42 0.12 10)` — primary CTAs, focus states, brand accents
- **Burgundy-900:** `oklch(0.25 0.06 10)` — darkest text, high contrast

**Usage:**
- Primary call-to-action buttons
- Focus rings and focus affordances
- Link colors (underlines, hover states)
- Section accent borders
- Primary headings (h1, h2)

---

### Neutrals

#### Warm Gray (Brand Neutral / Secondary)
Body text, neutral sections, structured information.

```css
:root {
  --warm-gray-50: #faf9f7;     /* Neutral background */
  --warm-gray-100: #ede8e3;
  --warm-gray-200: #ddd4cc;
  --warm-gray-300: #c9b8ac;
  --warm-gray-400: #ab9c91;
  --warm-gray-500: #8f8279;
  --warm-gray-600: #7a6f68;
  --warm-gray-700: #5e534a;    /* Body text, secondary headings */
  --warm-gray-800: #4c443e;
  --warm-gray-900: #3f3935;    /* High contrast text */
}
```

**OKLCH Values:**
- **Warm Gray-700:** `oklch(0.33 0 0)` — body text, h6 headings
- **Warm Gray-50:** `oklch(0.98 0 0)` — neutral page backgrounds

**Usage:**
- Body text (primary text color)
- Secondary headings
- Neutral card backgrounds
- Borders and dividers
- Footer text

#### Cream (Warm White)
Soft, inviting backgrounds for sections and cards.

```css
:root {
  --cream-50: #fdfbf8;
  --cream-100: #f5f0eb;
  --cream-200: #ebe3da;
  --cream-300: #ded3c6;
}
```

**Usage:**
- Section backgrounds (Hero, CTA sections)
- Card fill backgrounds
- Soft contrast layers

#### Deep Gray (Secondary Contrast)
Grounded, professional color for secondary actions and calm messaging.

```css
:root {
  --deep-gray-50: #f5f5f5;
  --deep-gray-100: #e0e0e0;
  --deep-gray-200: #c8c8c8;
  --deep-gray-300: #b0b0b0;
  --deep-gray-400: #909090;
  --deep-gray-500: #6b6b6b;
  --deep-gray-600: #555555;    /* Secondary contrast */
  --deep-gray-700: #424242;
  --deep-gray-800: #333333;
  --deep-gray-900: #1f1f1f;
}
```

**Usage:**
- Secondary buttons
- Inactive states
- Secondary navigation
- Neutral accents

---

### Persona Accent Colors

Five muted, low-chroma persona colors provide differentiation while maintaining therapeutic warmth and accessibility.

#### Sea Blue (Calming, Cool Accent)
Evokes trust, calm, and clarity. Used for therapeutic contexts requiring emotional safety.

```css
:root {
  --sea-blue-50: #f0f7fa;
  --sea-blue-100: #dde9f0;
  --sea-blue-200: #b8d8e3;
  --sea-blue-300: #8ec0d3;
  --sea-blue-400: #5fa5c0;
  --sea-blue-500: #3d8aa8;
  --sea-blue-600: #2d7390;     /* Accent primary */
  --sea-blue-700: #1f5a73;
  --sea-blue-800: #14435b;
  --sea-blue-900: #0c2d43;
}
```

**OKLCH:** `oklch(0.63 0.12 200)`  
**Usage:** Anxiety, depression, trauma, calming messaging

---

#### Blue Herring (Subtle Teal-Blue)
Subtle, sophisticated teal for contemporary, modern therapeutic contexts.

```css
:root {
  --blue-herring-50: #f2f9f8;
  --blue-herring-100: #ddf1f0;
  --blue-herring-200: #b3e0dd;
  --blue-herring-300: #89ccc8;
  --blue-herring-400: #56b3ad;
  --blue-herring-500: #3d9a94;
  --blue-herring-600: #2d827f;
  --blue-herring-700: #1f6a68;
  --blue-herring-800: #125250;
  --blue-herring-900: #0a3a38;
}
```

**Usage:** Tech/modern therapy contexts, LGBTQ+ affirmation

---

#### Clay (Warmth & Invitation)
Warm, inviting, tender warmth. Primary CTA accent for couples, perinatal, relationship therapy.

```css
:root {
  --clay-50: #fdf7f4;
  --clay-100: #f7e9e1;
  --clay-200: #eed6c8;
  --clay-300: #e3b79f;
  --clay-400: #dd9877;
  --clay-500: #d97757;
  --clay-600: #c96547;         /* CTA warmth, couples & perinatal */
  --clay-700: #a5503a;
  --clay-800: #83402f;
}
```

**Usage:** Couples therapy, perinatal therapy, warm CTAs, testimonials

---

#### Dusk (Steady, Grounded)
Cool, stable, and professional. For men's therapy, ADHD, grief, and informational notes.

```css
:root {
  --dusk-50: #f5f7fa;
  --dusk-100: #e6ecf3;
  --dusk-200: #ccd8e5;
  --dusk-300: #a8bcd1;
  --dusk-400: #7f9bb8;
  --dusk-500: #61809f;
  --dusk-600: #4d6a86;         /* Grounded, men's, ADHD, grief */
  --dusk-700: #3f566d;
  --dusk-800: #334458;
}
```

**Usage:** Men's therapy, ADHD, grief work, informational boxes

---

#### Honey (Ochre Warmth)
Ochre warmth suggesting autumn, harvest, caution. For career, seasonal, and cautionary messaging.

```css
:root {
  --honey-50: #fdf9f1;
  --honey-100: #f7eedc;
  --honey-200: #eedfc0;
  --honey-300: #e0c79a;
  --honey-400: #d4a574;
  --honey-500: #c08f5c;        /* Seasonal, career, caution */
  --honey-600: #a3764a;
  --honey-700: #84603c;
  --honey-800: #684b30;
}
```

**Usage:** Career counseling, seasonal content, warnings, cautions

---

#### Blush (Tender Mauve)
Tender, soft mauve for perinatal, couples, testimonials—gentle, inclusive warmth.

```css
:root {
  --blush-50: #fcf6f6;
  --blush-100: #f4e6e6;
  --blush-200: #e8cecd;
  --blush-300: #d6adac;
  --blush-400: #c08e8d;
  --blush-500: #a87372;
  --blush-600: #8c5c5b;         /* Perinatal, couples, testimonials */
  --blush-700: #714a49;
}
```

**Usage:** Perinatal therapy, couples therapy, testimonials, tender messaging

---

### Semantic Colors

#### Alert (Muted Brick)
The **only "red"** in the system—muted brick for errors, warnings, and alerts.

```css
:root {
  --alert-50: #fcf5f3;
  --alert-100: #f5e3dd;
  --alert-200: #e9c7bd;
  --alert-300: #d6a294;
  --alert-400: #c07a68;
  --alert-500: #ab5943;
  --alert-600: #934833;         /* Error, warning, alert */
  --alert-700: #763a2a;
}
```

**OKLCH:** `oklch(0.40 0.12 20)`

**Usage:**
- Form validation errors
- Warning banners
- Alert states
- Confirmation destructive actions

---

### Color Accessibility Requirements

**WCAG AA Compliance (Minimum 4.5:1 Contrast Ratio):**

| Use Case | Color | Contrast | Status |
|----------|-------|----------|--------|
| Body text on warm-gray-50 bg | warm-gray-700 | 8.2:1 | ✅ AAA |
| H1 on cream background | burgundy-600 | 6.1:1 | ✅ AAA |
| CTA button text (white on burgundy-600) | White on burgundy-600 | 7.3:1 | ✅ AAA |
| Secondary text on page bg | warm-gray-600 | 6.8:1 | ✅ AAA |
| Alert on alert-50 background | alert-600 | 5.8:1 | ✅ AAA |

**Design Rule:** Never use colors below 4.5:1 contrast for text. Test all new color combinations.

---

## Typography

### Font Stack

#### Sans-Serif (Body, UI)
**Primary Font: Inter**
- Clean, modern, highly readable
- Excellent for body text and UI
- Google Fonts imported via CSS custom property

```css
:root {
  --font-inter: 'Inter', system-ui, '-apple-system', sans-serif;
}

body {
  font-family: var(--font-inter);
}
```

**Fallback Chain:** `Inter → system-ui → -apple-system → sans-serif`

#### Serif (Headings, Branding)
**Secondary Font: Merriweather**
- Warm, sophisticated, distinguished
- Excellent for h1, h2 headings and testimonials
- Google Fonts imported via CSS custom property

```css
:root {
  --font-merriweather: 'Merriweather', Georgia, serif;
}

h1, h2, .heading-serif {
  font-family: var(--font-merriweather);
}
```

**Fallback Chain:** `Merriweather → Georgia → serif`

#### Monospace (Code)
**Optional: Fira Code**
- Modern, readable monospace
- Use only for code blocks, terminal output, technical content

```css
:root {
  --font-monospace: 'Fira Code', 'Courier New', monospace;
}

code, pre {
  font-family: var(--font-monospace);
}
```

---

### Typography Scale

| Role | Font Size | Line Height | Letter Spacing | Font Weight | Color | Usage |
|------|-----------|-------------|-----------------|------------|-------|-------|
| **h1** | 2.75rem (44px) | 1.2 | -0.02em | 700 (bold) | burgundy-600 | Page titles, hero sections |
| **h2** | 2.125rem (34px) | 1.3 | -0.01em | 700 (bold) | burgundy-600 | Section headings |
| **h3** | 1.625rem (26px) | 1.4 | 0 | 600 (semibold) | burgundy-600 | Subsection headings |
| **h4** | 1.25rem (20px) | 1.5 | 0 | 600 (semibold) | warm-gray-700 | Card titles, feature heads |
| **h5** | 1.125rem (18px) | 1.5 | 0 | 600 (semibold) | warm-gray-700 | Smaller subsection heads |
| **h6** | 1rem (16px) | 1.6 | 0 | 600 (semibold) | warm-gray-700 | Label headings |
| **body** | 1rem (16px) | 1.6 | 0 | 400 (regular) | warm-gray-700 | Paragraphs, main text |
| **small** | 0.875rem (14px) | 1.5 | 0 | 400 (regular) | warm-gray-600 | Captions, metadata |
| **xs** | 0.75rem (12px) | 1.4 | 0 | 400 (regular) | warm-gray-600 | Footnotes, tiny labels |

**CSS Implementation:**

```css
h1 {
  font-size: 2.75rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: var(--burgundy-600);
}

body {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--warm-gray-700);
}
```

### Font Weight System

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, paragraphs |
| Semibold | 600 | Headings (h3–h6), strong emphasis |
| Bold | 700 | Main headings (h1, h2), CTAs, strong text |

---

## Spacing System

### Base Unit: 0.5rem (8px)

All spacing values are multiples of **0.5rem (8px)** for consistent rhythm and alignment.

### Spacing Scale

```css
:root {
  --space-1: 0.5rem;    /* 8px */
  --space-2: 1rem;      /* 16px */
  --space-3: 1.5rem;    /* 24px */
  --space-4: 2rem;      /* 32px */
  --space-5: 2.5rem;    /* 40px */
  --space-6: 3rem;      /* 48px */
  --space-7: 3.5rem;    /* 56px */
  --space-8: 4rem;      /* 64px */
  --space-10: 5rem;     /* 80px */
  --space-12: 6rem;     /* 96px */
  --space-16: 8rem;     /* 128px */
}
```

### Recommended Usage

| Scale | px | Usage |
|-------|----|----|
| --space-1 | 8px | Tight spacing (icon gaps, small inline padding) |
| --space-2 | 16px | Button padding, card internal spacing |
| --space-3 | 24px | Section padding, list item spacing |
| --space-4 | 32px | Component margins, container padding |
| --space-5 | 40px | Generous internal padding |
| --space-6 | 48px | Section top/bottom padding |
| --space-7 | 56px | Large section spacing |
| --space-8 | 64px | Hero section padding |
| --space-10 | 80px | Major section gaps |
| --space-12 | 96px | Page section separation |
| --space-16 | 128px | Full-screen sections, hero-to-content gap |

### Layout Rhythm

**Vertical Section Spacing:**

```css
:root {
  --section-padding-y: var(--space-8);    /* 64px top/bottom */
  --section-padding-x: var(--space-6);    /* 48px left/right */
  --container-max-width: 1200px;
}
```

**Card & Component Padding:**

```css
.card {
  padding: var(--space-4);  /* 32px */
}

.card.dense {
  padding: var(--space-2);  /* 16px */
}

.card.spacious {
  padding: var(--space-6);  /* 48px */
}
```

---

## Shadows & Depth

### Shadow System

Subtle, professional shadows convey depth without heaviness. Uses RGBA black with low opacity.

```css
:root {
  /* Elevation 1: Hover states, slight lift */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  
  /* Elevation 2: Cards, modals, moderate depth */
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  /* Elevation 3: Dropdowns, tooltips, prominent UI */
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  /* Elevation 4: Floating action buttons, high emphasis */
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  /* Elevation 5: Modals, overlays, maximum emphasis */
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

### Shadow Usage Matrix

| Component | Shadow | Interaction |
|-----------|--------|-------------|
| Cards (default) | --shadow-md | Hover: --shadow-lg |
| Buttons (secondary) | none | Hover: --shadow-sm |
| Dropdowns | --shadow-lg | — |
| Modals | --shadow-2xl | — |
| Floating buttons | --shadow-xl | Hover: --shadow-2xl |
| Form inputs | --shadow-sm | Focus: --shadow-md |
| Navigation (sticky) | --shadow-md | — |

**CSS Example:**

```css
.card {
  box-shadow: var(--shadow-md);
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: var(--shadow-lg);
}

.modal {
  box-shadow: var(--shadow-2xl);
}
```

---

## Border Radius

### Radius Scale

```css
:root {
  /* Subtle: slight rounding for modern look */
  --radius-sm: 0.375rem;    /* 6px */
  
  /* Standard: default cards, buttons, inputs */
  --radius-md: 0.625rem;    /* 10px */
  
  /* Relaxed: generous rounding, organic feel */
  --radius-lg: 0.875rem;    /* 14px */
  
  /* Full: circles, pills */
  --radius-full: 9999px;    /* Completely rounded */
}
```

### Radius Usage

| Element | Radius | Rationale |
|---------|--------|-----------|
| Buttons | --radius-md (10px) | Clear CTA affordance |
| Cards | --radius-md (10px) | Professional, consistent |
| Form inputs | --radius-sm (6px) | Subtle, legible |
| Images in cards | --radius-lg (14px) | Softer, more inviting |
| Badges | --radius-full | Pill-shaped, clear |
| Avatars | --radius-full | Personal, rounded |
| Large sections | --radius-lg (14px) | Feature blocks, hero sections |

**CSS Implementation:**

```css
.btn {
  border-radius: var(--radius-md);
}

.card {
  border-radius: var(--radius-md);
}

.avatar {
  border-radius: var(--radius-full);
}

img {
  border-radius: var(--radius-lg);
}
```

---

## Animations & Transitions

### Principles

- **Purposeful:** Every animation has a reason (feedback, guidance, delight)
- **Smooth:** Use `ease` or `ease-in-out`, never `linear` for natural motion
- **Quick:** Keep most interactions 200–400ms
- **Restrained:** One animation per element usually; no competing motions
- **Accessible:** Respect `prefers-reduced-motion` for vestibular sensitivity

### Timing Functions

```css
:root {
  /* Easing for in/out, interactions */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  
  /* Bounce for playful micro-interactions */
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Duration Tiers

```css
:root {
  /* Micro-interactions (feedback) */
  --duration-fast: 150ms;
  
  /* Standard transitions */
  --duration-base: 200ms;
  
  /* Deliberate, smooth transitions */
  --duration-slow: 300ms;
  
  /* Animations (page loads, major transitions) */
  --duration-animation: 400ms;
}
```

### Common Animations

#### Fade In (Page Load)

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn var(--duration-animation) var(--ease-out) forwards;
}
```

#### Slide Up (Content Entry)

```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp var(--duration-animation) var(--ease-out) forwards;
}
```

#### Button Hover (Scale & Color)

```css
.btn {
  transition: all var(--duration-base) var(--ease-out);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

#### Link Underline (Gradual Reveal)

```css
a {
  position: relative;
  text-decoration: none;
  color: var(--burgundy-600);
}

a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--burgundy-600);
  transition: width var(--duration-base) var(--ease-out);
}

a:hover::after {
  width: 100%;
}
```

### Reduced Motion Respect

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Component Patterns

### Buttons

#### Primary Button (CTA)

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: var(--burgundy-600);
  color: white;
  font-weight: 600;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all var(--duration-base) var(--ease-out);
  text-decoration: none;
}

.btn-primary:hover {
  background: var(--burgundy-700);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--burgundy-600);
  outline-offset: 2px;
}
```

#### Secondary Button

```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: var(--warm-gray-700);
  border: 1px solid var(--warm-gray-300);
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--duration-base) var(--ease-out);
}

.btn-secondary:hover {
  background: var(--warm-gray-50);
  border-color: var(--warm-gray-400);
}

.btn-secondary:focus-visible {
  outline: 2px solid var(--warm-gray-700);
  outline-offset: 2px;
}
```

---

### Cards

#### Default Card

```css
.card {
  background: white;
  border: 1px solid var(--warm-gray-200);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-base) var(--ease-out);
}

.card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--warm-gray-300);
}

.card-header {
  margin-bottom: var(--space-3);
}

.card-body {
  color: var(--warm-gray-700);
  line-height: 1.6;
}

.card-footer {
  margin-top: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--warm-gray-100);
}
```

#### Testimonial Card

```css
.card-testimonial {
  background: linear-gradient(135deg, var(--blush-50) 0%, white 100%);
  border-left: 4px solid var(--blush-600);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.card-testimonial-quote {
  font-style: italic;
  color: var(--warm-gray-800);
  margin-bottom: var(--space-3);
  line-height: 1.8;
}

.card-testimonial-author {
  font-weight: 600;
  color: var(--burgundy-600);
}
```

---

### Form Inputs

#### Text Input / Textarea

```css
input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: var(--space-2);
  border: 1px solid var(--warm-gray-300);
  border-radius: var(--radius-sm);
  font-family: var(--font-inter);
  font-size: 1rem;
  line-height: 1.5;
  transition: all var(--duration-base) var(--ease-out);
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  outline: none;
  border-color: var(--burgundy-600);
  box-shadow: 0 0 0 3px rgba(109, 58, 71, 0.1);
}

input[type="text"]:disabled,
textarea:disabled {
  background: var(--warm-gray-50);
  color: var(--warm-gray-600);
  cursor: not-allowed;
}
```

#### Form Label

```css
label {
  display: block;
  margin-bottom: var(--space-1);
  font-weight: 600;
  color: var(--warm-gray-700);
  font-size: 0.875rem;
}

label[aria-required="true"]::after {
  content: ' *';
  color: var(--alert-600);
}
```

---

### Navigation

#### Main Navigation Bar

```css
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-6);
  background: white;
  border-bottom: 1px solid var(--warm-gray-100);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-sm);
}

nav a {
  color: var(--warm-gray-700);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--duration-base) var(--ease-out);
  padding: var(--space-2);
}

nav a:hover,
nav a.active {
  color: var(--burgundy-600);
}
```

---

### Hero Section

```css
.hero {
  background: linear-gradient(135deg, var(--cream-50) 0%, var(--warm-gray-50) 100%);
  padding: var(--space-16) var(--space-6) var(--space-12);
  text-align: center;
}

.hero h1 {
  color: var(--burgundy-600);
  font-size: 2.75rem;
  line-height: 1.2;
  margin-bottom: var(--space-4);
}

.hero p {
  color: var(--warm-gray-700);
  font-size: 1.125rem;
  margin-bottom: var(--space-6);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero .btn {
  margin-top: var(--space-4);
}
```

---

### Alert / Notification

```css
.alert {
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  border-left: 4px solid;
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.alert.alert-info {
  background: var(--sea-blue-50);
  border-color: var(--sea-blue-600);
  color: var(--sea-blue-900);
}

.alert.alert-warning {
  background: var(--honey-50);
  border-color: var(--honey-500);
  color: var(--honey-900);
}

.alert.alert-error {
  background: var(--alert-50);
  border-color: var(--alert-600);
  color: var(--alert-900);
}

.alert.alert-success {
  background: var(--sea-blue-50);
  border-color: var(--sea-blue-600);
  color: var(--sea-blue-900);
}
```

---

## Responsive Breakpoints

### Tailwind Breakpoint Strategy

```css
/* Mobile First: start with mobile styles, progressively enhance */
@media (min-width: 640px) {
  /* sm: Small devices (tablets) */
}

@media (min-width: 768px) {
  /* md: Medium devices (small laptops) */
}

@media (min-width: 1024px) {
  /* lg: Large devices (desktop) */
}

@media (min-width: 1280px) {
  /* xl: Extra large screens */
}

@media (min-width: 1536px) {
  /* 2xl: Ultra-wide screens */
}
```

### Recommended Usage

| Breakpoint | Range | Typical Device | Use Case |
|-----------|-------|---|----------|
| None | < 640px | Phone | Primary mobile layout |
| sm | 640px–768px | Small tablet | Slightly larger phone |
| md | 768px–1024px | Tablet / iPad | Two-column layouts |
| lg | 1024px–1280px | Desktop / Laptop | Full features enabled |
| xl | 1280px+ | Large monitor | Maximum width content |
| 2xl | 1536px+ | Ultra-wide | Full-screen layouts |

### Layout Grid

**Desktop (lg+):** 12-column grid, 32px gaps, 1200px max-width  
**Tablet (md):** 8-column grid, 24px gaps, full width  
**Mobile (sm):** 4-column grid, 16px gaps, full width  

---

## Design Tokens Reference

### Complete CSS Custom Properties

```css
:root {
  /* ========== COLORS ========== */
  /* Burgundy Primary */
  --burgundy-50: #f7f3f4;
  --burgundy-100: #ede3e5;
  --burgundy-200: #d9bfc5;
  --burgundy-300: #c19b9f;
  --burgundy-400: #a8707f;
  --burgundy-500: #8a4f61;
  --burgundy-600: #6d3a47;
  --burgundy-700: #58303a;
  --burgundy-800: #482a32;
  --burgundy-900: #3c222a;

  /* Warm Gray Neutral */
  --warm-gray-50: #faf9f7;
  --warm-gray-100: #ede8e3;
  --warm-gray-200: #ddd4cc;
  --warm-gray-300: #c9b8ac;
  --warm-gray-400: #ab9c91;
  --warm-gray-500: #8f8279;
  --warm-gray-600: #7a6f68;
  --warm-gray-700: #5e534a;
  --warm-gray-800: #4c443e;
  --warm-gray-900: #3f3935;

  /* Cream Soft White */
  --cream-50: #fdfbf8;
  --cream-100: #f5f0eb;
  --cream-200: #ebe3da;
  --cream-300: #ded3c6;

  /* Deep Gray */
  --deep-gray-50: #f5f5f5;
  --deep-gray-100: #e0e0e0;
  --deep-gray-200: #c8c8c8;
  --deep-gray-300: #b0b0b0;
  --deep-gray-400: #909090;
  --deep-gray-500: #6b6b6b;
  --deep-gray-600: #555555;
  --deep-gray-700: #424242;
  --deep-gray-800: #333333;
  --deep-gray-900: #1f1f1f;

  /* Persona Colors */
  --sea-blue-50: #f0f7fa;
  --sea-blue-600: #2d7390;
  --blue-herring-600: #2d827f;
  --clay-600: #c96547;
  --dusk-600: #4d6a86;
  --honey-500: #c08f5c;
  --blush-600: #8c5c5b;

  /* Semantic */
  --alert-600: #934833;

  /* ========== TYPOGRAPHY ========== */
  --font-inter: 'Inter', system-ui, '-apple-system', sans-serif;
  --font-merriweather: 'Merriweather', Georgia, serif;
  --font-monospace: 'Fira Code', 'Courier New', monospace;

  /* ========== SPACING ========== */
  --space-1: 0.5rem;    /* 8px */
  --space-2: 1rem;      /* 16px */
  --space-3: 1.5rem;    /* 24px */
  --space-4: 2rem;      /* 32px */
  --space-5: 2.5rem;    /* 40px */
  --space-6: 3rem;      /* 48px */
  --space-7: 3.5rem;    /* 56px */
  --space-8: 4rem;      /* 64px */
  --space-10: 5rem;     /* 80px */
  --space-12: 6rem;     /* 96px */
  --space-16: 8rem;     /* 128px */

  /* ========== SHADOWS ========== */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  /* ========== RADIUS ========== */
  --radius-sm: 0.375rem;   /* 6px */
  --radius-md: 0.625rem;   /* 10px */
  --radius-lg: 0.875rem;   /* 14px */
  --radius-full: 9999px;

  /* ========== EASING ========== */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

  /* ========== DURATIONS ========== */
  --duration-fast: 150ms;
  --duration-base: 200ms;
  --duration-slow: 300ms;
  --duration-animation: 400ms;
}
```

---

## Quality Assurance Checklist

Use this checklist during design reviews and before deployment.

### Visual Design

- [ ] All text uses approved color palette (burgundy, warm-gray, persona colors)
- [ ] No raw Tailwind palette colors appear (no raw blue, emerald, rose, slate, etc.)
- [ ] Color contrast ratios meet WCAG AA (4.5:1 minimum for text)
- [ ] Headings follow typography scale (h1 > h2 > h3 hierarchy)
- [ ] Spacing uses 8px scale increments (space-1, space-2, etc.)
- [ ] All cards use --radius-md (10px) unless otherwise specified
- [ ] Button padding follows --space-2/--space-3/--space-4 guidelines
- [ ] Shadows applied correctly (sm for hover, md/lg for elevation)

### Responsive Design

- [ ] Mobile layout tested at 375px (iPhone SE width)
- [ ] Tablet layout tested at 768px (iPad breakpoint)
- [ ] Desktop layout tested at 1024px+ (full features)
- [ ] Touch targets are minimum 48×48px
- [ ] Text remains readable at all breakpoints
- [ ] Images scale proportionally
- [ ] No horizontal scrolling on mobile
- [ ] Navigation works on all screen sizes

### Accessibility (WCAG AA)

- [ ] Focus states visible on all interactive elements
- [ ] Links underlined or have sufficient color contrast
- [ ] Form labels clearly associated with inputs
- [ ] Error messages marked with `aria-required="true"`
- [ ] Icons have alt text or ARIA labels
- [ ] Color not the only method to convey information
- [ ] Videos have captions
- [ ] No auto-playing animations (respect prefers-reduced-motion)

### Typography

- [ ] Body text uses Inter (sans-serif) for readability
- [ ] Headings use Merriweather (serif) for distinction
- [ ] Line height is 1.6 for body, 1.2–1.4 for headings
- [ ] Line length is 45–75 characters for optimal readability
- [ ] Font sizes follow approved scale (h1 through small)
- [ ] Font weights are 400, 600, or 700 (no intermediate weights)

### Components

- [ ] Buttons have hover/active/focus states defined
- [ ] Cards have consistent padding (--space-4)
- [ ] Forms have clear labels and validation feedback
- [ ] Dropdowns, modals, tooltips have proper layering (z-index)
- [ ] Testimonials use blush-600 accent or gradient
- [ ] Alerts have semantic colors (info, warning, error, success)

### Performance & UX

- [ ] All CSS uses CSS custom properties (no magic numbers)
- [ ] Animations use prefixed motion with `prefers-reduced-motion`
- [ ] Transitions are 200–400ms (not too fast, not sluggish)
- [ ] Loading states are defined (spinners, skeletons)
- [ ] Error states are defined (validation messages, alerts)
- [ ] Success states provide feedback (toast, checkmark)
- [ ] No jank during hover/scroll on test devices
- [ ] Page loads without layout shift (CLS < 0.1)

### Inclusive Design

- [ ] Persona colors used appropriately (see [Persona Accent Colors](#persona-accent-colors))
- [ ] Content avoids gendered language (use "partner," "spouse," etc.)
- [ ] All therapy specialties have distinct visual identity
- [ ] Testimonials represent diverse backgrounds and experiences
- [ ] Imagery includes diverse representation

---

## Document Metadata

**Design System Owner:** Rainuka Therapy  
**Last Maintained:** September 2024  
**Next Review:** December 2024  
**Version:** 1.0  

For questions or updates to this guide, please contact the design team or open a GitHub issue in the rainuka-therapy repository.

---

**End of DESIGN_SYSTEM.md**
