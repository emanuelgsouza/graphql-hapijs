const { graphqlHapi, graphiqlHapi } = require('graphql-server-hapi')

const graphqlOptions = require('./options')

exports.register = function (server, options, next) {
  server.register([
    {
      register: graphqlHapi,
      options: {
        path: '/graphql',
        graphqlOptions
      }
    },
    {
      register: graphiqlHapi,
      options: {
        path: '/graphiql',
        graphiqlOptions: (request) => {
          return Promise.resolve({
            endpointURL: '/graphql',
            passHeader: `Authorization: '${request.query.token}'`
          })
        }
      }
    }
  ])

  return next()
}

exports.register.attributes = {
  name: 'graphql-midleware'
}
