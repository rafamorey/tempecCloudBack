const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = Schema({
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
  date: Date.now
})

const model = mongoose.model('devices', mySchema)

module.exports = model