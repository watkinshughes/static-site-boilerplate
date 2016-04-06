'use strict';
const fs = require('fs');
const config = require('../../config.js');
const compileHTML = require('./compile-html.js');
const compressImgs = require('./compress-images.js');
const compileSass = require('./compile-sass.js');
const bundleJS = require('./bundle-js.js');
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
