const FormKitVariants = require('@formkit/themes/tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./modules/**/*.{html,js,ts,vue}', './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs'],
  theme: {
    extend: {},
  },
  plugins: [FormKitVariants],
}
