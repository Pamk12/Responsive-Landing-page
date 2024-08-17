const { BiFontFamily } = require('react-icons/bi');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    "./src/**/*.{html,js,jsx}",
    "./index.html",
  ],
  extend: {
       fontFamily:{
        playfair:"'Plarfair Display, serif'",
        lato:"'lato, sans-serif'",
       }
  }
  // ...
}
