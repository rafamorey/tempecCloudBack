
const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')
const router = require('./network/routes')
const secret = require('./secret.js')

db(secret)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

router(app) 

app.use('/app', express.static(path.join(__dirname, 'public')))

const port = 3002
app.listen(port)
console.log(`el servidor esta escuchando en http://localhost:${port}`)

// const key = 'mongodb+srv://rafaelDiinpec:Mr178910@tc.kshjevt.mongodb.net/?retryWrites=true&w=majority'

// module.exports = key
