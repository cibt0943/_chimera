const colors = require('tailwindcss/colors')

// font familyを"Quicksand,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'"に

module.exports = {
  prefix: 'tw-',
  // content: ['src/**/*.{tsx}'],
  content: ['src/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
