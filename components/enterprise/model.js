
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var mySchema = new Schema({
  enterprise: String,
  name: String,
  password: String,
  email: String,
  phone: Number,
  date: {type: Date, default: Date.now},
  devices: [
        {
          id: String,
          enterprise: String,
          name: String,
          setPoint: Number,
          tempInt: Number,
          tempExt: Number,
          out_0: Boolean,
          out_1: Boolean,
          histH: Number,
          histL: Number,
          tempMax: Number,
          tempMin: Number,
          dateMax: String,
          dateMin: String,
          date: {type: Date, default: new Date()},
          grados: String,
          online: Boolean,
          alarmaH: Number,
          alarmaL: Number,
          last_name: String,
          last_setpoint: Number,
          last_hisH: Number,
          last_histL: Number,
          last_alarmaH: Number,
          last_alarmaL: Number,
          last_grados: String 
        }
      ]
})



const model = mongoose.model('Enterprises', mySchema)

module.exports = model