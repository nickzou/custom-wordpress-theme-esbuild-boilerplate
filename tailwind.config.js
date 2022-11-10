/** @type {import('tailwindcss').Config} */
const dotenv = require('dotenv')

dotenv.config()

const theme = process.env.THEME
const publicDir = process.env.PUBLIC_DIR

module.exports = {
  content: [
    `./${publicDir}/wp-content/themes/${theme}/**/*.{php,twig}`,
    `./src/ts/**/*.ts`
],
  theme: {
    extend: {},
  },
  plugins: [],
}
