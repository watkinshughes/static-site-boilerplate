'use strict'
const fs = require('fs')
const jade = require('jade')
const config = require('../../config.js')
// enable markdown in jade templates
const markdown = require('jstransformer-markdown') // eslint-disable-line no-unused-vars

module.exports = function compileView (settings) {
  let locals = settings.locals
  let fn = jade.compileFile(config.views + settings.view + '.jade', config.jade)
  let html = fn(locals)
  fs.writeFile(settings.destination, html, (error) => {
    if (error) throw error
  })
}
