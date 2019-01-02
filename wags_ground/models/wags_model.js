let mongoose = require('mongoose');

const server = 'ds113871.mlab.com:13871';
const db = 'wags_db';
const user = 'wags_pets';
const password = 'pebz1980';

mongoose.connect(`mongodb://${user}:${password}@${server}/${db}`);

let PetSchema = new mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  name : String,
  gender: String,
  age: Number,
  breeds: [mongoose.Schema.Types.Mixed],
  description: String,
  petImage: String
});

module.exports = mongoose.model('Pet', PetSchema);
