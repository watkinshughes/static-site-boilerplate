const fs = require('fs')

module.exports = {
  'api': 'http://jsonplaceholder.typicode.com/',
  'endpoints': [
    'posts',
    'albums',
    'users'
  ],
  'pages': [
    'posts'
  ],
  'views': './app/views/',
  'data': './data/',
  'build': './www/',
  'jade': {
    pretty: true
  },
  locals () {
    return JSON.parse(fs.readFileSync('./data/locals.json'))
  }
}
