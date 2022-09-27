const Model = require('./model');

function addDevice(device){
  const myDevice = new Model(device)
  return myDevice.save() 
}

async function getDevices(){
  const devices = await Model.find()
  return devices
}

async function getDeviceById(device){
  const devicebyid = await Model.findOne(device)
  return devicebyid
}

async function getDeviceStatusById(device){
  const statusbyid = await Model.findOne(device)
  return statusbyid
}

async function deleteDevice(){
  const devices = await Model.remove()
  return devices
}

module.exports = {
  addDevice,
  deleteDevice,
  getDevices,
  getDeviceById,
  getDeviceStatusById
}