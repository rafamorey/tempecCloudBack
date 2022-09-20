

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = Schema({
  id: String,
  name: String,
  password: String,
  phone: String,
  email: String,
  device: Array
})

const model = mongoose.model('User', mySchema)

module.exports = model