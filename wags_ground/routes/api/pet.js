const express = require('express')
const petModel = require('../../models/pet')
const multer = require('multer')
const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production')
	require('dotenv').load()

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

router.get('/', async (req, res) => {
	try {
		const pets = await petModel.find().select('_id name gender age breeds description petImage')
		const response = {
			count: pets.length,
			pets: pets.map(pet => {
				return {
					_id: pet._id,
					name: pet.name,
					gender: pet.gender,
					age: pet.age,
					breeds: pet.breeds,
					description: pet.description,
					petImage: pet.petImage,
					request: {
						type: 'GET',
						url: `${process.env.HOST}/pets/${pet._id}`
					}
				}
			})
		}
		res.send(response)
	} catch(e) {
		res.status(500).json(e)
	}
})

router.put('/', upload.single('petImage'), async (req, res, next) => {
	if (!req.body)
		return res.status(400).send('Request body is missing')

	const { body: { name, gender, age, breeds, description }, file: { path } } = req

	const model = new petModel({
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
		res.status(201).send({
			createdPet: {
				name: doc.name,
				gender: doc.gender,
				age: doc.age,
				breeds: doc.breeds,
				description: doc.description,
				request: {
					type: 'GET',
					url: `${process.env.HOST}/pets/${doc._id}`
				}
			}
		})
	} catch(e) {
		res.status(500).json(e)
	}
})

router.delete('/', function(req, res) {
  petModel.findOneAndRemove({
    _id: req.query.id
  }).then(doc => {
    res.json(doc)
  }).catch(err => {
    res.status(500).json(err)
  })
})

module.exports = router
