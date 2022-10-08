const Model = require('./model');

function addEnterprise(enterprise){
  const myEnterprise = new Model(enterprise)
  return myEnterprise.save() 
}

async function addEnterpriseDevice(enterpriseDevice){
  console.log("store")
  console.log(enterpriseDevice)
  const myEnterpriseDevice = await Model.updateOne(
    {name: enterpriseDevice.name},
    {$addToSet: {devices:enterpriseDevice.devices}
     }
  )
  
  return enterpriseDevice
}


async function getEnterprise(){
  const enterprises = await Model.find()
  return enterprises
}

async function getEnterpriseById(enterprise){
  const enterprisebyid = await Model.findOne(enterprise)
    return enterprisebyid
}

async function deleteEnterprise(){
  const enterprises = await Model.remove()
  return enterprises
}

async function deleteDeviceId(device){
  console.log("store")
  console.log(device)
  console.log(device.id)
  const enterprises = await Model.updateOne(
    {name: device.name},
    {$pull: {devices: {id: device.id}}}
  )
  return enterprises
}

module.exports = {
  addEnterprise,
  addEnterpriseDevice,
  deleteEnterprise,
  getEnterprise,
  getEnterpriseById,
  deleteDeviceId
}