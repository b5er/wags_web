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
						description: 'Retrieve one pet.',
						url: `${process.env.HOST}/api/pets/${pet._id}`
					}
				}
			})
		}

		res.send(response)

	} catch(e) {
		res.status(500).send({ message: `${e}` })
	}

})

router.get('/:petID', async (req, res) => {

	const { params: { petID } } = req

	try {

		const pet = await Pet.findById(petID).select('_id name gender age breeds description cloudStorageObject location adopted createdAt')

		if (!pet)
			return res.status(404).send({ message: 'Pet could not be found.' })

		const response = {
			pet,
			request: {
				type: 'GET',
				description: 'Retrieve all pets.',
				url: `${process.env.HOST}/api/pets`
			}
		}

		res.send(response)

	} catch(e) {
		res.status(500).send({ message: `${e}` })
	}

})

router.post('/', images.upload, images.uploadToGCS, async (req, res) => {

	if (!req.file || !req.file.cloudStoragePublicUrl)
		return res.status(500).send({ message: 'Image field required.' })

	if (req.file.cloudStorageError)
		return res.status(500).send({ message: req.file.cloudStorageError })

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
					description: 'Retrieve one pet.',
					url: `${process.env.HOST}/api/pets/${doc._id}`
				}
			}
		})

	} catch(e) {
		res.status(500).send({ message: `${e}` })
	}

})

router.patch('/:petID', images.upload, images.updateGCS, async (req, res) => {

	if (req.file.cloudStorageError)
		return res.status(500).send({ message: req.file.cloudStorageError })

	const { params: { petID }, body, file } = req
	const updateOps = {}

	try {

		if (file) {
			const { originalname, cloudStorageObject, cloudStoragePublicUrl } = file
			if (originalname && cloudStorageObject && cloudStoragePublicUrl) {
				updateOps['originalname'] = originalname,
				updateOps['cloudStorageObject'] = cloudStorageObject,
				updateOps['cloudStoragePublicUrl'] = cloudStoragePublicUrl
			}
		} else {
			for (const ops of body)
				updateOps[ops.propName] = ops.value
		}

		const pet = await Pet.updateOne({ _id: petID }, { $set: updateOps })
		res.send({
			message: 'Pet updated.',
			request: {
				type: 'GET',
				description: 'Retrieve one pet.',
				url: `${process.env.HOST}/api/pets/${pet._id}`
			}
		})

	} catch(e) {
		res.status(500).send({ message: `${e}` })
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
				description: 'Create a pet.',
				url: `${process.env.HOST}/api/pets`,
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
		res.status(500).send({ message: `${e}` })
	}

})

module.exports = router
