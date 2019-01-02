
const express = require('express');
let PetModel = require('../../models/wags_model');

var router = express.Router();

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

router.get('/:breed', (req, res) => {
	res.send(`You have requested a breed ${req.params.breed}`)
});

//Create a new pet
router.post('/add', function(req, res) {
	if (!req.body) {
		return res.status(400).send('Request body is missing');
	}

	let model = new PetModel(req.body);

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
    age: req.query.age
  }).then(doc => {
    res.json(doc);
  }).catch(err => {
    res.status(500).json(err);
  });
});

module.exports = router;
