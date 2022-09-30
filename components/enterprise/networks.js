const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', (req,res) => {
  controller.getEnterprise()
  .then((enterprises) =>{
    response.success(req, res, enterprises, 200)
  })
  .catch(err => {
    response.error(req,res, 'internal error', 500, err)
  })
})

// getting enterprise(id)
router.post('/id', (req,res) => {
  console.log(req)
  controller.getEnterpriseById(req,res)
  .then((enterprise) =>{
    response.success(req, res, enterprise, 200)
  })
  .catch(err => {
    response.error(req,res, 'internal error', 500, err)
  })
})

// create enterprise
router.post('/', (req,res) =>{
  controller.addEnterprise(req)
    .then(data => {
      response.success(req,res,data,201)
    })
    .catch(err => {
      response.error(req,res, 'internal error', 500, err)
    })
})

// create devicebyId enterprise
router.post('/deviceid', (req,res) =>{
  controller.addEnterpriseDevice(req)
    .then(data => {
      response.success(req,res,data,201)
    })
    .catch(err => {
      response.error(req,res, 'internal error', 500, err)
    })
})

router.delete('/', (req,res) =>{
  controller.deleteEnterprise(req)
    .then(data => {
      response.success(req,res,data,201)
    })
    .catch(err => {
      response.error(req,res, 'internal error', 500, err)
    })
})

router.delete('/deviceid', (req,res) =>{
  controller.deleteDeviceid(req)
    .then(data => {
      response.success(req,res,data,201)
    })
    .catch(err => {
      response.error(req,res, 'internal error', 500, err)
    })
})


module.exports = router
