'use strict';
const fs = require('fs');
const config = require('../../config.js');
const compileView = require('../../lib/tasks/compile-view.js');

module.exports = {
  compile() {
    const pages = config.pages;
    for (let i = 0; i < pages.length; i++) {
      let directory = `${config.build}/`;
      if (pages[i] !== 'index') {
        directory = `${config.build}/${pages[i].toLowerCase().replace(/\s+/g, '-')}`;
        if (!fs.existsSync(directory)) {
          fs.mkdirSync(directory);
        }
      }
      compileView({
        locals: config.locals(),
        destination: `${directory}/index.html`,
        view: `pages/${pages[i]}`
      });
    }
  }
};
