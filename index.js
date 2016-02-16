'use strict'
const fetchData = require('./lib/tasks/fetch-data.js')
const buildSite = require('./lib/tasks/build-site.js')

fetchData(buildSite)
