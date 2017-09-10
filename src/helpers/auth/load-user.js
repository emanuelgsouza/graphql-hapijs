const jwt = require('jsonwebtoken')
const { isEmpty, omit } = require('lodash')
const { selectWhere } = require('../database')
const tables = require('../tables')

module.exports = function (token) {
  try {
    const decoded = jwt.verify(token, process.env.API_KEY)
    return selectWhere(tables.users(), ['*'], { uid: decoded.uid })
      .first()
      .then(obj => {
        if (!isEmpty(obj)) {
          return omit(obj, ['password'])
        }
        return Promise.reject(new Error('Token inválido'))
      })
  } catch (err) {
    console.error(err)
    return Promise.reject(new Error('Token inválido'))
  }
}
