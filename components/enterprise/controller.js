
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
  const deviceToDelete = 
  // {
      // "devices":[
        {"id": req.body.id}
      // ]
    // }
  
    return new Promise((resolve, reject) => {
    resolve(store.deleteDeviceId(deviceToDelete))
  })
}
module.exports = {
  addEnterprise,
  deleteEnterprise,
  getEnterprise,
  getEnterpriseById,
  deleteDeviceid
}