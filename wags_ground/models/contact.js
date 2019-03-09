const mongoose = require('mongoose')

let contactSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  count: { type: Number, default: 1 },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ },
  message: { type: String, required: true },
  createdAt: { type: Date }
})


module.exports = mongoose.model('Donor', donorSchema)
