// Server
const express = require('express');
require('dotenv').config();
const apiRouter = require('./routes/api')

require('./utils/dbmongo')

const app = express()
const port = 5000

app.use(express.json())

app.use("/api",apiRouter)

const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  })
  
  module.exports = server