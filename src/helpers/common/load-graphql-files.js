const { curry } = require('ramda')
const { readdirSync, readFileSync } = require('fs')
const path = require('path')

const isGraphQLFile = fileName => fileName.endsWith('.graphql')
const readFile = curry((dirname, fileName) => readFileSync(path.join(dirname, fileName), 'utf8'))

/**
 * loadGraphQLFiles
 * @param  {String}         dirname
 * @return {Array<String>}
 */
const loadGraphQLFiles = dirname => readdirSync(dirname).filter(isGraphQLFile).map(readFile(dirname))

module.exports = loadGraphQLFiles
