'use strict'
const config = require('../../config.js')
const compileView = require('../../lib/tasks/compile-view.js')

module.exports = {
  compile () {
    const pages = config.pages
    for (let i = 0; i < pages.length; i++) {
      let filename = pages[i] + '.html'
      compileView({
        'locals': config.locals(),
        'destination': config.build + filename,
        'view': 'pages/' + pages[i]
      })
    }
  }
}
