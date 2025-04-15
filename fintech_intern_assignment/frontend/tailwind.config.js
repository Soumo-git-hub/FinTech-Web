/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        'secondary': {
          500: '#EC4899',
          600: '#DB2777',
        },
      },
    },
  },
  plugins: [],
}