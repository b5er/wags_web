const { Storage } = require('@google-cloud/storage')


const getPublicUrl = filename => {
  return `https://storage.googleapis.com/${process.env.GOOGLE_BUCKET_NAME}/${filename}`
}

const uploadToGCS = async (req, res, next) => {
  if (!req.file)
    return next()

  const storage = new Storage()

  try {
    const bucket = await storage.bucket(`${process.env.GOOGLE_BUCKET_NAME}`)
    const gcs = Date.now() + req.file.originalname
    const file = bucket.file(gcs)

    const stream = file.createWriteStream({
      metadata: {
        contentType: req.file.mimetype
      },
      resumable: false
    })

    stream.on('error', err => {
      req.file.cloudStorageError = err
      next(err)
    })

    stream.on('finish', async () => {
      req.file.cloudStorageObject = gcs
      try {
        const publicFile = await file.makePublic()
        req.file.cloudStoragePublicUrl = getPublicUrl(gcs)
        next()
      } catch(e) {
        console.log(e)
      }
    })

    stream.end(req.file.buffer)

  } catch(e) {
    console.log(e)
  }

}

const Multer = require('multer')
const upload = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 1024 * 1024 * 10 // 10mb max
  }
})

module.exports = {
  getPublicUrl,
  uploadToGCS,
  upload
}
