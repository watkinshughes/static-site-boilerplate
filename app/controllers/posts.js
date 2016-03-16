'use strict'
const config = require('../../config.js')
const compileView = require('../../lib/tasks/compile-view.js')

module.exports = {
  compile () {
    const posts = config.locals().posts
    const length = posts.length
    for (let i = 0; i < length; i++) {
      let filename = posts[i].title.toLowerCase().replace(/\s+/g, '-') + '.html'
      compileView({
        'locals': posts[i],
        'destination': config.build + 'posts/' + filename,
        'view': 'posts/index'
      })
    }
  }
}
