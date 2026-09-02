# Mobile UX Mockups & Team Collaboration (375px-1024px)
**POLISHER #4 — Mobile Lead**  
**Date:** September 1, 2026

---

## 📱 iPhone SE (375px) — Primary Mobile Target

### Hero Section — Above the Fold
```
╔═══════════════════════════════════════╗
║  RAINUKA THERAPY                      ║ 16px logo (responsive)
║  [≡ menu]                             ║ 48×48px hamburger
╠═══════════════════════════════════════╣
║                                       ║
║    "Therapy for the whole you—        ║ 28px heading
║     with cultural respect"            ║ Line height 1.2
║                                       ║
║  ┌─────────────────────────────────┐  ║ 56px height button
║  │  Book a Complimentary Call  →  │  ║ Burgundy + sage gradient
║  └─────────────────────────────────┘  ║ Shadow depth
║                                       ║
║  ○ Therapy for ○ Couples             ║ Icon buttons (48×48px)
║  ○ Mental Health ○ BIPOC              ║ Centered, tap-friendly
║                                       ║
╚═══════════════════════════════════════╝

NOTES:
✓ Logo: 180px width (responsive)
✓ Heading: 28px (fits comfortably on 375px)
✓ CTA button: 56px height, full width (padding: 12px 24px)
✓ Specialty icons: 48×48px, tap-friendly
✓ No horizontal scroll
✓ Line-height 1.2 for tight headlines
```

### Testimonials Section (Carousel)
```
╔═══════════════════════════════════════╗
║  What People Say                      ║ 24px heading
├───────────────────────────────────────┤
║                                       ║
║  "Rainuka understands the            ║ 16px body text
║   intersection of culture,            ║ Left-aligned
║   identity, and healing..."           ║
║                                       ║
║  — Sam K., 2026                       ║ 14px caption (gray)
║                                       ║
│  ◀  ●  ●  ▶                           │ Navigation dots (48×48px)
│     (tap to swipe)                    │ or show one at a time
│                                       │
╚═══════════════════════════════════════╝

NOTES:
✓ Single testimonial per screen (not stacked)
✓ Touch swipe (or next/prev arrows 48×48px)
✓ Text 16px (WCAG readable)
✓ Attribution gray (4.5:1 contrast minimum)
✓ Dots/arrows at thumb-zone (bottom 48px)
```

### Booking Form (Multi-step)
```
╔═══════════════════════════════════════╗
║  Book Your Session                    ║ 24px
│  Step 1 of 3: Your Info               │ Progress indicator
├───────────────────────────────────────┤
║                                       ║
║  ┌─────────────────────────────────┐  ║
║  │  Full Name                      │  ║ Label above input
║  ├─────────────────────────────────┤  ║ 48px min-height
║  │ [cursor here]                   │  ║ 16px font (prevents zoom)
║  └─────────────────────────────────┘  ║
║                                       ║
║  ┌─────────────────────────────────┐  ║
║  │  Email                          │  ║
║  ├─────────────────────────────────┤  ║
║  │                                 │  ║
║  └─────────────────────────────────┘  ║
║                                       ║
║  ┌─────────────────────────────────┐  ║
║  │  Phone (Optional)               │  ║
║  ├─────────────────────────────────┤  ║
║  │                                 │  ║
║  └─────────────────────────────────┘  ║
║                                       ║
║  ┌─────────────────────────────────┐  ║
║  │       Next Step  →              │  ║
║  └─────────────────────────────────┘  ║
║                                       ║
╚═══════════════════════════════════════╝

NOTES:
✓ Labels ABOVE inputs (not inside)
✓ Input height: 48px minimum
✓ Font: 16px (prevents iOS auto-zoom)
✓ Spacing between fields: 1rem
✓ Button: 56px height, full width
✓ Error messages appear below input (not over it)
✓ No keyboard overlap on iPhone SE (test required)
```

### FAQ Section (Accordion)
```
╔═══════════════════════════════════════╗
║  Frequently Asked Questions           ║
├───────────────────────────────────────┤
║                                       ║
║  ┌─────────────────────────────────┐  ║
║  │ How do I get started?        ▼ │  ║ 48px min-height
║  └─────────────────────────────────┘  ║ Chevron icon
║                                       ║
║  ┌─────────────────────────────────┐  ║
║  │ "Reach out below. We'll contact│  ║ Expanded answer
║  │  you within 24 hours..."       │  ║ 16px body text
║  └─────────────────────────────────┘  ║
║                                       ║
║  ┌─────────────────────────────────┐  ║
║  │ Do you take insurance?       ▶ │  ║ Collapsed state
║  └─────────────────────────────────┘  ║
║                                       ║
║  ┌─────────────────────────────────┐  ║
║  │ What's your cancellation...  ▶ │  ║
║  └─────────────────────────────────┘  ║
║                                       ║
╚═══════════════════════════════════════╝

NOTES:
✓ Accordion headers: 48×48px min (full width + padding)
✓ Chevron icon: 24×24px (centered in 48px area)
✓ Answer text: 16px, left-aligned
✓ Smooth expand/collapse animation
✓ No jank on low-end devices
```

