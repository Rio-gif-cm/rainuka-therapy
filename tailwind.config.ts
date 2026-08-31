import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm therapeutic palette based on research
        'sage': {
          50: '#f7f9f7',
          100: '#eff3ef',
          200: '#dfe8df',
          300: '#c9d9ca',
          400: '#9CAF88', // Primary sage green
          500: '#7a9d70',
          600: '#5f8b5a',
          700: '#4a7046',
          800: '#3d5938',
          900: '#2d422a',
        },
        'warm-gray': {
          50: '#faf9f8',
          100: '#f5f3f0',
          200: '#ede8e4',
          300: '#dfd7d0',
          400: '#8B8680', // Primary warm gray
          500: '#7a7169',
          600: '#685f56',
          700: '#524940',
          800: '#3f3935',
          900: '#2a2622',
        },
        'cream': {
          50: '#fffef8',
          100: '#fffbf0',
          200: '#fff8e8',
          300: '#fff4dc',
          400: '#fff0cf',
          500: '#ffe8b8',
        },
        'warm-accent': {
          light: '#f5e6d3',
          DEFAULT: '#C9B896', // Warm gold
          dark: '#8b7355',
        },
        'coral-soft': '#D97757', // Soft coral for CTAs
      },
      fontFamily: {
        'serif': ['var(--font-merriweather)', 'Georgia', 'serif'],
        'sans': ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1.0625rem', { lineHeight: '1.75' }], // 17px
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }], // 15px
      },
      spacing: {
        'gutter': '2rem',
        'section': '4rem',
        'section-lg': '6rem',
      },
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem',
      },
      minHeight: {
        'hero': '600px',
        'hero-lg': '700px',
      },
    },
  },
  plugins: [],
}
export default config
