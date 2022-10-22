const store = require('./store')

function addDevice(req){
  // console.log(req.body)
  if(!req.body){
    return Promise.reject('invalid data')
  }
  const device = {
    "enterprise": req.body.enterprise,
    "name": req.body.name,
    "id": req.body.id,
    "setPoint": req.body.setPoint,
    "tempInt": req.body.tempInt,
    "tempMax": req.body.tempMax,
    "tempMin": req.body.tempMin,
  }
  return store.addDevice(device)
}

// getting devices for user
function getDeviceValues(req){
const deviceUser = {
  "name": req.body.name,
  "id": req.body.id,
  // "enterprise": req.body.enterprise
}
  return new Promise((resolve, reject) => {
    resolve(store.getDeviceValues(deviceUser))
  })
}

function getDeviceById(req){
  const device = {
    "name": req.body.name,
    "id": req.body.id
  }
  return new Promise((resolve, reject) => {
    resolve(store.getDeviceById(device))
  })
}

function getDeviceStatusById(req){
  const device = {
    "name": req.body.name,
    "id": req.body.id
  }
  return new Promise((resolve, reject) => {
    resolve(store.getDeviceStatusById(device))
  })
}

function deleteDevice(req){
  const device = {
    "id": req.body.id,
    "enterprise": req.body.enterprise
  }
  return new Promise((resolve, reject) => {
    resolve(store.deleteDevice(device))
  })
}

function deleteAll(req){
  return new Promise((resolve, reject) => {
    resolve(store.deleteAll())
  })
}

function getDates(req){
  const dates = {
    "name":req.body.name,
    "id":req.body.id,
    "enterprise": req.body.enterprise,
    "start": req.body.startDate,
    "end":req.body.endDate
  }
  console.log(dates)
  return new Promise((resolve, reject) => {
    resolve(store.getDates(dates))
  })
}

function refreshMin(req){
  const refresh = {
    "enterprise": req.body.enterprise,
    "id": req.body.id,
    "name": req.body.name,
    "setPoint": req.body.setPoint
  }
  return new Promise((resolve, reject) =>{
    resolve(store.refreshMin(refresh))
  })
}

function refreshMax(req){
  const refresh = {
    "enterprise": req.body.enterprise,
    "id": req.body.id,
    "name": req.body.name,
    "setPoint": req.body.setPoint
  }
  return new Promise((resolve, reject) =>{
    resolve(store.refreshMax(refresh))
  })
}

module.exports = {
  addDevice,
  deleteDevice,
  deleteAll,
  getDeviceValues,
  getDeviceById,
  getDeviceStatusById,
  getDates, 
  refreshMin,
  refreshMax,
}