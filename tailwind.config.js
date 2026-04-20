/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Đây là dòng lệnh cho Tailwind quét vào tận trong folder sections
  ],
  theme: {
    extend: {
      colors: {
        'deep-forest': '#163020',
        'soft-cream': '#EEF0E5',
        'hunter-green': '#304D30',
        'sage-mist': '#B6C4B6',
      },
      backgroundImage: {
        'hero-gradient': "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(48,77,48,0.18) 0%, transparent 65%)",
      }
    },
  },
  plugins: [],
}
