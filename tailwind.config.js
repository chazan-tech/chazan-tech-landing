/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          DEFAULT: '#2F4F4F',
          light:   '#3a6060',
          darker:  '#1e3535',
        },
        electric: {
          DEFAULT: '#00CED1',
          light:   '#33D6D9',
          dark:    '#00A8AB',
          muted:   'rgba(0,206,209,0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.65s ease-out forwards',
        'fade-in':    'fadeIn 0.65s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow':  'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'electric-sm': '0 0 12px rgba(0,206,209,0.3)',
        'electric':    '0 0 24px rgba(0,206,209,0.45)',
        'electric-lg': '0 0 40px rgba(0,206,209,0.55)',
      },
    },
  },
  plugins: [],
}
