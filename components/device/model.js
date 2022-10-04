const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = Schema({
  id: String,
  name: String,
  setPoint: Number, //tempIdeal
  tempInt: Number, //tempActual
  tempExt: Number,
  out_0: Boolean,
  out_1: Boolean,
  histH: Number, //maxIdeal
  histL: Number, //minIdeal
  tempMax: Number, //maxActual
  tempMin: Number, //minActual
  dateMax: Date,
  dateMin: Date,
  date: Date
})

const model = mongoose.model('devices', mySchema)

module.exports = model