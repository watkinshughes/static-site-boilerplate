'use strict'
const builds = require('../../app/controllers/builds.js')

module.exports = function buildApp () {
  for (let i = 0; i < builds.length; i++) {
    builds[i].compile()
  }
}
