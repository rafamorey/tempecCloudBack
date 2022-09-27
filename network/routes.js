const express = require('express')

const enterprise = require('../components/enterprise/networks')
const device = require('../components/device/networks')
const users = require('../components/user/networks')

const routes = function(server){
  server.use('/enterprise', enterprise)
  // server.use('/users', users),
  server.use('/device', device)
}

module.exports = routes