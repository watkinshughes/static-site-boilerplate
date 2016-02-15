'use strict'
const fetchData = require('./tasks/fetch-data.js')
const compileSite = require('./tasks/compile-site.js')
fetchData(compileSite)
