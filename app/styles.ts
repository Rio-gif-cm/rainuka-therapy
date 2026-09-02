// Design system colors and styles as JavaScript objects
// ✅ ALL 7 COLORS FULLY INTEGRATED - See usage guidelines below

const baseColors = {
  primaryBronze: {
    50: '#f9f6f3',
    100: '#f1ebe5',
    200: '#e8dfd6',
    300: '#ddd0c5',
    400: '#d6bfb1',
    500: '#CB997E',     // ✅ Primary buttons, CTAs, main accents
    600: '#c08470',     // ✅ Button hover, darker accents
    700: '#b37062',     // ✅ Dark borders, strong accents
    800: '#9e5c4a',
    900: '#8a4937',
  },
  accentPetal: {
    50: '#fefdfb',
    100: '#fdf8f5',
    200: '#fdf0eb',     // ✅ Light card backgrounds, gentle highlights
    300: '#fce8e1',     // ✅ Subtle backgrounds, info boxes
    400: '#fbe0d7',     // ✅ Medium accents, dividers
    500: '#EDDCD2',     // ✅ Feature highlights, secondary backgrounds
    600: '#e5cfc2',     // ✅ Accent text on light BG
    700: '#dcc1b0',     // ✅ Medium accent text
    800: '#d1b0a0',
    900: '#c49680',
  },
  secondarySand: {
    50: '#faf9f7',
    100: '#f3ede8',     // ✅ Light info card backgrounds
    200: '#ede4dd',     // ✅ Secondary background, subtle dividers
    300: '#e6d9d0',     // ✅ Secondary card backgrounds
    400: '#decdc3',     // ✅ Secondary borders
    500: '#DDBEA9',     // ✅ Secondary buttons, secondary UI elements
    600: '#d4a993',     // ✅ Secondary button hover
    700: '#c89577',     // ✅ Secondary dark accents
    800: '#b5805e',
    900: '#a36b45',
  },
  bgParchment: {
    50: '#faf9f8',
    100: '#f6f5f2',
    200: '#f3f1ed',
    300: '#f0ede8',
    400: '#ede9e3',
    500: '#F0EFEB',     // ✅ Default page background
    600: '#e8e6e0',     // ✅ Subtle background variation
    700: '#dfded8',     // ✅ Borders on light BG
    800: '#d5d3cc',
    900: '#ccc9c2',
  },
  lightLinen: {
    50: '#fffef9',
    100: '#fffcf3',
    200: '#fffaf0',
    300: '#fff8ed',
    400: '#fff5e9',
    500: '#FFF1E6',     // ✅ Light backgrounds, card interiors
    600: '#ffecd0',     // ✅ Subtle highlights
    700: '#ffe6b9',     // ✅ Secondary light backgrounds
    800: '#ffdfa0',
    900: '#ffd885',
  },
  neutralSage: {
    50: '#f8f8f5',
    100: '#f0eee8',     // ✅ Very light borders, subtle dividers
    200: '#e8e5de',     // ✅ Light borders
    300: '#dfdcd3',     // ✅ Medium borders
    400: '#d7d3c8',     // ✅ Subtle text
    500: '#A5A58D',     // ✅ Body text, secondary text
    600: '#99997a',     // ✅ Muted text, decorative borders
    700: '#8d8d67',     // ✅ Darker neutral text
    800: '#808054',
    900: '#737341',
  },
  neutralAsh: {
    50: '#faf9f7',
    100: '#f3f2ee',
    200: '#ede9e3',
    300: '#e6e1d8',
    400: '#dfdacf',
    500: '#B7B7A4',     // ✅ Neutral borders, muted accents
    600: '#aaaa93',     // ✅ Medium neutral borders
    700: '#9d9d82',     // ✅ Dark neutral borders, footer dividers
    800: '#909071',
    900: '#838360',     // ✅ Footer background, dark neutrals
  },
}

/**
 * Public token object. Uses the new color palette:
 * - Primary bronze (#CB997E) for main CTAs and primary actions
 * - Accent petal (#EDDCD2) for secondary accents and highlights
 * - Secondary sand (#DDBEA9) for informational elements
 * - Parchment (#F0EFEB) for backgrounds
 * - Linen (#FFF1E6) for light backgrounds
 * - Neutral sage/ash for neutrals and text
 */
export const colors = {
  ...baseColors,
  // Backward compatibility aliases
  burgundy: baseColors.primaryBronze,
  primaryRed: baseColors.primaryBronze,
  accentTeal: baseColors.accentPetal,
  secondaryBlue: baseColors.secondarySand,
  darkBg: baseColors.neutralAsh,
  lightCream: baseColors.lightLinen,
  warmGray: baseColors.neutralSage,
  sage: baseColors.neutralSage,
  sageGreen: baseColors.neutralSage,
}

