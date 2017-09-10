const { selectWhere } = require('../database')
const tables = require('../tables')
const { isEmpty } = require('lodash')

module.exports = function (decodedToken, request, fn) {
  const user = decodedToken.uid
  return selectWhere(tables.users(), ['uid'], { uid: user })
    .first()
    .then(obj => {
      if (!isEmpty(obj)) {
        return fn(null, true)
      }
      return fn(null, false)
    })
    .catch(err => {
      if (err) throw err
    })
}
