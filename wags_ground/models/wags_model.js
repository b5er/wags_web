const mongoose = require('mongoose')

const { user, password, server, db } = require('../config/dev')


mongoose.connect(`mongodb://${user}:${password}@${server}/${db}`, { useNewUrlParser: true })

let PetSchema = new mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  name : String,
  gender: String,
  age: Number,
  breeds: [mongoose.Schema.Types.Mixed],
  description: String,
  petImage: String,
  created : { type: Date }
})

module.exports = mongoose.model('Pet', PetSchema)
