const mongoose = require('mongoose')

let donorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ },
  phone: { type: Number, required: true },
  amount: { type: Number, required: true },
  stripeID: { type: String, required: true },
  createdAt: { type: Date }
})


module.exports = mongoose.model('Donor', donorSchema)
