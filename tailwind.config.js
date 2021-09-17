const colors = require('tailwindcss/colors')

// font familyを"Quicksand,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'"に

module.exports = {
  prefix: 'tw-',
  purge: ['frontend/**/*.{tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  plugins: [require('@tailwindcss/typography')],
}
