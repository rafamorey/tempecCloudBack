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
  date: {type:Date, default:Date.now}
})

const model = mongoose.model('devices', mySchema)

module.exports = model