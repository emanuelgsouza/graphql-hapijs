const db = require('../../db')

const tables = [ ]

const queries = tables.reduce((acc, tablename) => {
  acc[tablename] = () => db(tablename)
  return acc
}, {})

module.exports = queries
