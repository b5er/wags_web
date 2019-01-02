const express = require('express');
let PetModel = require('../../models/wags_model');


var router = express.Router();

console.log('In image_fetch.js')

router.post('/fetchImage', (req, res) => {
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

module.exports = router;
