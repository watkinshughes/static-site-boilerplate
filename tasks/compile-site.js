'use strict'
const fs = require('fs')
const jade = require('jade')
const markdown = require('jstransformer-markdown') // eslint-disable-line no-unused-vars
const config = require('../config.js')
const fn = jade.compileFile(config.views + 'with-markdown.jade', config.jade)

function compileHTML () {
  let locals = JSON.parse(fs.readFileSync(config.data + 'locals.json'))
  // Temp / static pages array
  locals.pages = JSON.parse(fs.readFileSync(config.data + 'pages.json'))
  let html = fn(locals)
  fs.writeFile(config.build + 'with-markdown.html', html, (error) => {
    if (error) throw error
    console.log('build complete!')
  })
}

module.exports = function () {
  compileHTML()
}
