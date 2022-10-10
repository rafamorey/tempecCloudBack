
const store = require('./store')

function addEnterprise(req){
  // console.log(req.body)
  if(!req.body){
    return Promise.reject('invalid data')
  }
  const enterprise = {
    "enterprise": req.body.enterprise,
    "name": req.body.name,
    "password": req.body.password,
    "email": req.body.email,
    "phone": req.body.phone,
    "devices": req.body.devices
  }
  return store.addEnterprise(enterprise)
}

function addEnterpriseDevice(req){
  console.log("controller")
  if(!req.body){
    return Promise.reject('invalid data')
  }
  const enterpriseDevice = {
    "enterprise": req.body.enterprise,
    "name": req.body.name,
    "devices": req.body.devices
  }
  console.log(enterpriseDevice)
  return store.addEnterpriseDevice(enterpriseDevice)
}



function getEnterprise(){
  return new Promise((resolve, reject) => {
    resolve(store.getEnterprise())
  })
}

function getEnterpriseById(req){
  const enterprise = {
    "name": req.body.name,
    "password": req.body.password
  }
  return new Promise((resolve, reject) => {
    resolve(store.getEnterpriseById(enterprise))
  })
}

function deleteEnterprise(){
  return new Promise((resolve, reject) => {
    resolve(store.deleteEnterprise())
  })
}

function deleteDeviceid(req){
  console.log("controller")
  const deviceToDelete = 
        {
          "name":req.body.name,
          "id": req.body.id
        }
    return new Promise((resolve, reject) => {
    resolve(store.deleteDeviceId(deviceToDelete))
  })
}
module.exports = {
  addEnterprise,
  addEnterpriseDevice,
  deleteEnterprise,
  getEnterprise,
  getEnterpriseById,
  deleteDeviceid
}