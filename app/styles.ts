// Design system colors and styles as JavaScript objects
const baseColors = {
  primaryRed: {
    50: '#fce8e8',
    100: '#f7c4c7',
    200: '#f0a0a5',
    300: '#e97b83',
    400: '#e65761',
    500: '#E63946',
    600: '#d4313d',
    700: '#c22934',
    800: '#b0212b',
    900: '#8a1922',
  },
  accentTeal: {
    50: '#e0eff2',
    100: '#b8dfe8',
    200: '#8fcfde',
    300: '#66bfd4',
    400: '#3dafca',
    500: '#A8DADC',
    600: '#7dc4cb',
    700: '#5dadb9',
    800: '#3d96a7',
    900: '#1f7f95',
  },
  secondaryBlue: {
    50: '#e8f0f8',
    100: '#c8dff0',
    200: '#a0cee8',
    300: '#78bee0',
    400: '#50add8',
    500: '#457B9D',
    600: '#3d6d8f',
    700: '#355f81',
    800: '#2d5173',
    900: '#1f3a55',
  },
  darkBg: {
    50: '#f5f5f5',
    100: '#e0e0e0',
    200: '#c8c8c8',
    300: '#b0b0b0',
    400: '#909090',
    500: '#6b6b6b',
    600: '#555555',
    700: '#424242',
    800: '#333333',
    900: '#1D3557',
  },
  lightCream: {
    50: '#f9fdfb',
    100: '#F1FAEE',
    200: '#e8f3e6',
    300: '#dfeedd',
    400: '#d6e9d4',
  },
  warmGray: {
    50: '#faf9f7',
    100: '#ede8e3',
    200: '#ddd4cc',
    300: '#c9b8ac',
    400: '#ab9c91',
    500: '#8f8279',
    600: '#7a6f68',
    700: '#5e534a',
    800: '#4c443e',
    900: '#3f3935',
  },
}

/**
 * Public token object. Uses the new color palette:
 * - Primary red (#E63946) for main CTAs and primary actions
 * - Accent teal (#A8DADC) for secondary accents and highlights
 * - Secondary blue (#457B9D) for informational elements
 * - Dark (#1D3557) for text and dark backgrounds
 * - Light cream (#F1FAEE) for light backgrounds
 */
export const colors = {
  ...baseColors,
  // Backward compatibility aliases
  burgundy: baseColors.primaryRed,
  sage: baseColors.primaryRed,
  sageGreen: baseColors.primaryRed,
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
    backgroundColor: colors.lightCream[100],
    color: colors.darkBg[900],
    lineHeight: '1.6',
  },
  h1: {
    fontFamily: 'var(--font-merriweather), serif',
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 700,
    color: colors.darkBg[900],
    lineHeight: '1.3',
    letterSpacing: '-0.5px',
    marginBottom: '1.5rem',
  },
  h2: {
    fontFamily: 'var(--font-merriweather), serif',
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 700,
    color: colors.darkBg[900],
    lineHeight: '1.3',
    letterSpacing: '-0.5px',
    marginBottom: '1.5rem',
  },
  h3: {
    fontFamily: 'var(--font-merriweather), serif',
    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
    fontWeight: 700,
    color: colors.darkBg[900],
    lineHeight: '1.3',
    letterSpacing: '-0.5px',
    marginBottom: '1rem',
  },
  p: {
    fontSize: '1rem',
    lineHeight: '1.75',
    marginBottom: '1rem',
    color: colors.darkBg[900],
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
    backgroundColor: colors.primaryRed[500],
    color: 'white',
  },
  btnPrimaryHover: {
    backgroundColor: colors.primaryRed[600],
    boxShadow: `0 10px 25px rgba(230, 57, 70, 0.25)`,
  },
  btnOutline: {
    backgroundColor: 'transparent',
    color: colors.primaryRed[500],
    border: `2px solid ${colors.primaryRed[500]}`,
  },
  btnOutlineHover: {
    backgroundColor: colors.primaryRed[50],
    borderColor: colors.primaryRed[600],
    color: colors.primaryRed[600],
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
    backgroundColor: colors.darkBg[900],
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
    borderTop: `1px solid ${colors.darkBg[700]}`,
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
    boxShadow: '0 25px 50px -12px rgba(69, 123, 157, 0.25)',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    position: 'relative' as const,
    border: `1px solid ${colors.accentTeal[100]}`,
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
    borderBottom: `1px solid ${colors.lightCream[200]}`,
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
  background-color: #E63946;
  color: white;
  border: none;
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.btn-primary:hover {
  background-color: #d4313d;
  box-shadow: 0 10px 25px rgba(230, 57, 70, 0.25);
  transform: scale(1.03);
}

.btn-primary:focus {
  outline: 2px solid #E63946;
  outline-offset: 3px;
  box-shadow: 0 10px 25px rgba(230, 57, 70, 0.25);
}

.btn-primary:active {
  transform: scale(0.98);
  box-shadow: 0 4px 12px rgba(230, 57, 70, 0.15);
  background-color: #d4313d;
}

/* OUTLINE BUTTON: Enhanced states with better feedback */
.btn-outline {
  transition: all 0.15s ease-out;
  background-color: transparent;
  color: #E63946;
  border: 2px solid #E63946;
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.btn-outline:hover {
  background-color: #fce8e8;
  border-color: #d4313d;
  color: #d4313d;
  box-shadow: 0 4px 12px rgba(230, 57, 70, 0.12);
  transform: scale(1.02);
}

.btn-outline:focus {
  outline: 2px solid #E63946;
  outline-offset: 3px;
  box-shadow: 0 4px 12px rgba(230, 57, 70, 0.12);
}

.btn-outline:active {
  background-color: #fce8e8;
  border-color: #d4313d;
  color: #d4313d;
  transform: scale(0.98);
  box-shadow: 0 2px 6px rgba(230, 57, 70, 0.1);
}

/* LINK BUTTONS: Subtle hover with underline enhancement */
.btn-link {
  transition: all 0.15s ease-out;
  color: #E63946;
  text-decoration: none;
  border-bottom: 2px solid #E63946;
  outline: 2px solid transparent;
  outline-offset: 2px;
  cursor: pointer;
}

.btn-link:hover {
  color: #d4313d;
  border-bottom-color: #d4313d;
}

.btn-link:focus {
  outline: 2px solid #E63946;
  outline-offset: 3px;
}

.btn-link:active {
  opacity: 0.85;
  transform: scale(0.98);
}

  /* NicheGrid card geometry, depth, padding and lift are owned by the unified
     card system in app/globals.css (.card / .niche-card). Only focus affordance
     lives here so it can't drift from the shared surface. */
.niche-card:focus-within {
  outline: 2px solid #E63946;
  outline-offset: 2px;
}

/* Arrow animation on hover/active */
.explore-arrow {
  display: inline-block;
  transition: all 0.3s ease;
  color: #E63946;
}

.niche-card:hover .explore-arrow,
.niche-card:active .explore-arrow {
  color: #d4313d;
  animation: arrowBounce 0.6s ease;
}

@keyframes arrowBounce {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(4px); }
}

/* Reduced motion support - respect user preferences */
@media (prefers-reduced-motion: reduce) {
  .btn-primary,
  .btn-outline,
  .btn-link,
  .niche-card {
    transition: none;
  }
  
  .btn-primary:hover,
  .btn-outline:hover {
    transform: none;
  }
  
  .btn-primary:active,
  .btn-outline:active {
    transform: none;
  }
}
`
