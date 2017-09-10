/*
 * Exporting knex config for connection with postgres database
 * @private @pg:   module for connection with postgres database
 * @public  @knex: module for connection database
*/

module.exports = {
  client: 'pg',
  version: '9.5',
  connection: process.env.DATABASE_URL || {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  }
}
