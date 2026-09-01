import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sage': {
          50: '#f8faf7',
          100: '#e8ede5',
          200: '#d1dcc8',
          300: '#b5c7aa',
          400: '#9dbb8d',
          500: '#82a86c',
          600: '#6b944f',
          700: '#547c3f',
        },
        'warm-gray': {
          50: '#faf9f7',
          100: '#ede8e3',
          200: '#ddd4cc',
          300: '#c9b8ac',
          600: '#7a6f68',
          700: '#5e534a',
          900: '#3f3935',
        },
        'cream': {
          50: '#fdfbf8',
          100: '#f5f0eb',
        },
        'warm-accent': {
          light: '#f5ede6',
          DEFAULT: '#d97757',
          dark: '#c96547',
        },
      },
      fontFamily: {
        'serif': ['var(--font-merriweather)', 'Georgia', 'serif'],
        'sans': ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
