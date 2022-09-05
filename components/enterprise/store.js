const Model = require('./model');

function addEnterprise(enterprise){
  const myEnterprise = new Model(enterprise)
  return myEnterprise.save() 
}

<<<<<<< HEAD
// function addPassword(pass){
//   const myEnterprise = new Model(pass)
//   return myEnterprise.save() 
// }
=======
function addPassword(pass){
  const myEnterprise = new Model(pass)
  return myEnterprise.save() 
}
>>>>>>> 939fe49a41af64911c88d9914e673d50f8b85470

async function getEnterprise(){
  const enterprises = await Model.find()
  return enterprises
}

module.exports = {
  addEnterprise,
  addPassword,
  getEnterprise
}