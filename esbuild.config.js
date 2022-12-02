const esbuild = require('esbuild')
const dotenv = require('dotenv')
const { resolve } = require('path')
const glob = require('glob')
const clc = require('cli-color')
const browserslist = require('browserslist')
const { esbuildPluginBrowserslist } = require('esbuild-plugin-browserslist')

dotenv.config()

const theme = process.env.THEME
const publicDir = process.env.PUBLIC_DIR

const files = glob.sync("./src/ts/*.{ts,tsx}")

esbuild.build({
  entryPoints: files,
  outdir: resolve(__dirname, `${publicDir}/wp-content/themes/${theme}/js`),
  bundle: true,
  sourcemap: true,
  plugins: [
    esbuildPluginBrowserslist(browserslist('defaults'), {
      printUnknownTargets: false,
    }),
  ]
})
.then(result => {
  console.log(clc.green('JavaScript bundled successfully!'))
  console.log(result)
})
.catch(error => {
  console.log(clc.red('JavaScript bundle failed.'))
  console.log(error)
  process.exit(1)
})