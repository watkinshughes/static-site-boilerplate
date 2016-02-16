'use strict'
const fs = require('fs')
const jade = require('jade')
const markdown = require('jstransformer-markdown') // eslint-disable-line no-unused-vars
const config = require('../../config.js')

module.exports = function compileHTML (settings) {
  let locals = settings.locals
  let fn = jade.compileFile(config.views + settings.view + '.jade', config.jade)
  let html = fn(locals)
  fs.writeFile(settings.destination, html, (error) => {
    if (error) throw error
  })
}
