'use strict'
const pages = require('./pages.js')
const endpoints = require('./endpoints.js')

let builds = []
builds.push(pages, endpoints)

module.exports = builds
