const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ },
  phone: { type: String },
  role: { type: String, required: true }, // Donor, Adopter: (Adopts or (Adopts & Donates)), Admin
  pets: { type: [mongoose.Schema.Types.ObjectId], ref: 'Pet' },
  createdAt: { type: Date }
})


module.exports = mongoose.model('User', userSchema)
