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
    /* Light card shadow hierarchy */
    boxShadow: '0 1px 3px rgba(63, 57, 53, 0.05), 0 2px 6px rgba(63, 57, 53, 0.08)',
    padding: '2rem',
    border: `1px solid ${colors.warmGray[200]}`,
    transition: 'all 0.3s ease',
  },
  cardHover: {
    /* Focused card shadow hierarchy - elevated */
    boxShadow: '0 4px 12px rgba(63, 57, 53, 0.08), 0 8px 24px rgba(63, 57, 53, 0.12)',
  },
  floatingElement: {
    boxShadow: '0 10px 30px rgba(63, 57, 53, 0.15), 0 4px 12px rgba(63, 57, 53, 0.1)',
    transition: 'all 0.3s ease',
  },
  sectionGradientWarm: {
    background: 'linear-gradient(180deg, var(--sage-50) 0%, white 100%)',
  },
  sectionGradientSubtle: {
    background: 'linear-gradient(180deg, var(--warm-gray-50) 0%, white 100%)',
  },
  sectionGradientReverse: {
    background: 'linear-gradient(180deg, white 0%, var(--sage-50) 100%)',
  },
}

// Global CSS styles for hover effects that work on touch & mouse
export const globalStyles = `
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

/* Outline button hover effect - works on both mouse and touch */
.btn-outline {
  transition: all 0.3s ease;
  background-color: transparent;
  color: ${colors.sage[600]};
  border: 2px solid ${colors.sage[600]};
}

.btn-outline:hover {
  background-color: ${colors.sage[50]};
  border-color: ${colors.sage[700]};
  color: ${colors.sage[700]};
}

.btn-outline:active {
  background-color: ${colors.sage[50]};
  border-color: ${colors.sage[700]};
  color: ${colors.sage[700]};
}
`
