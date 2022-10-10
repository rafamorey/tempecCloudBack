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
    "tempMin": req.body.tempMin
  }
  return store.addDevice(device)
}

// getting devices for user
function getDevices(req){
const deviceUser = {
  "name": req.body.name,
  "id": req.body.id,
  // "enterprise": req.body.enterprise
}
  return new Promise((resolve, reject) => {
    resolve(store.getDevices(deviceUser))
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
    "id": req.body.id
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

module.exports = {
  addDevice,
  deleteDevice,
  deleteAll,
  getDevices,
  getDeviceById,
  getDeviceStatusById
}