// ---------------------------------------------------------------
// SPACING SCALE - 8px base unit.
// Mirrors the --space-* / --section-y / --container-* custom properties
// in app/globals.css. Inline-styled components must pull from here so
// they share the same vertical rhythm as class-based ones.
// ---------------------------------------------------------------
export const spacing = {
  1: '0.5rem',  //   8px
  2: '1rem',    //  16px
  3: '1.5rem',  //  24px
  4: '2rem',    //  32px
  5: '2.5rem',  //  40px
  6: '3rem',    //  48px
  7: '3.5rem',  //  56px
  8: '4rem',    //  64px
  10: '5rem',   //  80px
  12: '6rem',   //  96px
  16: '8rem',   // 128px
} as const

export const layout = {
  // Section vertical rhythm - resolved from the CSS custom properties so
  // inline sections step up at the same breakpoints as .section-padding.
  sectionY: 'var(--section-y)',
  sectionYSm: 'var(--section-y-sm)',
  sectionYLg: 'var(--section-y-lg)',
  // Container widths
  containerMax: 'var(--container-max)',
  containerWide: 'var(--container-wide)',
  containerProse: 'var(--container-prose)',
  containerNarrow: 'var(--container-narrow)',
  gutter: 'var(--container-gutter)',
  // Grid gaps
  gapTight: 'var(--gap-tight)',
  gapCard: 'var(--gap-card)',
  gapFeature: 'var(--gap-feature)',
} as const

export const styles = {
  body: {
    fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    backgroundColor: colors.lightLinen[100],
    color: colors.neutralAsh[900],
    lineHeight: '1.6',
  },
  h1: {
    fontFamily: 'var(--font-merriweather), serif',
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 700,
    color: colors.neutralAsh[900],
    lineHeight: '1.3',
    letterSpacing: '-0.5px',
    marginBottom: '1.5rem',
  },
  h2: {
    fontFamily: 'var(--font-merriweather), serif',
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 700,
    color: colors.neutralAsh[900],
    lineHeight: '1.3',
    letterSpacing: '-0.5px',
    marginBottom: '1.5rem',
  },
  h3: {
    fontFamily: 'var(--font-merriweather), serif',
    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
    fontWeight: 700,
    color: colors.neutralAsh[900],
    lineHeight: '1.3',
    letterSpacing: '-0.5px',
    marginBottom: '1rem',
  },
  p: {
    fontSize: '1rem',
    lineHeight: '1.75',
    marginBottom: '1rem',
    color: colors.neutralAsh[900],
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.875rem 1.75rem',
    fontWeight: 600,
    fontSize: '1rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  btnPrimary: {
    backgroundColor: colors.primaryBronze[500],
    color: 'white',
  },
  btnPrimaryHover: {
    backgroundColor: colors.primaryBronze[600],
    boxShadow: `0 10px 25px rgba(203, 153, 126, 0.25)`,
  },
  btnOutline: {
    backgroundColor: 'transparent',
    color: colors.primaryBronze[500],
    border: `2px solid ${colors.primaryBronze[500]}`,
  },
  btnOutlineHover: {
    backgroundColor: colors.primaryBronze[50],
    borderColor: colors.primaryBronze[600],
    color: colors.primaryBronze[600],
  },
  /**
   * Standard section band. Matches `.section-padding` in globals.css
   * (64px mobile / 80px tablet / 96px desktop) so inline-styled sections
   * sit on the same vertical rhythm as class-based ones.
   * Previously a flat 2rem, which made the hero and niche grid cramped
   * relative to every neighbouring section.
   */
  section: {
    paddingTop: layout.sectionY,
    paddingBottom: layout.sectionY,
  },
  /** Tight interstitial band. Matches `.section-padding-sm`. */
  sectionSm: {
    paddingTop: layout.sectionYSm,
    paddingBottom: layout.sectionYSm,
  },
  /** Hero / major opening band. Matches `.section-padding-lg`. */
  sectionLg: {
    paddingTop: layout.sectionYLg,
    paddingBottom: layout.sectionYLg,
  },
  /** Page shell. Matches `.container-base` (1280px + responsive gutter). */
  container: {
    maxWidth: layout.containerMax,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: layout.gutter,
    paddingRight: layout.gutter,
    width: '100%',
  },
  /**
   * @deprecated Card surfaces are owned by the unified card system in
   * app/globals.css. Use `className="card"` (plus card-warm/card-info/
   * card-success/card-compact/card-static) instead of spreading these objects,
   * so radius, shadow depth, padding, border and hover lift stay in sync.
   */
  card: {
    backgroundColor: 'white',
    borderRadius: 'var(--card-radius)',
    boxShadow: 'var(--card-shadow-rest)',
    padding: 'var(--card-padding)',
    border: `var(--card-border-width) solid var(--card-border-color)`,
    transition: 'var(--card-transition)',
  },
  /** @deprecated See `card` above - use the `.card` class hover state. */
  cardHover: {
    boxShadow: 'var(--card-shadow-hover)',
  },
}

