const { typesDefsFromEntities } = require('../../../graphql-entities')
const { loadGraphQLFiles } = require('../../../helpers/common')

const typesDefsFromSchema = loadGraphQLFiles(__dirname)

module.exports = [
  ...typesDefsFromEntities,
  ...typesDefsFromSchema
]
