import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        charcoal: '#0D0D0D',
        gold: '#C6A667',
        white: '#FFFFFF',
        neutral: {
          1000: '#000000',
          900: '#101010',
          800: '#1A1A1A',
          500: '#71717A',
          200: '#E4E4E7',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'Satoshi', 'sans-serif'],
        sans: ['var(--font-ibm-arabic)', 'IBM Plex Sans Arabic', 'sans-serif'],
        mono: ['var(--font-ibm-mono)', 'IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['98px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['48px', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h3': ['32px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'ui': ['14px', { lineHeight: '1.4', letterSpacing: '0.03em' }],
        'caption': ['12px', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '48px',
        'xl': '96px',
        'xxl': '160px',
      },
      boxShadow: {
        'luxury': '0 4px 24px rgba(0, 0, 0, 0.25)',
        'gold': '0 0 20px rgba(198, 166, 103, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'stagger': 'stagger 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        stagger: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
