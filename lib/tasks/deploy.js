'use strict'
const env = process.env.ENV

module.exports = function deploy () {
  switch (env) {
    case 'production':
      console.log(env + ' site built!')
      break
    case 'staging':
      console.log(env + ' site built!')
      break
    default:
      console.log(env + ' site built!')
  }
}
