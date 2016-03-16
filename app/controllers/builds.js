'use strict'
const pages = require('./pages.js')
const posts = require('./posts.js')

let builds = []
builds.push(pages, posts)

module.exports = builds
