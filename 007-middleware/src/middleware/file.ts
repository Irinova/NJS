import path from "path";

const multer = require('multer')

const storage = multer.diskStorage?.({
  destination(req, file, cb){
    cb(null, __dirname + '/../public/img')
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

module.exports = multer({ storage })
