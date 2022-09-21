
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
    "users": req.body.users
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

module.exports = {
  addEnterprise,
  deleteEnterprise,
  getEnterprise,
  getEnterpriseById
}