// CONSOLIDATED REUSABLE STYLE OBJECTS - Reduces inline style bloat
export const layoutStyles = {
  flexCenter: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  flexColCenter: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  flexBetween: {
    display: 'flex' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
  },
  gridAutoFit: {
    display: 'grid' as const,
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: layout.gapCard, // 32px - matches .grid-cards in globals.css
  },
  gridAutoFitTight: {
    display: 'grid' as const,
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: layout.gapTight, // 24px
  },
}

export const footerStyles = {
  footer: {
    backgroundColor: colors.neutralAsh[900],
    color: 'white',
    paddingTop: spacing[8],    // 64px
    paddingBottom: spacing[4], // 32px
    // No marginTop: sections own their own bottom padding, and stacking a
    // 4rem margin on top of a section's padding produced an oversized,
    // inconsistent gap above the footer on every page.
  },
  footerContent: {
    maxWidth: layout.containerMax,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: layout.gutter,
    paddingRight: layout.gutter,
    display: 'grid' as const,
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: layout.gapCard,       // 32px
    marginBottom: spacing[6],  // 48px
  },
  footerHeading: {
    color: 'white',
    marginBottom: spacing[2],  // 16px
  },
  footerList: {
    listStyle: 'none' as const,
    padding: 0,
    margin: 0,
  },
  footerListItem: {
    marginBottom: spacing[1],  // 8px
  },
  footerLink: {
    color: 'rgba(255,255,255,0.8)',
    textDecoration: 'none',
  },
  footerMeta: {
    borderTop: `1px solid ${colors.neutralAsh[700]}`,
    maxWidth: layout.containerMax,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: layout.gutter,
    paddingRight: layout.gutter,
    paddingTop: spacing[4],    // 32px
    textAlign: 'center' as const,
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.875rem',
  },
  footerMetaText: {
    margin: 0,
    marginBottom: spacing[1],  // 8px
  },
}

export const heroStyles = {
  heroContainer: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    gap: '3rem',
  },
  heroContainerMobile: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    gap: '1.5rem',
  },
  heroText: {
    flex: 1,
    textAlign: 'center' as const,
  },
  heroSubheading: {
    fontSize: '1.125rem',
    fontWeight: 500,
  },
  heroDescription: {
    fontSize: '1.0625rem',
    maxWidth: '42rem',
    margin: '0 auto 2.5rem',
  },
  heroTrustSignals: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    gap: '2rem',
    justifyContent: 'center',
    marginBottom: '2.5rem',
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  heroTrustSignalsMobile: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '2.5rem',
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  trustRow: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '0.5rem',
    justifyContent: 'center',
  },
  checkmark: {
    fontSize: '1.125rem',
  },
  ctaContainer: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    gap: '1rem',
    justifyContent: 'center',
  },
  heroImageContainer: {
    flex: 1,
    width: '100%',
  },
  heroImage: {
    aspectRatio: '1' as const,
    borderRadius: '1.5rem',
    overflow: 'hidden' as const,
    boxShadow: '0 25px 50px -12px rgba(203, 153, 126, 0.25)',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    position: 'relative' as const,
    border: `1px solid ${colors.accentPetal[100]}`,
  },
  heroImageGradient: {
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.4) 0%, transparent 50%)',
    pointerEvents: 'none' as const,
  },
}

export const navigationStyles = {
  nav: {
    position: 'sticky' as const,
    top: 0,
    zIndex: 50,
    backgroundColor: 'white',
    borderBottom: `1px solid ${colors.lightLinen[200]}`,
  },
  /* Aligned to layout.containerMax + gutter so the brand and nav links
     sit on the exact same left/right edge as page content below. */
  navContent: {
    maxWidth: layout.containerMax,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: layout.gutter,
    paddingRight: layout.gutter,
    paddingTop: spacing[2],
    paddingBottom: spacing[2],
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
    flexWrap: 'wrap' as const,
    gap: spacing[2],
  },
  navContentMobile: {
    maxWidth: layout.containerMax,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: layout.gutter,
    paddingRight: layout.gutter,
    paddingTop: spacing[2],
    paddingBottom: spacing[2],
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    flexWrap: 'wrap' as const,
    gap: spacing[1],
    flexDirection: 'column' as const,
  },
  navBrand: {
    textDecoration: 'none',
  },
  navBrandText: {
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    fontWeight: 700,
    fontFamily: 'var(--font-merriweather), serif',
    whiteSpace: 'nowrap' as const,
  },
  navLinks: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '2rem',
    flexWrap: 'wrap' as const,
    justifyContent: 'flex-end' as const,
  },
  navLinksMobile: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '1rem',
    flexWrap: 'wrap' as const,
    justifyContent: 'center' as const,
    flexDirection: 'column' as const,
    width: '100%',
  },
}

