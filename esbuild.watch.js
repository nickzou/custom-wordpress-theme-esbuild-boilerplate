const esbuild = require('esbuild')
const dotenv = require('dotenv')
const { resolve } = require('path')
const glob = require('glob')

dotenv.config()

const theme = process.env.THEME
const publicDir = process.env.PUBLIC_DIR

const files = glob.sync("./src/ts/*.{ts,tsx}")

esbuild.build({
    entryPoints: files,
    outdir: resolve(__dirname, `${publicDir}/wp-content/themes/${theme}/js`),
    bundle: true,
    minify: false,
    sourcemap: true,
    watch: {
        onRebuild(error, result) {
            if(error) console.error('watch build failed:', error)
            else {
                console.log('watch build succeeded:', result)
            }
        }
    }
})
.then(result => {
    console.log('watching...', result)
})