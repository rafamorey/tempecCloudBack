const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = Schema({
  enterprise: String,
  id: String,
  name: String,
  setPoint: Number, //tempIdeal
  tempInt: Number, //tempActual
  tempExt: Number,
  histH: Number, //maxIdeal
  histL: Number, //minIdeal
  tempMax: Number, //maxActual
  tempMin: Number, //minActual
  dateMax: Date,
  dateMin: Date,
  date: {type:Date, default:Date.now},
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
})

const model = mongoose.model('devices', mySchema)

module.exports = model