const express = require('express')
const Pet = require('../../models/pet')
const mongoose = require('mongoose')
const images = require('../../utils/images')
const router = express.Router()


router.get('/', async (req, res) => {
	try {

		const pets = await Pet.find().select('_id name gender age breeds description cloudStorageObject location createdAt')

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
					location: pet.location,
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

router.post('/', images.upload.single('petImage'), images.uploadToGCS, async (req, res) => {
	if (!req.body)
		return res.status(500).send('Request body is missing.')

	if (!req.file || !req.file.cloudStoragePublicUrl)
		return res.status(500).send('Image field required.')

	const {
		body: { name, gender, age, breeds, description },
		file: { originalname, cloudStorageObject, cloudStoragePublicUrl }
	} = req


	const model = new Pet({
	  _id: new mongoose.Types.ObjectId(),
	  name,
	  gender,
	  age,
	  breeds,
	  description,
		originalname,
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
		res.status(500).send({ message: e })
	}
})

router.delete('/:petID', images.deleteFromGCS, async (req, res) => {
	const { params: { petID } } = req

	try {
		const pet = await Pet.deleteOne({ _id: petID })
		res.send({
			message: 'Pet deleted.',
			request: {
				type: 'POST',
				url: `${process.env.HOST}/pets`,
				body: {
					name: 'String',
					gender: 'String',
					age: 'Number',
					breeds: '[String]',
					description: 'String',
					location: 'String',
					originalname: 'String',
					cloudStorageObject: 'String',
					cloudStoragePublicUrl: 'String',
					adopted: 'Boolean',
					createdAt: 'Date'
				}
			}
		})
	} catch(e) {
		console.log(e)
		res.status(500).send({ message: e })
	}
})

module.exports = router
