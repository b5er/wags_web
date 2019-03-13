const { Storage } = require('@google-cloud/storage')
const Pet = require('../models/pet')


const getPublicUrl = filename => {
  return `https://storage.googleapis.com/${process.env.GOOGLE_BUCKET_NAME}/${filename}`
}

const uploadToGCS = async (req, res, next) => {
  if (!req.file)
    return next()

  try {

    const { file: { originalname } } = req
    const pet = await Pet.find({ originalname })

		if (pet.length > 0)
			return res.status(500).send({ message: 'Already have pet in the system! Try deleting the duplicate pet.' })


    const storage = new Storage()

    const bucket = await storage.bucket(`${process.env.GOOGLE_BUCKET_NAME}`)
    const gcs = Date.now() + originalname
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

const deleteFromGCS = async (req, res, next) => {
  if (!req.params)
    return next()

  const { params: { petID } } = req

  try {

		const pet = await Pet.find({ _id: petID })

		if (pet.length === 0)
			return res.status(500).send({ message: 'No such pet exist!' })

    const storage = new Storage()

    const bucket = await storage.bucket(`${process.env.GOOGLE_BUCKET_NAME}`)
    const file = bucket.file(pet[0].cloudStorageObject)

    await file.delete()
    next()

	} catch(e) {
		res.status(500).send({ message: e })
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
  deleteFromGCS,
  upload
}
