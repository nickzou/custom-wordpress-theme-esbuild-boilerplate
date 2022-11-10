const esbuild = require('esbuild')
const dotenv = require('dotenv')
const { resolve } = require('path')
const glob = require('glob')
const chalk = require('chalk')

dotenv.config()

const theme = process.env.THEME
const publicDir = process.env.PUBLIC_DIR

const files = glob.sync("./src/ts/*.{ts,tsx}")

esbuild.build({
    entryPoints: files,
    outdir: resolve(__dirname, `${publicDir}/wp-content/themes/${theme}/js`),
    bundle: true,
    minify: true,
    sourcemap: false
})
.then(result => {
    console.log(chalk.green('JavaScript bundled successfully!'))
    console.log(result)
})
.catch(error => {
    console.log(chalk.red('JavaScript bundle failed.'))
    console.log(error)
})