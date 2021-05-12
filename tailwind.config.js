const defaultTheme = require("tailwindcss");

module.exports = {
  purge: false,
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'rinnegan': "url('/assets/img/6fc8e5b971565a7bb7b5c123c44ed1ce.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
