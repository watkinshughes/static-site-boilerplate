'use strict';
global.__root = __dirname + '/';
const fetch = require(__root + '/tasks/fetch-data.js');
const compile = require(__root + '/tasks/compile-site.js');

fetch(compile);