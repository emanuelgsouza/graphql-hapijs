const { validateFunc } = require('../helpers/auth')

exports.register = function (server, options, next) {
  server.auth.strategy('jwt', 'jwt', {
    key: process.env.API_KEY,
    validateFunc,
    verifyOptions: { algorithms: ['HS256'] }
  })

  return next()
}

exports.register.attributes = {
  name: 'auth-strategies'
}
