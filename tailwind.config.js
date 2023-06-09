
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/./pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {},
  },
  plugins: [],
}