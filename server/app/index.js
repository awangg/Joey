/**
 * Node Modules
 */
const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const mongoose = require('mongoose')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

/**
 * Other Configuration
 */
const apiRoutes = require('../src/controllers')
const docs = YAML.load('docs/api.yml');

/**
 * Runs the API server
 * 
 * @param {*} port Port to host the server on 
 * @param {*} dbUri MongoDB URI
 */
const run = (port, dbUri) => {
  const app = express()
  const server = http.createServer(app)

  app.use(bodyParser.json())
  app.get('/', (req, res) => { res.send('The API server is at /api/v1, documentation at /api/v1/docs') })
  app.use('/api/v1', apiRoutes)
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(docs))

  /**
   * Attempt DB and server connection
   */
  mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true }).then( () => {
    server.listen(port, () => {
      console.log('Listening on http://localhost:' + port)
    })
  }).catch( err => {
    console.log('Error connecting to DB')
    console.log(err)
    process.exit(1)
  })
}

module.exports = run