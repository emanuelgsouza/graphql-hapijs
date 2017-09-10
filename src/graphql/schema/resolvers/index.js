const { defaultsDeep } = require('lodash')
const { resolvers, mutations } = require('../../../graphql-entities')

module.exports = defaultsDeep({ }, resolvers, mutations)
