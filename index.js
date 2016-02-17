'use strict'
const fetchData = require('./lib/tasks/fetch-data.js')
const buildSite = require('./lib/tasks/build-site.js')
const deploy = require('./lib/tasks/deploy.js')
const develop = require('./lib/tasks/develop.js')
const env = process.env.ENV

const build = new Promise((resolve, reject) => {
  // Add error handling
  fetchData(() => {
    buildSite()
    resolve()
  })
})

if (env) {
  build.then(deploy)
} else {
  build.then(develop)
}
