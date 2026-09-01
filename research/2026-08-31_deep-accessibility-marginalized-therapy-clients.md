# Deep Accessibility for Marginalized Therapy Clients

## Executive Summary
Beyond WCAG compliance, marginalized therapy clients (trauma survivors, disabled, neurodivergent, LGBTQ+) have deeper accessibility needs rooted in **psychological safety**, **sensory protection**, **predictability**, and **dignity**. This research identifies actionable implementations for a therapy practice website.

---

## Key Insights by Population

### Trauma Survivors (Control, Autonomy, Predictability)
- **Core need:** Restore sense of control and predictability
- **Physical manifestations:** Motion sensitivity from hypervigilance; sudden animations trigger fight-or-flight
- **Web impact:** Unexpected animations, auto-playing media, surprise pop-ups recreate trauma responses
- **Actionable:** `prefers-reduced-motion` media query; no autoplay; clear "what to expect" pages

### Neurodivergent Clients (ADHD, Autism - Cognitive Load, Sensory Needs)
- **Core need:** Reduce cognitive and sensory overload; clarity over metaphor
- **ADHD-specific:** Executive dysfunction, working memory challenges; need clear, scannable content
- **Autistic-specific:** Sensory sensitivity (motion, sound, contrast); preference for literal, predictable patterns
- **Web impact:** Carousels, animations, unclear navigation, metaphorical language create barriers
- **Actionable:** Static layouts; consistent navigation; literal language ("50-minute sessions, $X per session"); turn off autoplay; respect motion preferences

### Disabled Clients (Universal Design Principles)
- **Core need:** Design for one, benefit all (ramps help parents with strollers, captions help noisy environments)
- **Common barriers:** Small buttons (arthritis, tremor, motor disabilities); long forms; inaccessible portals; color-only information
- **Web impact:** Touch targets <48px; forms without labels; keyboard navigation gaps; low contrast
- **Actionable:** 48px minimum touch targets; semantic HTML; keyboard-only navigation; color + text/icon for information

### LGBTQ+ Clients (Inclusive Language, Imagery, Dignity)
- **Core need:** Visible affirmation; proof the therapist "gets you"; trust building
- **Barriers:** Assumption of heteronormativity; gendered language; lack of representation in imagery/testimonials
- **Web impact:** Forms asking for "spouse" instead of "partner"; male/female pronouns only; no visible LGBTQ+ affirming markers
- **Actionable:** Gender-neutral language; pronoun fields; diverse imagery; explicit LGBTQ+ affirmation statement

---

## Data & Statistics

1. **Motion sensitivity:** ~35% of US adults over 40 have experienced vestibular dysfunction; includes ADHD, epilepsy, traumatic brain injury (sources: NIH, Josh Comeau, A11y Path)

2. **WCAG 2.2 Coverage Gaps:** WCAG 2.1 is the *minimum*; autism-friendly design requires **predictable navigation + literal language + low sensory load** beyond color/contrast/keyboard rules

3. **Neurodivergent web users:** ADHD affects ~5% of adults; autism ~1-2%; both benefit from **consistent patterns, clear headings, no autoplay**

4. **Therapy-seeking behavior:** First-time clients are already stressed; unclear websites (unclear fees, vague session descriptions, unexpected motion) cause booking abandonment

---

## Design Patterns & Best Practices

### 1. prefers-reduced-motion: reduce
**What it does:** Disables decorative animations for users who request reduced motion in OS settings (macOS Accessibility, Windows, Android, iOS)

