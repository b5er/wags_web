
const express = require('express');
let PetModel = require('../../models/wags_model');


var router = express.Router();


router.get('/find', (req, res) => {

	if (req.query.name) {
		//localhost:8000/findAll?name=pebz&age=90
		res.send(`You have requested the name of pet ${req.query.name}`);
	} else {
		res.send('You have requested to find all pets');

		PetModel.find({}, function(err, pets) {
			var petMap = {};

			pets.forEach(function(pet) {
				petMap[pet._id] = pet;
			});

			res.send(petMap);
      return;
		});
	}
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
