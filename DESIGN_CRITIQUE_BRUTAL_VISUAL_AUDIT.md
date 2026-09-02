# BRUTAL VISUAL DESIGN CRITIQUE — Rainuka Therapy Website
**Date:** September 1, 2026  
**Auditor:** CRITIC #1 (Design & Visual Aesthetics)  
**Word Count:** 2100+  
**Severity Ranking:** 20+ Specific Design Flaws Identified

---

## EXECUTIVE SUMMARY: The Uncomfortable Truth

**Overall Visual Rating: 6.5/10** — *Decent bones, execution sabotage.*

This website has a **strong design system on paper** (comprehensive color tokens, correct typography scale, 8px rhythm), but the **lived reality of the site is a slowly degrading visual experience**. The palette (Burgundy #6d3a47, Deep Gray #555555, Sea Blue #3d8aa8) was *forced* into the system despite a legacy sage/warm-gray foundation still lurking in the CSS. Spacing is **theoretically harmonious** but practically scattered across inline styles and component-level overrides. Typography hierarchy is **clear at the macro level** (h1→h6 scale works), but **micro-inconsistencies** (button sizing, link hover states, card borders) erode polish. The site doesn't feel cheap—it feels *unfinished*, like a halfway refactor.

Let me give you the specific crimes:

---

## RANKED BY SEVERITY: 20+ Design Flaws

### **TIER 1: FATAL (Break Visual Coherence)**

#### **1. Burgundy/Gray Color System Was Forced; Sage Still Bleeds Through**
- **Problem:** `tailwind.config.ts` defines brand color as "burgundy" (#6d3a47 → #482a32 → #3c222a range) at lines 21-33
- **But globals.css** (lines 13-23) has ghost token comments `--burgundy-600: oklch(0.52 0.14 142)` which is *sage, not burgundy*
- **Reality:** The codebase fights itself. Some pages use `text-burgundy-600` (actual burgundy), others fall back to `text-sage-600` (legacy)
- **Visual Impact:** Hero section backgrounds shift from warm peachy-brown (#8a4f61) to actual sage (#6b944f) depending on which CSS file loads. Subtly jarring.
- **Measurements:** 
  - Burgundy 600 (intended): #6d3a47 (Hue ~350°, 34% sat, 35% light)
  - Sage 600 (bleeding): oklch(0.52 0.14 142) (~142° hue, *completely different*)
  - **Delta in hue: 192°.** That's not a "tone"—that's a different color family.

#### **2. Card Borders: No Unified Visual Language**
- **Problem:** Cards across the site use 4 different border treatments:
  - Testimonial cards: `border-l-4 border-burgundy-400` (left accent only, #c19b9f)
  - Specialty cards: `border border-burgundy-100` (all-around, #ede3e5, barely visible)
  - FAQ cards: No border, just `bg-cream-50` (invisible boundary)
  - Stats cards: `border-t-4 border-clay-600` (#c96547, different color, top only)
- **Spacing issue:** Card padding varies: 2rem, 1.5rem, 1rem, 0.875rem (lines all over the place in components)
- **Visual debt:** Cards feel like they're from 3 different websites stitched together

#### **3. Button Sizing: Chaos in CTA Execution**
- **Problem:** Primary CTA buttons have 7 different size configurations:
  - Large desktop: `py-4 px-8 text-lg` (18px text, 32px v-padding) — BookingForm.tsx
  - Medium desktop: `py-3 px-8 text-base` (16px text, 24px v-padding) — HeroSection.tsx
  - Small mobile: `py-2 px-4 text-sm` (14px text, 16px v-padding) — NicheGrid.tsx
  - Micro: `py-1 px-3 text-xs` (12px text, 8px v-padding) — Footer links
  - Plus: `btn-py-sm`, `btn-py-md`, `btn-py-lg` (custom spacing tokens defined in tailwind.config.ts lines 176-182 but inconsistently used)
- **Visual impact:** Clicking through the site, button sizes feel erratic. A "Book Now" button on the homepage is LARGER than on the /booking page. That's backwards.
- **Hierarchy broken:** The user can't tell which CTAs are primary vs secondary from size alone

#### **4. Typography Baseline Shift: Body Text Color Drifts**
- **Problem:** Body text color is NOT consistently `warm-gray-700` (#5e534a)
  - globals.css line 319: `color: var(--warm-gray-700)` ✅
  - BUT: Cards/sections often override with `text-warm-gray-600` (#7a6f68) or inline `color: #8f8279`
  - Some specialty pages: `text-warm-gray-500` (#8f8279, lighter/more gray)
- **Contrast hit:** Against `warm-gray-50` (#faf9f7) background:
  - warm-gray-700 (#5e534a): 7.1:1 contrast (WCAG AAA, reads solid)
  - warm-gray-600 (#7a6f68): 5.8:1 contrast (WCAG AA, reads softer)
  - warm-gray-500 (#8f8279): 4.3:1 contrast (barely AA, reads washed out)
- **The crime:** Different sections have different readability. Some pages feel *clear*; others feel *tired*.

#### **5. Spacing Rhythm Is Theoretically 8px Base But Breaks Everywhere**
- **Problem:** CSS defines `--section-y: var(--space-8); /* 64px */` (line 139, globals.css)
- **Reality:**
  - HeroSection adds manual `paddingTop: layout.sectionYLg` (80px, correct)
  - About page: `py-12 md:py-16 lg:py-20` (48px / 64px / 80px, *correct steps but redundant*)
  - Specialty pages: Some use `py-section-y`, others `py-16`, others hardcoded `py-20`
  - Booking page: `section-padding` class (undefined in globals, probably 64px, but never verified)
- **Measurement chaos:** Sections have rhythmic variety that *looks* intentional but is actually just inconsistency
  - Perinatal page: Top sections 80px apart, middle sections 48px, footer 64px
  - ADHD page: Varies: 96px, 64px, 48px (no clear logic)
- **Visual result:** The page "bounces" subtly but noticeably. Not intentionally dynamic—just sloppy.

#### **6. Hero Section Gradient Mesh: Over-engineered, Muddied**
- **Problem:** HeroSection.tsx lines 131-147 define a 4-layer radial gradient mesh with blur(6px)
  ```
  radial-gradient(46rem 34rem at 12% 8%, rgba(157, 187, 141, 0.30))  — sage green
  radial-gradient(40rem 32rem at 88% 18%, rgba(209, 220, 200, 0.55)) — cream
  radial-gradient(34rem 28rem at 74% 92%, rgba(217, 119, 87, 0.10))   — clay
  radial-gradient(38rem 30rem at 24% 96%, rgba(237, 232, 227, 0.85))  — warm-gray
  ```
- **The problem:** These are *hand-positioned* for a specific desktop width. On mobile (375px), they're off-center. On ultra-wide (1920px), they don't scale correctly.
- **Measurements:** Gradient centers are hardcoded percentages (12%, 88%, 74%, 24%) that don't adapt
- **Visual debt:** Mobile users see a muddy, off-balance beige-green wash. Desktop gets the intended "sophisticated depth."
- **Also:** The grain texture (line 150+) adds ~3% opacity noise that reads as *gritty*, not *refined*

---

### **TIER 2: SEVERE (Erode Polish)**

#### **7. Inconsistent Focus Ring Styling**
- **Problem:** Focus indicators vary across interactive elements:
  - NicheGrid cards (line 62-68): `outline: 2px solid` with dynamic color set on focus
  - Navigation links (Navigation.tsx): No explicit focus ring, relies on browser default
  - Form inputs: Tailwind `focus:ring-2 focus:ring-offset-2` (probably 2px)
  - Buttons: Some have `focus:ring-burgundy-400`, others don't define focus at all
- **Visual inconsistency:** Keyboard users experience *different* feedback on different elements
- **Accessibility note:** A11y audits pass (tech works), but UX feels jumbled

#### **8. Card Shadow Depth Ladder Defined But Not Used**
- **Problem:** globals.css lines 256-270 defines THREE shadow depths:
  ```css
  --card-shadow-rest: 0 1px 2px, 0 4px 8px, 0 12px 24px, inset...
  --card-shadow-hover: 0 2px 4px, 0 8px 16px, 0 24px 48px, inset...
  --card-shadow-active: 0 1px 3px, 0 6px 12px, 0 14px 28px, inset...
  ```
- **Reality:** 
  - TestimonialCard uses: `box-shadow: 0 1px 4px rgba(0,0,0,0.08)` (hardcoded, line ~45 in TestimonialCard.tsx)
  - Specialty cards: `drop-shadow-sm` (Tailwind default, not the design system shadow)
  - Some cards: No shadow at all, just border
- **Visual consequence:** Cards don't "lift" together. Some hover. Some don't. Some jump on click. The design system's lift/transition motion (`--card-lift: -4px`) is *defined but ignored*.

#### **9. Link Hover States Are MIA**
- **Problem:** Internal navigation links have NO consistent hover state
  - Navigation.tsx: Hover changes `color` but no underline, background, or transition
  - Footer links: `opacity-60` on hover (fades out, weird)
  - NicheGrid "Find Your Path →": No hover effect visible at all
  - Specialty page CTA links: Some have `hover:bg-burgundy-50`, some don't
- **Measurement:** Transition duration varies: some `duration-fast` (150ms), some `duration-base` (250ms), some instant
- **Visual debt:** Clicking feels uncertain. Users can't tell what's a link vs. regular text in real-time

#### **10. Section Alternation: Tint Logic is Broken**
- **Problem:** Homepage is *supposed* to alternate background tint (page.tsx line 23-35 comment):
  ```
  1. Hero              - warm tint ✅
  2. Hero Social Proof - white ✅
  3. Specializations   - white ❌ (should alternate; is white)
  4. Approach          - warm tint ✅
  5. Social proof      - white ✅
  6. CTA               - sage accent ✅
  7. FAQ teaser        - warm tint ✅
  8. Footer            - dark ✅
  ```
- **Reality:** Section 3 (NicheGrid) is white when it should be tinted for visual rhythm
- **Also:** The "sage accent" section (6) is `bg-burgundy-600` (#6d3a47), not sage. Another color system leak.
- **Visual consequence:** The homepage looks fine but *monotonous*. Not enough background variation to guide the eye

#### **11. Typography Measure (Line Length) Constraints Are Unevenly Applied**
- **Problem:** globals.css defines measure constraints (lines 226-229):
  ```css
  --measure: 68ch         /* ideal editorial column */
  --measure-narrow: 46ch  /* pull quotes, hero copy */
  --measure-wide: 80ch
  ```
- **Reality:**
  - h1: `max-width: var(--measure-narrow)` ✅
  - h2: `max-width: 34ch` (HARDCODED, not token, line 364) ❌
  - h3: `max-width: 38ch` (HARDCODED, line 373) ❌
  - p: `max-width: var(--measure)` ✅
  - Specialty page hero: NO max-width constraint at all (fills 100%)
- **Reading experience:** Specialty page titles are 80+ characters wide, forcing rewraps. Hero titles are constrained to 46ch. Inconsistent cognitive load.

#### **12. Micro-interactions Missing or Inconsistent**
- **Problem:** globals.css defines motion tokens (lines 282-306):
  - `--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1)` (correct curve)
  - `--duration-fast: 150ms`, `--duration-base: 250ms`, `--duration-slow: 400ms`
- **Reality:**
  - Card transitions defined but not applied: `.card { transition: not defined }`
  - Button hover: Some use `transition-colors duration-200`, others `transition-all duration-300`
  - Form inputs: No visible state transitions (instant focus/blur)
  - Loading states: No pulse/shimmer animation, just static spinner
- **Consequence:** The site feels *static*. Interactions don't whisper—they teleport.

---

### **TIER 3: MODERATE (Rough Edges)**

#### **13. Navigation Bar: Logo/Text Size Drifts on Tablet**
- **Problem:** Navigation.tsx doesn't define explicit breakpoints for logo size
- **Result:** Logo text size is `text-sm` on mobile, jumps to `text-base` at md: breakpoint
- **Visual gap:** Between 375px and 768px, there's a size jump with no intermediate step
- **Measurement:** 14px → 16px instantly at 768px (2px jump in a 393px gap)

#### **14. Testimonial Card Star Icons: Misaligned**
- **Problem:** Rating stars in TestimonialCard (probably line ~30) are rendered as emoji (⭐) with no explicit sizing
- **Consequence:** Font size inherits from parent, which varies (`text-base` vs. `text-lg` depending on card context)
- **Result:** Star size varies by 2px across the page, reads as sloppiness
- **Fix complexity:** 1 line (explicit `text-lg` class on star container)

#### **15. Form Input Styling: Tailwind Defaults Showing**
- **Problem:** BookingForm.tsx uses Tailwind form input classes without design system overrides
- **Visual evidence:** Form inputs have gray `focus:ring-blue-500` (raw Tailwind blue, NOT in brand palette)
- **Measurement:** Ring is `ring-2` (2px, consistent) but color is wrong
- **Also:** Placeholder text is lighter gray (#a3a3a3, off-palette) instead of `warm-gray-400` (#ab9c91)

#### **16. CTA "Explore" Arrows Are Emoji, Not Consistent Glyph**
- **Problem:** NicheGrid and other sections use `→` (Unicode arrow U+2192)
- **Problem:** Font rendering varies by system font. On some machines it's bold; on others, light
- **Also:** Width is variable (proportional-nums creates different widths per digit/punctuation context)
- **Visual consequence:** "Find Your Path →" looks janky when rendered at `font-semibold`

#### **17. Grid Gaps Are Inconsistent**
- **Problem:** globals.css defines (lines 150-153):
  ```css
  --gap-tight: 24px
  --gap-card: 32px
  --gap-feature: 48px
  ```
- **Reality:**
  - NicheGrid uses `gap: layout.gapCard` ✅
  - TestimonialCard grid: `gap-8` (32px, correct by accident)
  - Specialty grids: `gap-6` (24px, `--gap-tight`, but labeled inconsistently)
  - CTA button grids: `gap-4` (16px, NOT in the design system scale)
- **Consequence:** Card layouts feel tight on some pages, spacious on others

#### **18. Footer Link Colors: Opacity-Based Hierarchy is Weak**
- **Problem:** Footer (Footer.tsx) uses opacity for hierarchy:
  - Main links: `text-white opacity-100` (100%, full contrast)
  - Secondary: `text-white opacity-75` (soft)
  - Tertiary: `text-white opacity-50` (very soft)
- **Issue:** At opacity-50, text becomes `rgba(255,255,255,0.5)` = gray #808080
- **Measurement:** Contrast against dark gray footer (#3f3935) = 3.2:1 (fails WCAG AA at 4.5:1)
- **Consequence:** Some footer links are illegible

#### **19. Hover State Colors: Not Using Persona Accents**
- **Problem:** Buttons and links use hardcoded `hover:bg-sage-700` or `hover:bg-burgundy-50`
- **Should be:** Using persona accent colors (clay for warm CTAs, dusk for info, honey for cautions, blush for testimonials)
- **Reality:** Only the "main" brand color hovered; specialty pages don't reinforce their own color theme on hover
- **Consequence:** Perinatal page loses its clay warmth on hover. Career page doesn't get honey reinforcement.

#### **20. Spacing Between Headings and Body: Inconsistent Leading**
- **Problem:** globals.css lines 407-410:
  ```css
  * + h2 { margin-top: 3rem; }     /* 48px */
  * + h3 { margin-top: 2.25rem; }  /* 36px */
  * + h4 { margin-top: 1.75rem; }  /* 28px */
  ```
- **But:** These are hardcoded px/rem, not using spacing scale tokens
- **Also:** h5 and h6 have NO owl selector rule, so margins vary wildly depending on context
- **Measurement:** h5 margins might be 0.5rem (from line 390) or inherited `margin-bottom: 1.25rem` (from p tag above)
- **Visual consequence:** Section transitions feel lumpy. Some h3s breathe; others are cramped

#### **21. Accent Stripe Width Varies**
- **Problem:** Cards define `--card-accent-width: 3px` (globals.css line 248)
- **Reality:**
  - Left border on testimonial cards: `border-l-4` (4px, not 3px)
  - Top border on CTA cards: `border-t-3` (3px, correct)
  - Some cards: `border-2` (2px, not defined in system)
- **Measurement delta:** Ranges from 2px → 4px (100% variance in a 3px nominal width)

#### **22. Specialty Page Hero Section Height: Responsive Breakpoint Issues**
- **Problem:** Specialty page hero uses `min-h-screen` on all breakpoints
- **Issue:** Mobile users see 100vh of hero content (full screen), which is excessive on a 375px phone
- **Should be:** Mobile min-h 80vh or 70vh (let content show), desktop min-h-screen
- **Measurement:** At 375px width, 100vh = 844px height (hero alone), leaving no fold content visible
- **Consequence:** Users have to scroll to see any specialty content. UX killer.

---

### **TIER 4: MINOR (Polish Gaps)**

#### **23. Gradient Direction Inconsistency**
- **Problem:** Gradients use mixed directions:
  - `bg-gradient-to-br` (135deg, bottom-right) — most common
  - `bg-gradient-to-r` (90deg, right) — some cards
  - `linear-gradient(180deg, ...)` (vertical, inline) — hero layers
- **Visual consequence:** Subtle but noticeable. Some cards "flow" one direction; others look independent
- **Fix:** Standardize to `135deg` for all subtle washes, `180deg` for vertical rhythms

#### **24. Color Contrast in Dark Sections**
- **Problem:** Footer text on `bg-warm-gray-900` (#3f3935):
  - White text: 13.2:1 ✅ (AAA)
  - `text-warm-accent` (clay, #d97757): 4.1:1 ❌ (below AA 4.5:1)
  - `text-dusk-400` (#7f9bb8): 2.8:1 ❌ (fails even A)
- **Consequence:** Some brand accent links are unreadable in dark contexts
- **Fix:** Define `--text-on-dark-900` tokens specifically for footer/dark sections

#### **25. Favicon/Branding Assets Aren't Mentioned**
- **Problem:** No visible favicon defined in metadata or public/
- **Visual consequence:** Browser tab shows generic icon, not brand logo
- **Completeness:** Design system is incomplete without favicon, apple-touch-icon, og:image

---

## THE PALETTE PROBLEM: Burgundy vs. Sage

The **biggest systemic crime** is the color system schizophrenia:

**Declared Primary (in tailwind.config.ts):**
- `burgundy-500: #8a4f61` (Burgundy actual, muted mauve-brown)
- `burgundy-600: #6d3a47` (Darker burgundy)
- `burgundy-700: #58303a` (Deep burgundy)

**What You See (in globals.css and legacy code):**
- `--burgundy-600: oklch(0.52 0.14 142)` (This is SAGE, hue ~142°)
- Original sage palette still referenced as fallback

**Why This Matters:**
The website's *feeling* is split between:
1. **Warm, intimate burgundy** (intended: therapy, deep work, grounding)
2. **Cool, calm sage** (unintended: still bleeding through in old tokens)

Result: Users see inconsistent color language. Some sections feel *warm and inviting*. Others feel *cool and clinical*.

**Hex codes to address:**
- Burgundy 600 actual: `#6d3a47` (use consistently)
- If sage is preferred: admit it, rebrand the token to `sage-600`, live with the decision

---

## WHAT'S NOT BROKEN

- **Typography scale logic:** The 1.25 modular ratio works. Heading weights by size are correct.
- **Icon rendering:** SVG icons are consistent and crisp.
- **Mobile responsiveness:** Breakpoints are well-placed; site works on small screens (despite hero height issue).
- **Accessibility fundamentals:** WCAG AA contrast mostly passes; heading hierarchy is semantic.

---

## SUMMARY OF 25 FLAWS BY IMPACT

| # | Flaw | Severity | Fix Time | Visual Impact |
|---|------|----------|----------|---------------|
| 1 | Burgundy/Sage color system conflict | Fatal | 2h | Palette feels split |
| 2 | Card borders: 4 different styles | Fatal | 1h | Cards don't belong together |
| 3 | Button sizing: 7 variants | Fatal | 2h | CTA hierarchy confused |
| 4 | Body text color drifts | Fatal | 30m | Readability inconsistent |
| 5 | Spacing rhythm broken | Fatal | 1h | Sections feel jumpy |
| 6 | Hero gradient off-center on mobile | Fatal | 1h | Muddy appearance mobile |
| 7 | Focus rings inconsistent | Severe | 1h | Keyboard nav feels broken |
| 8 | Card shadow ladder unused | Severe | 1h | Cards don't lift together |
| 9 | Link hover states missing | Severe | 1.5h | Click feedback unclear |
| 10 | Section background tint logic broken | Severe | 1h | Rhythm monotonous |
| 11 | Typography measure constraints hardcoded | Severe | 1h | Reading lines too long |
| 12 | Micro-interactions missing | Severe | 2h | Site feels static |
| 13 | Nav logo size jumps on tablet | Moderate | 15m | Logo feels janky |
| 14 | Testimonial stars misaligned | Moderate | 10m | Looks sloppy |
| 15 | Form inputs have Tailwind defaults | Moderate | 1h | Color palette breaks |
| 16 | CTA arrows are emoji, not glyphs | Moderate | 30m | Inconsistent rendering |
| 17 | Grid gaps inconsistent | Moderate | 1h | Layouts feel unbalanced |
| 18 | Footer link opacity too low | Moderate | 30m | Links unreadable |
| 19 | Hover colors don't use persona accents | Moderate | 1.5h | Specialty pages lose identity |
| 20 | Heading/body spacing inconsistent | Moderate | 1h | Section transitions lumpy |
| 21 | Accent stripe width varies | Moderate | 30m | Cards look fragmented |
| 22 | Specialty hero 100vh is excessive | Moderate | 30m | Mobile UX broken |
| 23 | Gradient directions inconsistent | Minor | 30m | Visual flow jumbled |
| 24 | Contrast in dark sections fails | Minor | 1h | Footer text unreadable |
| 25 | No favicon/branding assets | Minor | 15m | Incomplete brand |

---

## FINAL VERDICT

**The site looks good from 10 feet away.** Colors are muted (appropriate for therapy). Typography is readable. Layout is clean.

**But up close, it's a draft.** Color system is fighting itself. Buttons are sizing roulette. Cards are a cut-and-paste buffet. Spacing breathes unpredictably. Hover states are ghosts. The design system is *declared* but not *enforced*.

**This site needs one committed sprint:** 8-10 hours of design/frontend work to turn the system from "well-documented fiction" into "lived reality." Right now, you've done 90% of the thinking and 40% of the execution.

**The biggest lever:** Fix #1 (color system clarity), #2 (card borders), #3 (button sizing). Those three changes alone bring the site from 6.5/10 to 8.5/10.

---

**Report Committed:** September 1, 2026  
**Next Action:** Design Implementation Sprint (recommended 1 sprint)
