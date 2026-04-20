/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-forest': '#163020',
        'soft-cream': '#EEF0E5',
        'hunter-green': '#304D30',
        'sage-mist': '#B6C4B6',
      },
    },
  },
  plugins: [],
}
