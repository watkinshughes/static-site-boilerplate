'use strict'
const launcher = require('simple-autoreload-server');
 
module.exports = launcher({
  port: 8080,
  root: './public',
  listDirectory: true,
  watch: /(html|css|js)/
});