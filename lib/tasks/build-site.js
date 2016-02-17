'use strict'
const posts = require('../../controllers/posts.js')

module.exports = function buildSite () {
  posts.compile()
  console.log('build complete...')
}
