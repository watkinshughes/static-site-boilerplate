'use strict';
const fetchData = require('./lib/tasks/fetchData.js');
const buildSrc = require('./lib/tasks/buildSrc.js');

function build() {
  buildSrc(()=> {
    console.log('Building source...starting dev server.');
  });
}

fetchData(build);
