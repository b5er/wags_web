const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },
  phone: { type: String },
  role: { type: String, required: true }, // Donor, Adopter: (Adopts or (Adopts & Donates)), Admin, Global Admin
  pets: { type: [mongoose.Schema.Types.ObjectId], ref: 'Pet' }
}, { timestamps: true })


module.exports = mongoose.model('User', userSchema)
