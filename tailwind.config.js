/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'inter': ['Inter, sans-serif'],
    },
    extend: {
      backgroundImage: {
        'portfolio1': "url('./images/portfolio.png')",
      },
      maxWidth: {
        container: '1170px'
      },
    },
  },
  plugins: [],
}