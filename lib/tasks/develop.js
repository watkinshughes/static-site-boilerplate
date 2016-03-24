'use strict'
const launcher = require('simple-autoreload-server')

module.exports = function develop () {
  launcher({
    port: 8080,
    root: './www',
    listDirectory: false,
    watch: /(html|css|js)/,
    forceReload: /(html|css|js)/
  })
}