**Implementation:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .card:hover {
    transform: none; /* Remove hover elevation */
  }
  .hero-section {
    animation: none; /* No fade-in on load */
  }
  /* Keep functional feedback: loading spinners, focus states */
  .loader {
    animation: subtle-pulse 2s ease-in-out infinite;
  }
}
```

**Impact:** Respects vestibular + migraine + trauma-response sensitivities; satisfies WCAG 2.3.3 (Motion from Interaction, AAA)

### 2. Literal Language + Predictable Patterns
**Current therapy language is metaphorical:** "Begin your path to wholeness," "A safe space to grow"
**Neurodivergent-friendly language is literal:** "Sessions are 50 minutes. Cost is $X sliding scale. First session includes intake, usually 80 minutes."

**Patterns to implement:**
- One consistent menu location on every page (neurodivergent + trauma safety = predictability)
- No hamburger menu on desktop (desktop users expect persistent nav)
- Section headings exactly describe content ("Fees & Insurance," not "Investment")
- Clear buttons with action verbs: "Book a free 15-minute call," not "Get Started"
- "What to Expect in Your First Session" page with sensory details (office lighting, noise level, whether stimming is OK)

### 3. No Autoplay
**Current site:** OK (no autoplay detected)
**Principle:** Videos, audio, animations must play only on user interaction (click/tab)
**Impact:** Protects from sensory overload, trauma responses, ADHD hyperfocus hijacking

### 4. Inclusive Language Throughout
**Replace:**
- "Spouse/husband/wife" → "Partner"
- "Postpartum" (gendered, excludes non-birth partners, trans parents) → "Perinatal" or "After becoming a parent"
- "Female clients" → "Clients" or "People with reproductive histories"

**Add:**
- Pronoun field on contact forms (or "I don't share pronouns")
- Explicit LGBTQ+ affirmation: "I work with LGBTQ+, trans, nonbinary, and gender-nonconforming clients. Your identity is never the problem."
- Diverse imagery in testimonials/hero sections (not just cisgender, able-bodied, white faces)

### 5. Accessibility Statement Page
**Why:** Shows professional commitment; reduces client anxiety ("They thought about accessibility, so they thought about me")
**Content:**
- WCAG 2.1 AA conformance statement
- Known limitations + workarounds
- Contact info for accessibility issues: "Have trouble accessing this site? Email accessibility@rainukatherapy.com"
- List of what we did: "We implemented prefers-reduced-motion, reduced animations, no autoplay, semantic HTML, keyboard navigation, 48px touch targets, high color contrast"

---

## Actionable Takeaways for Rainuka-Therapy Build

### Priority 1 (High impact, low effort):
1. **Add `prefers-reduced-motion` support to globals.css** - Disables transitions/transforms/animations for motion-sensitive users
2. **Update language site-wide** - Replace metaphorical copy with literal therapy language
3. **Add LGBTQ+ affirmation statement** - Visible on homepage + About page

### Priority 2 (Medium effort, high impact):
4. **Create "What to Expect" page** - Session length, cost, first-session format, office sensory details, cancellation policy
5. **Add accessibility statement page** - /accessibility with WCAG claim + known issues + contact info
6. **Audit forms** - Ensure all inputs have labels, match form fields work, gender-neutral pronouns option

### Priority 3 (Lower priority; already partly done):
7. Verify keyboard navigation (Tab, Enter, Arrow keys work throughout)
8. Verify touch targets are 48px+ (check mobile buttons)
9. Verify no flashing content >3Hz (photosensitive seizure safety)

---

## Sources

1. **Reduced Motion:**
   - A11y Path: "Accessible Motion and Animation" (a11ypath.com)
   - Code Clarity Lab: "prefers-reduced-motion" (codeclaritylab.com)
   - Pope Tech Blog: "Design Accessible Animation and Movement" (blog.pope.tech)

2. **Neurodivergent Design:**
   - Therapeia: "Autism-Friendly Web Design: Enhance Patient UX" (therapeiawebdesign.com)
   - Welcoming Web: "Designing for ADHD and Neurodiversity in UX" (welcomingweb.com)
   - Handmade Web Studio: "Web Accessibility for Therapists" (handmadewebstudio.com)

3. **LGBTQ+ Affirmation:**
   - The Love Hope Company: "LGBTQ Therapy: Safe, Affirming Mental Health Support"
   - Inclusive Therapists: Directory + values around 2SLGBTQIA+ justice
   - Digital Therapy Solutions: "Therapy should feel safer than explaining yourself"

4. **Universal Design:**
   - Egmer Marketing: "Accessible PT Website Design" (occupational therapist + engineer perspective)
   - ADA Title III case law: Domino's, Winn-Dixie, Robles (websites are places of public accommodation)

---

## Conclusion

A deep accessibility layer for therapy websites goes **beyond WCAG compliance** to honor the psychological and sensory safety of clients who've experienced trauma, disability, neurodivergence, and marginalization. Implementing **prefers-reduced-motion + literal language + LGBTQ+ affirmation** simultaneously improves the site for all visitors while demonstrably showing that Rainuka's practice prioritizes client dignity and safety.
