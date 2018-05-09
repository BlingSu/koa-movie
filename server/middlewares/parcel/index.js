const env = process.env.NODE_ENV === 'production' ? 'prd' : 'dev'

module.exports = require(`./${env}.js`)
