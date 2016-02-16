const fs = require('fs')

module.exports = {
  'api': 'http://jsonplaceholder.typicode.com/',
  'endpoints': [
    'posts',
    'users',
    'albums'
  ],
  'jade': {
    pretty: true
  },
  'views': './views/',
  'data': './data/',
  'build': './public/',
  locals () {
    return JSON.parse(fs.readFileSync('./data/locals.json'))
  }
}
