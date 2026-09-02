import type { Config } from 'tailwindcss'

/**
 * Rainuka Therapy - Design System (UPDATED PALETTE)
 * 
 * ✅ ALL 7 COLORS NOW FULLY INTEGRATED:
 * - Primary Button: CB997E (Bronze) + dark text
 * - Secondary Actions: DDBEA9 (Sand) + dark text
 * - Accent/Highlights: EDDCD2 (Petal) + dark text or as light BG
 * - Light Backgrounds: FFF1E6 (Linen)
 * - Default Background: F0EFEB (Parchment)
 * - Text/Borders (Dark): A5A58D (Sage), B7B7A4 (Ash)
 *
 * WCAG Contrast Notes:
 * - All 7 colors have EXCELLENT contrast with dark text (#333)
 * - Use 600/700 shades on light backgrounds for UI elements
 * - Petal/Sand are best for background + dark text (not text on white)
 * - Primary Bronze (500) suitable for buttons with white/dark text
 *
 * Rule of thumb: no raw Tailwind palette colors (blue/emerald/rose/amber/
 * purple/slate/gray/...) anywhere in app/ or components/.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ---- Brand primary - BRONZE #CB997E ✅ OFFICIAL -----------------------------------------------
        'primary-bronze': {
          50: '#f9f6f3',
          100: '#f1ebe5',
          200: '#e8dfd6',
          300: '#ddd0c5',
          400: '#d6bfb1',
          500: '#CB997E',
          600: '#c08470',
          700: '#b37062',
          800: '#9e5c4a',
          900: '#8a4937',
        },
        // ---- Secondary - DESERT SAND #DDBEA9 -----------------------------------------------
        'secondary-sand': {
          50: '#faf9f7',
          100: '#f3ede8',
          200: '#ede4dd',
          300: '#e6d9d0',
          400: '#decdc3',
          500: '#DDBEA9',
          600: '#d4a993',
          700: '#c89577',
          800: '#b5805e',
          900: '#a36b45',
        },
        // ---- Accent POWDER PETAL #EDDCD2 -----------------------------------------------
        'accent-petal': {
          50: '#fefdfb',
          100: '#fdf8f5',
          200: '#fdf0eb',
          300: '#fce8e1',
          400: '#fbe0d7',
          500: '#EDDCD2',
          600: '#e5cfc2',
          700: '#dcc1b0',
          800: '#d1b0a0',
          900: '#c49680',
        },
        // ---- Light LINEN #FFF1E6 -----------------------------------------------
        'light-linen': {
          50: '#fffef9',
          100: '#fffcf3',
          200: '#fffaf0',
          300: '#fff8ed',
          400: '#fff5e9',
          500: '#FFF1E6',
          600: '#ffecd0',
          700: '#ffe6b9',
          800: '#ffdfa0',
          900: '#ffd885',
        },
        // ---- Background PARCHMENT #F0EFEB -----------------------------------------------
        'bg-parchment': {
          50: '#faf9f8',
          100: '#f6f5f2',
          200: '#f3f1ed',
          300: '#f0ede8',
          400: '#ede9e3',
          500: '#F0EFEB',
          600: '#e8e6e0',
          700: '#dfded8',
          800: '#d5d3cc',
          900: '#ccc9c2',
        },
        // ---- Neutrals - DRY SAGE #A5A58D -----------------------------------------------
        'neutral-sage': {
          50: '#f8f8f5',
          100: '#f0eee8',
          200: '#e8e5de',
          300: '#dfdcd3',
          400: '#d7d3c8',
          500: '#A5A58D',
          600: '#99997a',
          700: '#8d8d67',
          800: '#808054',
          900: '#737341',
        },
        // ---- Neutrals - ASH GREY #B7B7A4 -----------------------------------------------
        'neutral-ash': {
          50: '#faf9f7',
          100: '#f3f2ee',
          200: '#ede9e3',
          300: '#e6e1d8',
          400: '#dfdacf',
          500: '#B7B7A4',
          600: '#aaaa93',
          700: '#9d9d82',
          800: '#909071',
          900: '#838360',
        },
        // ---- LEGACY ALIASES (for backward compatibility) -----------------------------------------------
        // burgundy -> primary-bronze
        'burgundy': {
          50: '#f9f6f3',
          100: '#f1ebe5',
          200: '#e8dfd6',
          300: '#ddd0c5',
          400: '#d6bfb1',
          500: '#CB997E',
          600: '#c08470',
          700: '#b37062',
          800: '#9e5c4a',
          900: '#8a4937',
        },

        'alert': {
          50: '#fcf5f3',
          100: '#f5e3dd',
          200: '#e9c7bd',
          300: '#d6a294',
          400: '#c07a68',
          500: '#ab5943',
          600: '#934833',
          700: '#763a2a',
        },
        'warm-accent': {
          light: '#f7e9e1',
          DEFAULT: '#d97757',
          dark: '#c96547',
        },
      },
      backgroundImage: {
        // Sophisticated, barely-there gradients with new palette
        'bronze-mist': 'linear-gradient(135deg, #f9f6f3 0%, #faf9f7 45%, #f1ebe5 100%)',
        'bronze-veil': 'linear-gradient(180deg, #f9f6f3 0%, #ffffff 100%)',
        'bronze-veil-up': 'linear-gradient(180deg, #ffffff 0%, #f9f6f3 100%)',
        'warm-linen': 'linear-gradient(135deg, #FFF1E6 0%, #F0EFEB 50%, #EDDCD2 100%)',
        'warm-veil': 'linear-gradient(180deg, #F0EFEB 0%, #ffffff 100%)',
        'sand-veil': 'linear-gradient(135deg, #DDBEA9 0%, #ffffff 100%)',
        'petal-veil': 'linear-gradient(135deg, #EDDCD2 0%, #ffffff 100%)',
        'linen-veil': 'linear-gradient(135deg, #FFF1E6 0%, #ffffff 100%)',
      },
      fontFamily: {
        'serif': ['var(--font-merriweather)', 'Georgia', 'serif'],
        'sans': ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      // Desktop UX Audit: Button and form sizing variants
      spacing: {
        'btn-py-sm': '0.625rem',   // 10px (mobile secondary)
        'btn-py-md': '0.875rem',   // 14px (mobile primary)
        'btn-py-lg': '1.125rem',   // 18px (desktop primary)
        'btn-px-sm': '1rem',       // 16px (mobile secondary)
        'btn-px-md': '1.5rem',     // 24px (mobile primary)
        'btn-px-lg': '2rem',       // 32px (desktop primary)
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',   // ADD: Desktop wide
      '2xl': '1536px',  // ADD: Cinema mode
    },
  },
  plugins: [],
}
export default config