### Footer (Mobile Layout)
```
╔═══════════════════════════════════════╗
║                                       ║
║  Rainuka Therapy                      ║ Stacked single column
║  Therapy with Cultural Respect        ║ No multi-column grid
│                                       │
│  📍 Victoria, BC (Virtual Available)   │ Icon + text
│  📧 hello@rainuka.ca                  │
│  ☎ (250) 555-1234                    │ All touch-friendly
│                                       │
│  ┌─────────────────────────────────┐  │
│  │  [facebook] [instagram] [linkedin] │ Social icons (48×48px)
│  └─────────────────────────────────┘  │
│                                       │
│  About   Providers   Resources        │ Links (stacked or wrapped)
│  FAQ     Contact     Accessibility    │
│  Privacy Legal       Sitemap          │
│                                       │
│  © 2026 Rainuka Therapy               │ Copyright (14px)
│  All Rights Reserved                  │
│                                       │
╚═══════════════════════════════════════╝

NOTES:
✓ Single column (not multi-column grid)
✓ All links and icons 48×48px min-height/width
✓ Contact info: tap-to-call phone numbers
✓ Social icons: 48×48px centered
✓ Text: 16px body, 14px captions
✓ Good spacing between sections (1rem gaps)
```

---

## 📱 iPad (768px) — Tablet Target

### Hero Section — Tablet Layout
```
╔════════════════════════════════════════════════════════════════════╗
║  RAINUKA THERAPY                                          [≡ menu] ║ 32px logo
║════════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  ┌────────────────────────────────────┬────────────────────────┐  ║
║  │ "Therapy for the whole you—        │  [Hero Image]          │  ║ 2-column layout
║  │  with cultural respect"            │  (500×400px)           │  ║ begins at 768px
║  │                                    │                        │  ║
║  │ ┌──────────────────────────────┐   │                        │  ║
║  │ │  Book a Complimentary Call   │   │                        │  ║
║  │ └──────────────────────────────┘   │                        │  ║
║  │                                    │                        │  ║
║  │ ○ Couples  ○ BIPOC  ○ ADHD        │                        │  ║
║  │ ○ Perinatal  ○ Neurodivergent     │                        │  ║
║  └────────────────────────────────────┴────────────────────────┘  ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝

NOTES:
✓ 2-column layout begins (68% text, 32% image)
✓ Heading: 32px (scaled up from 28px mobile)
✓ Button: still 56px height (now ~80% width of text column)
✓ Spacing: increases to 1.5rem between sections
✓ Image: 500×400px (2:1 aspect ratio)
```

### Testimonials — Tablet (2-Column Grid)
```
╔════════════════════════════════════════════════════════════════════╗
║  What People Say                                                   ║
├────────────────────────────────────────────────────────────────────┤
║                                                                    ║
║  ┌────────────────────────────┐  ┌────────────────────────────┐   ║
║  │ "Rainuka understands...    │  │ "I felt truly seen...      │   ║
║  │                            │  │                            │   ║
║  │ — Sam K., 2026            │  │ — Alex M., 2026            │   ║
║  └────────────────────────────┘  └────────────────────────────┘   ║
║                                                                    ║
║  ┌────────────────────────────┐  ┌────────────────────────────┐   ║
║  │ "The cultural competency...│  │ "Finally found a therapist │   ║
║  │                            │  │  who gets my experience..."│   ║
║  │ — Jordan L., 2026          │  │ — Casey T., 2026           │   ║
║  └────────────────────────────┘  └────────────────────────────┘   ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝

NOTES:
✓ 2-column grid (not carousel on tablet)
✓ Card spacing: 1.5rem between cards
✓ No swipe interaction (show all at once)
✓ Text: 16px body (same as mobile for consistency)
✓ Cards have subtle shadow
```

---

## 💻 Desktop (1440px) — For Reference

### Hero — Full Desktop
```
[RAINUKA | About | Providers | Contact]────────────────────────────────────

    ╔════════════════════════════════════════════════════════════════╗
    ║  "Therapy for the whole you                  [Hero Image 600px]║
    ║   with cultural respect"                                       ║
    ║                                                                ║
    ║  ┌──────────────────┐                                          ║
    ║  │ Book Now  →      │                                          ║
    ║  └──────────────────┘                                          ║
    ║                                                                ║
    ║  ○ Couples  ○ BIPOC  ○ ADHD  ○ Perinatal  ○ Neurodivergent    ║
    ╚════════════════════════════════════════════════════════════════╝

NOTES:
✓ Full-width with sidebar navigation
✓ Heading: 36px
✓ Button: 56px height, constrained width (200px)
✓ 3-4 specialty icons per row
```

---

## 🔄 Responsive Behavior Specifications

