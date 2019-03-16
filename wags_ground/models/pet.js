const mongoose = require('mongoose')

let petSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  breeds: { type: [mongoose.Schema.Types.Mixed], required: true },
  description: { type: String, required: true },
  location: { type: String, default: 'Greenbelt' },
  originalname: { type: String, required: true },
  cloudStorageObject: { type: String, required: true },
  cloudStoragePublicUrl: { type: String, required: true },
  adopted: { type: Boolean, default: false }
}, { timestamps: true })

module.exports = mongoose.model('Pet', petSchema)
