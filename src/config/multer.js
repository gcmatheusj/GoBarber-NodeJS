const path = require('path')
const crypto = require('crypto')
const multer = require('multer')

module.exports = {
  storage: multer.diskStorage({
    // Destination refere-se ao caminho em que os arquivos serão salvos
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (error, raw) => {
        if (error) return callback(error)

        // Ex: 1745D1745D.jpg
        callback(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })
}
