
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = mongoose.Schema({
  name: String,
  password: String,
  email: String,
  phone: Number,
  users:Array,
  enterprise: String,
  created: Date
})



const model = mongoose.model('Enterprises', mySchema)

module.exports = model