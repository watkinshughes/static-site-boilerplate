'use strict'
const fs = require('fs')
const config = require('../../config.js')
const compileView = require('../../lib/tasks/compile-view.js')

module.exports = {
  compile () {
    const endpoints = config.endpoints
    for (let i = 0; i < endpoints.length; i++) {
      let endpoint = endpoints[i]
      let locals = config.locals()[endpoint]
      for (let j = 0; j < locals.length; j++) {
        let directory = config.build + endpoint + '/' + locals[j].title.toLowerCase().replace(/\s+/g, '-')
        if (!fs.existsSync(directory)) {
          fs.mkdirSync(directory)
        }
        compileView({
          'locals': locals[j],
          'destination': directory + '/index.html',
          'view': endpoint + '/index'
        })
      }
    }
  }
}
