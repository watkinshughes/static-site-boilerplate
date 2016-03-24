'use strict'
const fetchData = require('./lib/tasks/fetch-data.js')
const buildApp = require('./lib/tasks/build-app.js')
const deploy = require('./lib/tasks/deploy.js')
const develop = require('./lib/tasks/develop.js')
const env = process.env.ENV


const build = new Promise((resolve, reject) => {
  fetchData(() => {
    buildApp()
    resolve()
  })
})

if (env) {
  build.then(deploy)
} else {
  build.then(develop)
}
