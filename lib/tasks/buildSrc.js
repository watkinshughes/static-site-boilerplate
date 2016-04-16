'use strict';
const fs = require('fs');
const config = require('../../config.js');
const compileHTML = require('./compileHtml.js');
const compressImgs = require('./compressImages.js');
const compileSass = require('./compileSass.js');
const bundleJS = require('./bundleJs.js');
const assets = config.assets;

module.exports = function buildSrc(callback) {
  // Create the assets directory if it is missing
  if (!fs.existsSync(assets)) {
    fs.mkdirSync(assets);
  }
  // Compress and copy images
  compressImgs();
  // Compile HTML
  compileHTML();
  // SASS
  compileSass();
  // bundle JS via browserify
  bundleJS();
  if (callback) {
    callback();
  }
};
