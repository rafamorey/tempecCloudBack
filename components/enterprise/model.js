
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
  id: String,
  enterprise: String,
  password:String,
  email: String,
  phone: String,
  users:Array
})

const model = mongoose.model('Enterprise', mySchema)

module.exports = model