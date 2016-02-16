'use strict'
const config = require('../config.js')
const compileHTML = require('../lib/tasks/compile-html.js')

module.exports = {
  compile () {
    let posts = config.locals().posts
    // Just 10 posts for now
    for (let i = 0; i < 10; i++) {
      let filename = posts[i].title.toLowerCase().replace(/\s+/g, "-") + '.html'
      compileHTML({
        'locals': posts[i],
        'destination': config.build + 'posts/' + filename,
        'view': 'with-markdown'
      })
    }
  }
}
