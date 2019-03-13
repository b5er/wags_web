const express = require('express')
const Pet = require('../../models/pet')
const mongoose = require('mongoose')
const images = require('../../utils/images')
const router = express.Router()


router.get('/', async (req, res) => {
	try {

		const pets = await Pet.find().select('_id name gender age breeds description cloudStorageObject createdAt')

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
					petImage: pet.cloudStorageObject,
					createdAt: pet.createdAt,
					request: {
						type: 'GET',
						url: `${process.env.HOST}/pets/${pet._id}`
					}
				}
			})
		}

		res.send(response)

	} catch(e) {
		res.status(500).send(e)
	}
})

router.put('/', images.upload.single('petImage'), images.uploadToGCS, async (req, res, next) => {
	if (!req.body)
		return res.status(500).send('Request body is missing.')

	if (!req.file || !req.file.cloudStoragePublicUrl)
		return res.status(500).send('Image field required.')

	const {
		body: { name, gender, age, breeds, description },
		file: { cloudStorageObject, cloudStoragePublicUrl }
	} = req

	const model = new Pet({
	  _id: new mongoose.Types.ObjectId(),
	  name,
	  gender,
	  age,
	  breeds,
	  description,
	  cloudStorageObject,
		cloudStoragePublicUrl
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
		res.status(500).send(e)
	}
})

router.delete('/', function(req, res) {
  Pet.findOneAndRemove({
    _id: req.query.id
  }).then(doc => {
    res.json(doc)
  }).catch(err => {
    res.status(500).send(err)
  })
})

module.exports = router
