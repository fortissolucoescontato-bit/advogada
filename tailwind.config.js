/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          DEFAULT: '#0F172A',
          dark: '#172554',
        },
        'gold': {
          DEFAULT: '#D4AF37',
          accent: '#F59E0B',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

