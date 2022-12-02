const dotenv = require('dotenv')
const glob = require('glob')
const {basename} = require('path')
const { existsSync, mkdir } = require('fs')
const sharp = require('sharp')
const clc = require('cli-color')

dotenv.config()

const theme = process.env.THEME
const publicDir = process.env.PUBLIC_DIR
const outDir = `${publicDir}/wp-content/themes/${theme}/images/`

const images = glob.sync('./src/images/*.{jpg,jpeg,png,gif}')
const sizes = [1536, 1280, 1024, 768, 680]

if (images.length > 0) {
  if(!existsSync(outDir)) {
    mkdir(outDir, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log(clc.green(`Directory created successfully!`))
    })
  }
  images.every(async i => {
      const image = await sharp(i)
      const metaData = await image.metadata()
      const format = metaData.format
      const width = metaData.width
      const fileName = basename(i, `.${format}`)
      sizes.forEach(size => {
          image.toFile(`${outDir}/${fileName}.${format}`)
          if (width > size) {
              image
              .resize({
                  width: size
              })
              .toFile(`${outDir}/${fileName}-${size}.${format}`)
              console.log(clc.green(`${fileName}-${size} created successfully!`))
          }
      })
  })
} else {
    console.log(clc.yellow(`images folder is empty`))
}