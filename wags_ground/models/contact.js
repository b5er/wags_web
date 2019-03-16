const mongoose = require('mongoose')

let contactSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  count: { type: Number, default: 1 },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },
  message: { type: String, required: true }
}, { timestamps: true })


module.exports = mongoose.model('Donor', donorSchema)
