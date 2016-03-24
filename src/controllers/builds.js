'use strict';
const pages = require('./pages.js');
const endpoints = require('./endpoints.js');
const builds = [];

builds.push(pages, endpoints);

module.exports = builds;
