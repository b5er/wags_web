const express = require('express');
var router = express.Router();
const mongodb = require('mongodb');

/* GET home page */
router.get('/findAll', function(req, res, next) {
	var MongoClient = mongodb.MongoClient;

	var url = 'mongodb://localhost:27017/wags_web';

	MongoClient.connect(url, function(err, db)) {
		if (err) {
			console.log('Unable to connect to the server', err);
		} else {
			console.log("Connection Establised");

			var collection = db.collection("pets");
			collection.find({}).toArray(function(err, result) {
				if (err) {
					res.send(err);
				} else if (result.length) {
					//Do something with result
				} else {
					res.send('No documents found');
				}

				db.close();
			});
		}
	}
});

router.get('/addPet', function(req, res) {
	var MongoClient = mongodb.MongoClient;

	var url = 'mongodb://localhost:27017/wags_web';

	MongoClient.connect(url, function(err, db)) {
		if (err) {
			console.log('Unable to connect to the server', err);
		} else {
			console.log("Connection Establised");

			var collection = db.collection("pets");

			var deserializedObj;
			//TODO - Deserialize the JSON by Parsing it
			try {
				deserializedObj = JSON.parse(req.body.pet);
			} catch (err) {
				console.log('Unable to parse object', err);
			}

			var pet = {"name" : deserializedObj.name, "gender" : deserializedObj.gender,
			"breed" : deserializedObj.breed, "description" : deserializedObj.description};

			collection.insert([pet], function(err, result) {
				if (err) {
					console.log(err);
				} else {
					res.redirect("pets");
				}
				db.close();
			});
		}
	}
});

module.exports = router;