// Global CSS styles for hover effects that work on touch & mouse
export const globalStyles = `
/* Enhanced Button States - Better Visual Feedback */
/* PRIMARY BUTTON: Hover (scale up + shadow lift) + Focus (ring) + Active (press down) */
.btn-primary {
  transition: all 0.15s ease-out;
  background-color: #CB997E;
  color: white;
  border: none;
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.btn-primary:hover {
  background-color: #c08470;
  box-shadow: 0 10px 25px rgba(203, 153, 126, 0.25);
  transform: scale(1.03);
}

.btn-primary:focus {
  outline: 2px solid #CB997E;
}

.btn-primary:active {
  transform: scale(0.98);
}

/* SECONDARY BUTTON: Outline style with bronze border */
.btn-secondary {
  transition: all 0.15s ease-out;
  background-color: transparent;
  color: #CB997E;
  border: 2px solid #CB997E;
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.btn-secondary:hover {
  background-color: #f9f6f3;
  border-color: #c08470;
  color: #c08470;
}

.btn-secondary:focus {
  outline: 2px solid #CB997E;
}

.btn-secondary:active {
  transform: scale(0.98);
}

/* TERTIARY BUTTON: Text-only link style */
.btn-tertiary {
  transition: all 0.15s ease-out;
  background-color: transparent;
  color: #CB997E;
  border: none;
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 2px;
  text-decoration: underline;
}

.btn-tertiary:hover {
  color: #c08470;
}

.btn-tertiary:focus {
  outline: 2px solid #CB997E;
}

/* DISABLED BUTTON STATE */
.btn-primary:disabled,
.btn-secondary:disabled,
.btn-tertiary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ========================================
   LINK STYLES
   ======================================== */
a {
  color: #CB997E;
  text-decoration: underline;
  transition: color 0.15s ease-out;
}

a:hover {
  color: #c08470;
}

a:active {
  color: #b37062;
}

/* ========================================
   INPUT FIELD FOCUS STATES
   ======================================== */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"],
input[type="tel"],
input[type="date"],
input[type="time"],
textarea,
select {
  border: 1px solid #e8e5de;
  transition: all 0.2s ease-out;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
input[type="number"]:focus,
input[type="tel"]:focus,
input[type="date"]:focus,
input[type="time"]:focus,
textarea:focus,
select:focus {
  outline: 2px solid transparent;
  border-color: #CB997E;
  box-shadow: 0 0 0 3px rgba(203, 153, 126, 0.1);
}

/* ========================================
   FORM LABEL STYLING
   ======================================== */
label {
  font-weight: 500;
  color: #838360;
}

label:required::after {
  content: ' *';
  color: #ab5943;
}

/* ========================================
   CARD HOVER LIFT
   ======================================== */
.card {
  transition: var(--card-transition);
}

.card:hover {
  transform: translateY(var(--card-lift));
}

.card:active {
  transform: translateY(var(--card-lift-active));
}

/* ========================================
   UTILITY: ACCESSIBILITY
   ======================================== */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.skip-to-main {
  position: absolute;
  top: -40px;
  left: 0;
  background: #CB997E;
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-to-main:focus {
  top: 0;
}

/* ========================================
   FOCUS VISIBLE STATE (Keyboard Navigation)
   ======================================== */
*:focus-visible {
  outline: 2px solid #CB997E;
  outline-offset: 2px;
}

button:focus-visible,
a:focus-visible {
  outline: 2px solid #CB997E;
  outline-offset: 0;
}

/* ========================================
   ALERT / NOTICE STYLES
   ======================================== */
.alert {
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 4px solid #ab5943;
  background-color: #fcf5f3;
  color: #838360;
}

.alert.success {
  border-left-color: #8d8d67;
  background-color: #f8f8f5;
}

.alert.warning {
  border-left-color: #c08f5c;
  background-color: #fdf9f1;
}

.alert.error {
  border-left-color: #ab5943;
  background-color: #fcf5f3;
}

/* ========================================
   LOADING STATE ANIMATIONS
   ======================================== */
.loading {
  opacity: 0.6;
  pointer-events: none;
}

.spinner {
  border: 2px solid #e8e5de;
  border-top: 2px solid #CB997E;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* ========================================
   TOOLTIP STYLING
   ======================================== */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted #CB997E;
  cursor: help;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #CB997E;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 0.875rem;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

/* ========================================
   RESPONSIVE VISIBILITY
   ======================================== */
.hide-mobile {
  @media (max-width: 640px) {
    display: none;
  }
}

.hide-desktop {
  @media (min-width: 1024px) {
    display: none;
  }
}
`
