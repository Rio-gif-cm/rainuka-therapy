import type { Config } from 'tailwindcss'

/**
 * Rainuka Therapy - Design System (UPDATED PALETTE)
 *
 * Primary: CB997E (light bronze primary)
 * Secondary: DDBEA9 (desert sand)
 * Tertiary: EDDCD2 (powder petal)
 * Light: FFF1E6 (linen)
 * Background: F0EFEB (parchment)
 * Neutrals: A5A58D (dry sage), B7B7A4 (ash grey)
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
        // Persona accents (muted, low chroma) - KEPT FOR REFERENCE
        'deep-gray': {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#c8c8c8',
          300: '#b0b0b0',
          400: '#909090',
          500: '#6b6b6b',
          600: '#555555',
          700: '#424242',
          800: '#333333',
          900: '#1f1f1f',
        },
        'sea-blue': {
          50: '#f0f7fa',
          100: '#dde9f0',
          200: '#b8d8e3',
          300: '#8ec0d3',
          400: '#5fa5c0',
          500: '#3d8aa8',
          600: '#2d7390',
          700: '#1f5a73',
          800: '#14435b',
          900: '#0c2d43',
        },
        'blue-herring': {
          50: '#f2f9f8',
          100: '#ddf1f0',
          200: '#b3e0dd',
          300: '#89ccc8',
          400: '#56b3ad',
          500: '#3d9a94',
          600: '#2d827f',
          700: '#1f6a68',
          800: '#125250',
          900: '#0a3a38',
        },
        'clay': {
          50: '#fdf7f4',
          100: '#f7e9e1',
          200: '#eed6c8',
          300: '#e3b79f',
          400: '#dd9877',
          500: '#d97757',
          600: '#c96547',
          700: '#a5503a',
          800: '#83402f',
        },
        'dusk': {
          50: '#f5f7fa',
          100: '#e6ecf3',
          200: '#ccd8e5',
          300: '#a8bcd1',
          400: '#7f9bb8',
          500: '#61809f',
          600: '#4d6a86',
          700: '#3f566d',
          800: '#334458',
        },
        'honey': {
          50: '#fdf9f1',
          100: '#f7eedc',
          200: '#eedfc0',
          300: '#e0c79a',
          400: '#d4a574',
          500: '#c08f5c',
          600: '#a3764a',
          700: '#84603c',
          800: '#684b30',
        },
        'blush': {
          50: '#fcf6f6',
          100: '#f4e6e6',
          200: '#e8cecd',
          300: '#d6adac',
          400: '#c08e8d',
          500: '#a87372',
          600: '#8c5c5b',
          700: '#714a49',
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
