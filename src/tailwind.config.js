/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        forest:  '#163020',
        cream:   '#EEF0E5',
        hunter:  '#304D30',
        sage:    '#B6C4B6',
        topbar:  '#0c1910',
      },
      borderRadius: {
        DEFAULT: '0px',
        none:    '0px',
        sm:      '2px',
      },
      keyframes: {
        'count-up':   { from: { opacity: 0 }, to: { opacity: 1 } },
        'reveal-up':  { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        'pulse-dot':  { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.3 } },
        'ticker':     { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        'reveal-up':  'reveal-up 0.6s ease forwards',
        'pulse-dot':  'pulse-dot 1.4s ease infinite',
        'ticker':     'ticker 28s linear infinite',
      },
    },
  },
  plugins: [],
}
