
const express = require('express');
const PetModel = require('../../models/wags_model');
const multer = require('multer');
let mongoose = require('mongoose');
//All files will be stored in uploads folder

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads/');
	},
	filename: function(req, file, cb) {
		cb(null, Date.now() + file.originalname);
	}
});

const fileFilter = (req, file, cb) => {
	//reject a file
	if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png'
		|| file.mimetype == 'image/gif') {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({
	storage: storage,
	limits : {
		fileSize: 1024 * 1024 * 10
  },
	fileFilter: fileFilter
});

const router = express.Router();

//Find All
router.get('/findAll', (req, res) => {
	PetModel.find({}).then(pets => {
		var petMap = {};

		pets.forEach(function(pet) {
			petMap[pet._id] = pet;
		});

		res.json(petMap);
		//res.send
	}).catch(err => {
		res.status(500).json(err);
	});
});

//Find One 	Ex: localhost:8000/find?name=pebz
router.get('/find', (req, res) => {

	if (!req.query.name) {
		return res.status(400).send('Missing url parameter: name')
	}

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
router.post('/add', upload.single('petImage'), function(req, res, next) {
	if (!req.body) {
		return res.status(400).send('Request body is missing');
	}

	let model = new PetModel({
		_id : new mongoose.Types.ObjectId(),
	  name : req.body.name,
	  gender: req.body.gender,
	  age: req.body.age,
	  breeds: req.body.breeds,
	  description: req.body.description,
	  petImage: req.file.path
	});

	model.save().then(doc => {
		if (!doc || doc.length === 0) {
			return res.status(500).send(doc);
		}

		res.status(201).send(doc);
	}).catch(err => {
		//Mongoose takes care of handling missing fields
		res.status(500).json(err);
	});
});

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
