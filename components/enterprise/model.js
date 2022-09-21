
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var mySchema = new Schema({
  enterprise: String,
  name: String,
  password: String,
  email: String,
  phone: Number,
  date: {type: Date, default: Date.now},
  users: [
    {
      id: String,
      name: String,
      password: String,
      phone: Number,
      email: String,
      device: [
        {
          id: String,
          name: String,
          setPoint: Number,
          tempInt: Number,
          tempExt: Number,
          out_0: Boolean,
          out_1: Boolean,
          histH: Number,
          hisL: Number,
          tempMax: Number,
          tempMin: Number,
          dateMax: Date,
          dateMin: Date,
          date: Date
        }
      ]
    }
  ]
})



const model = mongoose.model('Enterprises', mySchema)

module.exports = model