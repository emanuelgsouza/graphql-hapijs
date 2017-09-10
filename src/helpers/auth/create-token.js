const jwt = require('jsonwebtoken')

/*
 * Create JWT function. Receie the following params:
 * + uid: user identification
 * + email: user email
*/

module.exports = user => jwt.sign(user, process.env.API_KEY, {
  algorithm: 'HS256',
  expiresIn: '1h'
})
