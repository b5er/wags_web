const express = require('express')
const PetModel = require('../../models/wags_model')
const multer = require('multer')
const mongoose = require('mongoose')

/* For Future Reference (mainly for Mike),
 * here are some type of expansion calls that one could do:

	 Find One -	Ex: localhost:8000/find?name=pebz

   How to send something back to the front-end
	 router.get('/:breed', (req, res) => {
	 	res.send(`You have requested a breed ${req.params.breed}`)
		})
*/

//All image files will be stored in uploads/ folder
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads')
	},
	filename: function(req, file, cb) {
		cb(null, `${Date.now()}${file.originalname}`)
	}
})

const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'
		|| file.mimetype === 'image/gif') {
		cb(null, true)
	} else {
		// rejects a file
		cb(null, false)
	}
}

const upload = multer({
	storage,
	limits: {
		fileSize: 1024 * 1024 * 10 // 10 MB
  },
	fileFilter
})

const router = express.Router()

router.get('/findAll', async (req, res) => {
	try {
		const pets = await PetModel.find({})
		let petMap = []
		pets.forEach(pet => petMap.push(pet))
		res.send(petMap)
	} catch(e) {
		res.status(500).json(e)
	}
})

router.put('/add', upload.single('petImage'), async (req, res, next) => {
	if (!req.body)
		return res.status(400).send('Request body is missing')

	const { body: { name, gender, age, breeds, description }, file: { path } } = req

	const model = new PetModel({
	  _id : new mongoose.Types.ObjectId(),
	  name,
	  gender,
	  age,
	  breeds,
	  description,
	  petImage: path
	})

	try {
		const doc = await model.save()
		if(!doc || doc.length === 0)
			return res.status(500).send(doc)
		res.status(201).send(doc)
	} catch(e) {
		res.status(500).json(e)
	}
})

router.delete('/delete', function(req, res) {
  PetModel.findOneAndRemove({
    _id: req.query.id
  }).then(doc => {
    res.json(doc)
  }).catch(err => {
    res.status(500).json(err)
  })
})

module.exports = router
