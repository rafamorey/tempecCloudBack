const Model = require('./model');

function addEnterprise(enterprise){
  const myEnterprise = new Model(enterprise)
  return myEnterprise.save() 
}

async function addEnterpriseDevice(enterpriseDevice){
  const myEnterpriseDevice = await Model.updateOne(
    {enterprise: enterpriseDevice.name},
    {$addToSet: {"devices": myEnterpriseDevice.id}}
  )
  return enterprises
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
  const enterprises = await Model.updateOne(
    {enterprise: device.name},
    {$pull: {"devices": device.id}}
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