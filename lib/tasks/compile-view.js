'use strict';
const config = require('../../config.js');
const fs = require('fs');
const jade = require('jade');

module.exports = function compileView(settings) {
  const locals = settings.locals;
  const fn = jade.compileFile(`${config.views}${settings.view}.jade`, config.jade);
  const html = fn(locals);
  fs.writeFile(settings.destination, html, (err)=> {
    if (err) {
      console.log(err);
    }
  });
};
