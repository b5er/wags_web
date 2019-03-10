const mongoose = require('mongoose')

let petSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  breeds: { type: [mongoose.Schema.Types.Mixed], required: true },
  description: { type: String, required: true },
  petImage: { type: String, required: true },
  adopted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Pet', petSchema)
