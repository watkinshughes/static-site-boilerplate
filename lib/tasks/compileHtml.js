'use strict';
const pages = require('./builds/pages.js');
const endpoints = require('./builds/endpoints.js');

module.exports = function compileHTML() {
  const builds = [];
  builds.push(pages, endpoints);
  for (let i = 0; i < builds.length; i++) {
    builds[i].compile();
  }
};
