'use strict';
const fetchData = require('./lib/tasks/fetch-data.js');
const buildSrc = require('./lib/tasks/build-src.js');

function build() {
  buildSrc(()=> {
    console.log('Building source...starting dev server.');
  });
}

fetchData(build);
