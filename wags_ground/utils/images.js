const { Storage } = require('@google-cloud/storage')
const Pet = require('../models/pet')


const getPublicUrl = filename => {
  return `https://storage.googleapis.com/${process.env.GOOGLE_BUCKET_NAME}/${filename}`
}

const uploadToGCS = async (req, res, next) => {
  if (!req.file)
    return res.status(500).send({ message: 'Unable to access file.' })

  try {

    const { file: { originalname } } = req
    const pet = await Pet.find({ originalname })

		if (pet.length > 0)
			return res.status(500).send({ message: 'Already have pet in the system! Try deleting the duplicate pet.' })


    const storage = new Storage()

    const bucket = await storage.bucket(`${process.env.GOOGLE_BUCKET_NAME}`)
    const fileName = Date.now() + originalname
    const file = bucket.file(fileName)

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
      req.file.cloudStorageObject = fileName
      try {
        const publicFile = await file.makePublic()
        req.file.cloudStoragePublicUrl = getPublicUrl(fileName)
      } catch(e) {
        req.file.cloudStorageError = e
      }
      next()
    })

    stream.end(req.file.buffer)

  } catch(e) {
    res.status(500).send({ message: `${e}` })
  }

}

const updateGCS = async (req, res, next) => {

  if (!req.file)
    return next()

  const { params: { petID }, file: { originalname } } = req

  try {

    const petImage = await Pet.find({ originalname })
    const pet = await Pet.find({ _id: petID })

    if (petImage.length > 0 || pet.length === 0)
      return next() // petImage already exists or there isn't a pet with the specified id

    const storage = new Storage()

    const bucket = await storage.bucket(`${process.env.GOOGLE_BUCKET_NAME}`)
    const fileName = pet[0].cloudStorageObject
    const file = bucket.file(fileName)
    const newFileName = Date.now() + originalname
    const newFile = bucket.file(newFileName)

    await file.delete()

    const stream = newFile.createWriteStream({
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
      req.file.cloudStorageObject = newFileName
      try {

        const publicFile = await newFile.makePublic()
        req.file.cloudStoragePublicUrl = getPublicUrl(newFileName)

      } catch(e) {
        req.file.cloudStorageError = e
      }
      next()
    })

    stream.end(req.file.buffer)

  } catch(e) {
    res.status(500).send({ message: `${e}` })
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
		res.status(500).send({ message: `${e}` })
	}

}

const Multer = require('multer')
const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 1024 * 1024 * 10 // 10mb max
  },
  fileFilter: (req, file, next) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
      next(null, true)
    } else {
      return next(new Error('Incorrect file type.'))
    }
  }
}).single('petImage')

const upload = async (req, res, next) => {
  multer(req, res, err => {
    if (err)
      return res.status(500).send({ message: err.message })
    next()
  })
}


module.exports = {
  getPublicUrl,
  uploadToGCS,
  updateGCS,
  deleteFromGCS,
  upload
}
