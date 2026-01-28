/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#020617', // Main background
          900: '#0f172a', // Card background
          800: '#1e293b', // Input background
          700: '#334155', // Borders
        }
      }
    },
  },
  plugins: [],
}