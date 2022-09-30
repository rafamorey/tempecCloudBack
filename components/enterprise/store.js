const Model = require('./model');

function addEnterprise(enterprise){
  const myEnterprise = new Model(enterprise)
  return myEnterprise.save() 
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
  console.log(device)
  const enterprises = await Model.updateOne(
    {enterprise: "Rys"},
    {$pull: {"devices": device}}
  )
  return enterprises
}

module.exports = {
  addEnterprise,
  deleteEnterprise,
  getEnterprise,
  getEnterpriseById,
  deleteDeviceId
}