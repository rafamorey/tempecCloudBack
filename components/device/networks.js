const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

// get devices for one user
router.post('/deviceValues', (req,res) => {
  controller.getDevices(req)
  .then((devices) =>{
    response.success(req, res, devices, 200)
  })
  .catch(err => {
    response.error(req,res, 'internal error', 500, err)
  })
})

// getting device(id)
router.post('/id', (req,res) => {
  console.log(req)
  controller.getDeviceById(req,res)
  .then((device) =>{
    response.success(req, res, device, 200)
  })
  .catch(err => {
    response.error(req,res, 'internal error', 500, err)
  })
})

// getting deviceStatus(id)
router.post('/status', (req,res) => {
  controller.getDeviceStatusById(req,res)
  .then((device) =>{
    response.success(req, res, device, 200)
  })
  .catch(err => {
    response.error(req,res, 'internal error', 500, err)
  })
})

// creating device
// router.post('/', (req,res) =>{
//   controller.addDevice(req)
//     .then(data => {
//       response.success(req,res,data,201)
//     })
//     .catch(err => {
//       response.error(req,res, 'internal error', 500, err)
//     })
// })

// deleting Device(id)
router.delete('/id', (req,res) =>{
  controller.deleteDevice(req)
    .then(data => {
      response.success(req,res,data,201)
    })
    .catch(err => {
      response.error(req,res, 'internal error', 500, err)
    })
})

router.delete('/', (req,res) =>{
  controller.deleteAll(req)
    .then(data => {
      response.success(req,res,data,201)
    })
    .catch(err => {
      response.error(req,res, 'internal error', 500, err)
    })
})


module.exports = router
