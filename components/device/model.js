const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = Schema({
  id: String,
  name: String,
  setPoint: Number,
  tempItn: Number,
  tempExt: Number,
  out_0: Boolean,
  out_1: Boolean,
  histH: Number,
  histL: Number,
  tempMax: Number,
  tempMin: Number,
  dateMax: Date,
  dateMin: Date,
  date: Date
})