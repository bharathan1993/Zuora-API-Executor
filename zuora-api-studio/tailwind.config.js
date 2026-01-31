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
        },
        zuora: {
          50: '#e7f8f4',
          100: '#c9f0e6',
          200: '#9be3d2',
          300: '#78dac4',
          400: '#5ad2b9',
          500: '#3fbba3',
          600: '#2fa08b',
          700: '#24806f',
          800: '#1d6559',
          900: '#154d43',
        },
      }
    },
  },
  plugins: [],
}
