const store = require('./store')

function addDevice(req){
  // console.log(req.body)
  if(!req.body){
    return Promise.reject('invalid data')
  }
  const device = {
    "name": req.body.name,
    "id": req.body.id,
    "setPoint": req.body.setPoint
  }
  return store.addDevice(device)
}


function getDevices(){
  return new Promise((resolve, reject) => {
    resolve(store.getDevices())
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
    "name": req.body.name,
    "id": req.body.id
  }
  return new Promise((resolve, reject) => {
    resolve(store.deleteDevice(device))
  })
}

module.exports = {
  addDevice,
  deleteDevice,
  getDevices,
  getDeviceById,
  getDeviceStatusById
}