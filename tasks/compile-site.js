'use strict';
const fs = require('fs');
const jade = require('jade');
const config = require(__root + '/config.js');
const fn = jade.compileFile(__root + config.views + 'pages.jade', config.jade);

module.exports = function() {
  let locals = JSON.parse(fs.readFileSync(config.data + 'locals.json'));
  // Temp / static pages array
  locals.pages = JSON.parse(fs.readFileSync(config.data + 'pages.json'));
  let html = fn(locals);
  fs.writeFile(config.build + 'pages.html', html, (error) => {
    if (error) throw error;
    console.log('build complete!');
  });
} 