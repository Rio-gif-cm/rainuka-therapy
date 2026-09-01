// Design system colors and styles as JavaScript objects
export const colors = {
  sage: {
    50: '#f8faf7',
    100: '#e8ede5',
    200: '#d1dcc8',
    300: '#b5c7aa',
    400: '#9dbb8d',
    500: '#82a86c',
    600: '#6b944f',
    700: '#547c3f',
  },
  warmGray: {
    50: '#faf9f7',
    100: '#ede8e3',
    200: '#ddd4cc',
    300: '#c9b8ac',
    600: '#5e534a',
    700: '#5e534a',
    900: '#3f3935',
  },
  accent: '#d97757',
}

export const styles = {
  body: {
    fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    backgroundColor: colors.warmGray[50],
    color: colors.warmGray[700],
    lineHeight: '1.6',
  },
  h1: {
    fontFamily: 'var(--font-merriweather), serif',
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 700,
    color: colors.warmGray[900],
    lineHeight: '1.3',
    letterSpacing: '-0.5px',
    marginBottom: '1.5rem',
  },
  h2: {
    fontFamily: 'var(--font-merriweather), serif',
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 700,
    color: colors.warmGray[900],
    lineHeight: '1.3',
    letterSpacing: '-0.5px',
    marginBottom: '1.5rem',
  },
  h3: {
    fontFamily: 'var(--font-merriweather), serif',
    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
    fontWeight: 700,
    color: colors.warmGray[900],
    lineHeight: '1.3',
    letterSpacing: '-0.5px',
    marginBottom: '1rem',
  },
  p: {
    fontSize: '1rem',
    lineHeight: '1.75',
    marginBottom: '1rem',
    color: colors.warmGray[700],
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
    backgroundColor: colors.sage[600],
    color: 'white',
  },
  btnPrimaryHover: {
    backgroundColor: colors.sage[700],
    boxShadow: `0 10px 25px rgba(107, 148, 79, 0.15)`,
  },
  btnOutline: {
    backgroundColor: 'transparent',
    color: colors.sage[600],
    border: `2px solid ${colors.sage[600]}`,
  },
  btnOutlineHover: {
    backgroundColor: colors.sage[50],
    borderColor: colors.sage[700],
    color: colors.sage[700],
  },
  section: {
    padding: '2rem 1rem',
  },
  container: {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    border: `1px solid ${colors.warmGray[200]}`,
    transition: 'all 0.3s ease',
  },
  cardHover: {
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
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
    gap: '2rem',
  },
}

export const footerStyles = {
  footer: {
    backgroundColor: colors.warmGray[900],
    color: 'white',
    paddingTop: '4rem',
    paddingBottom: '2rem',
    marginTop: '4rem',
  },
  footerContent: {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    display: 'grid' as const,
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  footerHeading: {
    color: 'white',
    marginBottom: '1rem',
  },
  footerList: {
    listStyle: 'none' as const,
    padding: 0,
    margin: 0,
  },
  footerListItem: {
    marginBottom: '0.5rem',
  },
  footerLink: {
    color: 'rgba(255,255,255,0.8)',
    textDecoration: 'none',
  },
  footerMeta: {
    borderTop: `1px solid ${colors.warmGray[700]}`,
    paddingTop: '2rem',
    textAlign: 'center' as const,
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.875rem',
  },
  footerMetaText: {
    margin: 0,
    marginBottom: '0.5rem',
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
    boxShadow: '0 25px 50px -12px rgba(107, 148, 79, 0.25)',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    position: 'relative' as const,
    border: `1px solid ${colors.sage[100]}`,
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
    borderBottom: `1px solid ${colors.warmGray[200]}`,
  },
  navContent: {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
    flexWrap: 'wrap' as const,
    gap: '1rem',
  },
  navContentMobile: {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
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
  background-color: ${colors.sage[600]};
  color: white;
  border: none;
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.btn-primary:hover {
  background-color: ${colors.sage[700]};
  box-shadow: 0 10px 25px rgba(107, 148, 79, 0.25);
  transform: scale(1.03);
}

.btn-primary:focus {
  outline: 2px solid ${colors.sage[600]};
  outline-offset: 3px;
  box-shadow: 0 10px 25px rgba(107, 148, 79, 0.25);
}

.btn-primary:active {
  transform: scale(0.98);
  box-shadow: 0 4px 12px rgba(107, 148, 79, 0.15);
  background-color: ${colors.sage[700]};
}

/* OUTLINE BUTTON: Enhanced states with better feedback */
.btn-outline {
  transition: all 0.15s ease-out;
  background-color: transparent;
  color: ${colors.sage[600]};
  border: 2px solid ${colors.sage[600]};
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.btn-outline:hover {
  background-color: ${colors.sage[50]};
  border-color: ${colors.sage[700]};
  color: ${colors.sage[700]};
  box-shadow: 0 4px 12px rgba(107, 148, 79, 0.12);
  transform: scale(1.02);
}

.btn-outline:focus {
  outline: 2px solid ${colors.sage[600]};
  outline-offset: 3px;
  box-shadow: 0 4px 12px rgba(107, 148, 79, 0.12);
}

.btn-outline:active {
  background-color: ${colors.sage[50]};
  border-color: ${colors.sage[700]};
  color: ${colors.sage[700]};
  transform: scale(0.98);
  box-shadow: 0 2px 6px rgba(107, 148, 79, 0.1);
}

/* LINK BUTTONS: Subtle hover with underline enhancement */
.btn-link {
  transition: all 0.15s ease-out;
  color: ${colors.sage[600]};
  text-decoration: none;
  border-bottom: 2px solid ${colors.sage[600]};
  outline: 2px solid transparent;
  outline-offset: 2px;
  cursor: pointer;
}

.btn-link:hover {
  color: ${colors.sage[700]};
  border-bottom-color: ${colors.sage[700]};
}

.btn-link:focus {
  outline: 2px solid ${colors.sage[600]};
  outline-offset: 3px;
}

.btn-link:active {
  opacity: 0.85;
  transform: scale(0.98);
}

/* NicheGrid card hover effects - works on both mouse and touch */
.niche-card {
  transition: all 0.3s ease;
}

.niche-card:hover {
  transform: translateY(-8px);
  background-color: ${colors.sage[50]};
  box-shadow: 0 20px 40px -10px rgba(107, 148, 79, 0.12);
}

.niche-card:active {
  transform: translateY(-8px);
  background-color: ${colors.sage[50]};
  box-shadow: 0 20px 40px -10px rgba(107, 148, 79, 0.12);
}

.niche-card:focus-within {
  outline: 2px solid ${colors.sage[600]};
  outline-offset: 2px;
}

/* Arrow animation on hover/active */
.explore-arrow {
  display: inline-block;
  transition: all 0.3s ease;
  color: ${colors.sage[600]};
}

.niche-card:hover .explore-arrow,
.niche-card:active .explore-arrow {
  color: ${colors.sage[700]};
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
