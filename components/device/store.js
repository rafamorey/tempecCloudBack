const Model = require('./model');

function addDevice(device){
  const myDevice = new Model(device)
  return myDevice.save() 
}

// getting devices for user
async function getDevices(deviceUser){
  const temperatures = []
  const tempDates = []
  const tempMin = []
  const tempMax = []
  const devices = await Model.find(
    { name: deviceUser.name, 
      id: deviceUser.id
    }
    )
    devices.forEach(device => {
      temperatures.push(device.tempInt)
      tempDates.push(device.date)
      tempMin.push(device.tempMin)
      tempMax.push(device.tempMax)
    });
    // console.log(temperatures)
    // console.log(tempDates)       
  return {temperatures, tempDates, tempMin, tempMax}
}

async function getDeviceById(device){
  const devicebyid = await Model.find(device)
  return devicebyid
}

async function getDeviceStatusById(device){
  const statusbyid = await Model.findOne(device)
  return statusbyid
}

async function deleteDevice(device){
  const deviceDeleted = await Model.deleteOne(device)
  return deviceDeleted
}

async function deleteAll(){
  const deviceDeleted = await Model.remove()
  return deviceDeleted
}

module.exports = {
  addDevice,
  deleteDevice,
  deleteAll,
  getDevices,
  getDeviceById,
  getDeviceStatusById
}