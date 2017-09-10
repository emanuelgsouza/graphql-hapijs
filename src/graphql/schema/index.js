const { makeExecutableSchema } = require('graphql-tools')
const typeDefs = require('./type-defs')
const resolvers = require('./resolvers')

module.exports = makeExecutableSchema({ typeDefs, resolvers })
