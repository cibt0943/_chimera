const colors = require('tailwindcss/colors')

// font familyを"Quicksand,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'"に

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
      spacing: {
        // 12: '2.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      'light', // first one will be the default theme
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
    ],
  },
}
