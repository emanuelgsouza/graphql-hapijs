'use strict'

/*
 * Import modules
 * @private Hapi - HapiJS module
*/
const Hapi = require('hapi')
const APP_VERSION = require('../package.json').version
const APP_NAME = require('../package.json').name

require('dotenv').config()

/*
 * Creating a server and connection to him
*/
const server = new Hapi.Server()

server.connection({
  port: process.env.PORT
})

/*
 * Registering route for root
*/
server.route({
  method: 'GET',
  path: '/',
  handler (request, reply) {
    return reply({
      message: `Hello ${APP_NAME} ${APP_VERSION} version`
    })
  }
})

/*
 * Registering plugins
*/
server.register([
  {
    register: require('hapi-cors'),
    options: {
      methods: ['POST, GET, OPTIONS', 'PATCH', 'DELETE']
    }
  },
  {
    register: require('good'),
    options: {
      reporters: {
        console: [{
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{
            log: '*',
            response: '*'
          }]
        }, {
          module: 'good-console'
        }, 'stdout']
      }
    }
  },
  {
    register: require('hapi-auth-jwt2')
  },
  {
    register: require('bell')
  },
  {
    register: require('./strategies/index')
  },
  {
    register: require('./decorators/index')
  },
  {
    register: require('./graphql')
  }
], (err) => {
  if (err) {
    throw err
  }

  /*
   * Starting the server
  */
  server.start((err) => {
    if (err) {
      throw err
    }
    console.log('Server running at:', server.info.uri)
  })
})