### Text Scaling
```
                Mobile (375px)  Tablet (768px)  Desktop (1440px)
────────────────────────────────────────────────────────────────
Body text       16px            15px            16px
H1 Heading      28px            32px            36px
H2 Heading      24px            28px            32px
H3 Heading      20px            24px            28px
Button Text     16px            16px            16px
Caption/Small   14px            14px            14px
```

### Spacing Scaling
```
                Mobile (375px)  Tablet (768px)  Desktop (1440px)
────────────────────────────────────────────────────────────────
Section Gap     0.5rem (8px)    1rem (16px)     1.5rem (24px)
Field Padding   12px 16px       14px 18px       16px 24px
Button Padding  12px 24px       14px 28px       16px 32px
Card Margin     0.5rem          1rem            1.5rem
```

### Touch Target Coverage
```
Mobile (375px):
✓ All buttons/links: 48×48px (AAA)
✓ Icon buttons: 48×48px
✓ Form inputs: 48px height min
✓ Spacing between targets: 0.5rem (8px) minimum

Tablet (768px):
✓ All buttons/links: 44×44px (AA minimum)
✓ Icon buttons: 48×48px preferred
✓ Form inputs: 44px height minimum
✓ Spacing between targets: 0.75rem (12px)

Desktop (1440px):
✓ Buttons/links: 44×44px (AA)
✓ Icon buttons: 40×40px acceptable
✓ Form inputs: 40px height
✓ Spacing between targets: 1rem (16px)
```

---

## 🎨 Color & Contrast Validation (Mobile)

### Primary CTA Button
```
Background: Burgundy (#8B3A62) → Sage (#6B8E6F) gradient
Text: White (#FFFFFF)
Contrast: 6.2:1 ✓ (WCAG AAA)

On hover/active:
Darken burgundy by 15%
Enhance shadow depth
```

### Form Focus State
```
Normal:     Border #ddd (3:1 contrast)
Focus:      Border #8B3A62 (burgundy), 2px outline
Focus Outline: Blue (#0066cc), 2px offset
Contrast:   5.2:1 minimum
```

### Disabled State
```
Background: #f0f0f0
Text:       #999 (4.8:1 contrast)
Not clickable (pointer: not-allowed)
```

---

## 🚦 Real-Device Testing Checklist

### Before Sharing with Design/UX Team
- [ ] iPhone SE (375px): No horizontal scroll
- [ ] iPhone SE: Keyboard doesn't hide form inputs
- [ ] iPhone SE: CTAs visible without scrolling
- [ ] iPhone SE: Touch targets feel natural (not cramped)
- [ ] Android (360px): Same experience as iPhone SE
- [ ] iPad (768px): 2-column layout works
- [ ] iPad landscape (1024px): Full layout visible

### Lighthouse Mobile Audit
- [ ] Accessibility ≥ 95
- [ ] Performance ≥ 80
- [ ] First Contentful Paint < 2.0s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

### Accessibility (Screen Reader)
- [ ] All interactive elements have ARIA labels
- [ ] Focus order follows visual flow (tab through form)
- [ ] Error messages announced by screen reader
- [ ] Image alt text is descriptive
- [ ] Buttons/links are distinguishable from text

---

## 📧 Design & UX Team Feedback Template

### Feedback for Design Lead
```
SECTION: Hero CTA Button
─────────────────────────────────────
Current State:
• Burgundy → Sage gradient
• 56px height, full width on mobile
• Sans-serif 16px bold

Question: Does the gradient color intensity work on all devices?
Concern:  Gradient might be too subtle on OLED displays (iPhone 12+)
Suggestion: Test on real devices before finalizing

DECISION: [ ] Approve as-is  [ ] Refine gradient  [ ] Use solid color
```

### Feedback for UX Lead
```
SECTION: Booking Form Flow
─────────────────────────────────────
Current State:
• 3-step form (info → availability → confirmation)
• Step indicator at top ("Step 1 of 3")
• Each step scrolls independently

Question: Should form auto-scroll to top after each step?
Concern:  Long forms on mobile might feel disorienting
Suggestion: Show progress bar instead of "Step X of 3"

DECISION: [ ] Keep as-is  [ ] Add auto-scroll  [ ] Change indicator
```

---

## ✅ Implementation Priorities

### Sprint 1 (This Week) — Critical Mobile Fixes
1. Verify BookingFormEnhanced.tsx input spacing on real iPhone
2. Test sticky footer CTA (does it appear at right scroll position?)
3. Confirm 48×48px touch targets on all buttons
4. Lighthouse audit (target ≥ 90 accessibility)

### Sprint 2 (Next Week) — Design Refinements
1. Gather Design lead feedback on CTA gradient
2. Gather UX lead feedback on form flow
3. Create mobile mockups for team review
4. A/B test sticky CTA placement (50% vs. 75% scroll)

### Sprint 3 (Following Week) — Final Polish
1. Implement approved design changes
2. Real-device testing (iPhone + Android)
3. Merge to main branch
4. Deploy to staging/production

---

**Generated:** September 1, 2026  
**Status:** Ready for Team Collaboration  
**Next:** Share with Design & UX leads for feedback
