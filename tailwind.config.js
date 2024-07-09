/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        primary: '#FF0000',
        secondary: '#6D6D6D',
      },
      fontFamily: {
        'futura': ['futura', 'sans-serif'],
      },
    },
  },
  plugins: [],
}