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
        neutral: {
          1000: '#000000',
          900: '#101010',
          800: '#1A1A1A',
          500: '#71717A',
          200: '#E4E4E7',
        },
        primary: {
          500: '#00FFFF',
        },
        secondary: {
          500: '#4F00BC',
        },
        success: {
          500: '#22C55E',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
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
        'glow-cyan': '0 0 24px 0px rgba(0, 255, 255, 0.4)',
        'glow-violet': '0 0 48px 0px rgba(79, 0, 188, 0.3)',
        'glow-input': '0 4px 12px -4px rgba(0, 255, 255, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
