const express = require('express')
const PetModel = require('../../models/wags_model')
const multer = require('multer')
const mongoose = require('mongoose')
//All files will be stored in uploads folder

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads')
	},
	filename: function(req, file, cb) {
		cb(null, Date.now() + file.originalname)
	}
})

const fileFilter = (req, file, cb) => {
	//reject a file
	if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png'
		|| file.mimetype == 'image/gif') {
		cb(null, true)
	} else {
		cb(null, false)
	}
}

const upload = multer({
	storage,
	limits : {
		fileSize: 1024 * 1024 * 10
  },
	fileFilter
})

const router = express.Router()

//Find All
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

//Find One 	Ex: localhost:8000/find?name=pebz
router.get('/find', (req, res) => {

	if (!req.query.name)
		return res.status(400).send('Missing url parameter: name')


	PetModel.find({
		name : req.query.name
	}).then(doc => {
		res.json(doc);
	}).catch(err => {
		res.status(500).json(err);
	});
});

//How to do queries
/* router.get('/:breed', (req, res) => {
	res.send(`You have requested a breed ${req.params.breed}`)
});*/

//Create a new pet
router.put('/add', upload.single('petImage'), async (req, res, next) => {
	if (!req.body)
		return res.status(400).send('Request body is missing')

	const { body, file } = req


		const model = new PetModel({
		  _id : new mongoose.Types.ObjectId(),
		  name : body.name,
		  gender: body.gender,
		  age: body.age,
		  breeds: body.breeds,
		  description: body.description,
		  petImage: file.path
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

//Update an existing pet
router.put('/update', function(req, res) {
  PetModel.findOneAndUpdate({
    description: req.query.description
  }, req.body, {
    new: true
  }).then(doc => {
    res.json(doc);
  }).catch(err => {
    res.status(500).json(err);
  });
});

//Delete an existing pet
router.delete('/delete', function(req, res) {
  PetModel.findOneAndRemove({
    _id: req.query.id
  }).then(doc => {
    res.json(doc);
  }).catch(err => {
    res.status(500).json(err);
  });
});

module.exports = router;
