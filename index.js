'use strict';
global.__root = __dirname + '/';
const fetchData = require(__root + '/tasks/fetch-data.js');
const compileSite = require(__root + '/tasks/compile-site.js');

fetchData(compileSite);