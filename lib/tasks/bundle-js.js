'use strict';
const fs = require('fs');
const browserify = require('browserify');
const config = require('../../config.js');
const directory = config.browserify.directory;

module.exports = function bundleJS() {
  const b = browserify({
    debug: config.browserify.debug,
    cache: {},
    packageCache: {}
  });

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
  b.add(config.browserify.file);
  b.bundle((err, result)=> {
    if (err) {
      throw err;
    } else {
      fs.writeFile(config.browserify.outFile, result, ()=> {
        if (err) {
          throw err.message;
        } else {
          console.log('JS bundled');
        }
      });
    }
  });
};
