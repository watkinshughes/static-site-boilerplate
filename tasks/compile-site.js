'use strict';
const fs = require('fs');
const jade = require("jade");
const config = require(__root + '/config.js');
const fn = jade.compileFile(__root + '/views/common/layout.jade', config.jade);

module.exports = function() {
  const locals = JSON.parse(fs.readFileSync('./data/locals.json'));
  let html = fn(locals);
  fs.writeFile('./build/test.html', html, (error) => {
    if (error) throw error;
    console.log('build complete!');
  });
} 