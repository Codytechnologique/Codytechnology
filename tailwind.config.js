/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#1E3A8A',
        black: '#000000',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}