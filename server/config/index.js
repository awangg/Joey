require('dotenv').config()

/**
 * Transfer environment variables to config object
 */
let config = {
  auth: {},
  db: {}
}

config.port = process.env.PORT || '8080'

config.auth.secret = process.env.AUTH_SECRET || ''

config.db.name = process.env.DB_NAME || ''
config.db.uri = process.env.DB_URI || ''

module.exports = config