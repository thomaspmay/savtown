const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')


const app = express()

app.use('/', express.static(path.join(__dirname, 'public')))

var port = process.env.PORT || 9999

app.listen(port)
console.log('server running on port ' + port)