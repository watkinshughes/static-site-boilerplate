'use strict'
const config = require('../config.js')
const compileView = require('../lib/tasks/compile-view.js')

module.exports = {
  compile () {
    let posts = config.locals().posts
    // Just 10 posts for now
    for (let i = 0; i < 10; i++) {
      let filename = posts[i].title.toLowerCase().replace(/\s+/g, '-') + '.html'
      compileView({
        'locals': posts[i],
        'destination': config.build + 'posts/' + filename,
        'view': 'content-types/post'
      })
    }
  }
}
