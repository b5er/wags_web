const mongoose = require('mongoose')

let subscriptionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  planId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
})


module.exports = mongoose.model('Subscription', subscriptionSchema)
