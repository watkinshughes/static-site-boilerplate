'use strict';
const fs = require('fs');
const config = require('../../../config.js');
const compileView = require('../compile-view.js');

module.exports = {
  compile() {
    const endpoints = config.endpoints;
    for (let i = 0; i < endpoints.length; i++) {
      const endpoint = endpoints[i];
      const locals = config.locals()[endpoint];
      for (let j = 0; j < locals.length; j++) {
        const path = locals[j].title.toLowerCase().replace(/\s+/g, '-');
        const directory = `${config.build}${endpoint}/${path}`;
        if (!fs.existsSync(directory)) {
          fs.mkdirSync(directory);
        }
        compileView({
          locals: locals[j],
          destination: `${directory}/index.html`,
          view: `${endpoint}/index`
        });
      }
    }
  }
};
