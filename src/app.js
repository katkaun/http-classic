const express = require('express')
var path = require('path')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.static('public'))

app.listen(PORT, console.log(`http server listening on port ${PORT}`))
