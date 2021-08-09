const colors = require('tailwindcss/colors')

module.exports = {
  prefix: 'tw-',
  purge: ['frontend/**/*.{tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // blueGray: colors.blueGray,
        // rose: colors.rose,
        // orange: colors.orange,
        // primary: colors.orange,
        // secondary: colors.blueGray,
        // danger: colors.rose,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
