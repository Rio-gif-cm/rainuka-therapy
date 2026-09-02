import type { Config } from 'tailwindcss'

/**
 * Wonderloud Therapy - Design System (TEST PALETTE)
 *
 * TEST: Burgundy (primary), Deep Gray (secondary), Sea Blue (accents)
 * Warm-gray/cream carry neutrals.
 * Four low-chroma persona accents provide differentiation.
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
        // ---- Brand primary - BURGUNDY ✅ OFFICIAL -----------------------------------------------
        'burgundy': {
          50: '#f7f3f4',
          100: '#ede3e5',
          200: '#d9bfc5',
          300: '#c19b9f',
          400: '#a8707f',
          500: '#8a4f61',
          600: '#6d3a47',
          700: '#58303a',
          800: '#482a32',
          900: '#3c222a',
        },
        // ---- Neutrals ------------------------------------------------------
        'warm-gray': {
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
        'cream': {
          50: '#fdfbf8',
          100: '#f5f0eb',
          200: '#ebe3da',
          300: '#ded3c6',
        },
        // ---- Persona accents (muted, low chroma) ---------------------------
        // deep-gray - secondary contrast, grounded
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
        // sea-blue - cool accent, calming
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
        // blue-herring (optional) - subtle teal-blue
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
        // clay - warmth, invitation, couples & CTAs
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
        // dusk - steady, grounded; men, ADHD, grief, informational notes
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
        // honey - ochre warmth; career, seasonal, caution
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
        // blush - tender mauve; perinatal, testimonials
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
        // ---- Semantic ------------------------------------------------------
        // alert - muted brick. The only "red" in the system.
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
        // Legacy alias kept so existing `warm-accent` usages keep resolving.
        'warm-accent': {
          light: '#f7e9e1',
          DEFAULT: '#d97757',
          dark: '#c96547',
        },
      },
      backgroundImage: {
        // Sophisticated, barely-there gradients. Nothing above ~8% chroma shift.
        "burgundy-mist': 'linear-gradient(135deg, #faf9f7 0%, #f8faf7 45%, #e8ede5 100%)',
        "burgundy-veil': 'linear-gradient(180deg, #f8faf7 0%, #ffffff 100%)',
        "burgundy-veil-up': 'linear-gradient(180deg, #ffffff 0%, #f8faf7 100%)',
        'warm-linen': 'linear-gradient(135deg, #fdfbf8 0%, #faf9f7 50%, #f5f0eb 100%)',
        'warm-veil': 'linear-gradient(180deg, #faf9f7 0%, #ffffff 100%)',
        'clay-veil': 'linear-gradient(135deg, #fdf7f4 0%, #ffffff 100%)',
        'dusk-veil': 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)',
        'honey-veil': 'linear-gradient(135deg, #fdf9f1 0%, #ffffff 100%)',
        'blush-veil': 'linear-gradient(135deg, #fcf6f6 0%, #ffffff 100%)',
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
