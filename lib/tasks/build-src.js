'use strict';
const config = require('../../config.js');
const fs = require('fs');
const builds = require('../../src/controllers/builds.js');
const compressImgs = require('./compress-images.js');
const compileSass = require('./compile-sass.js');
const bundleJS = require('./bundle-js.js');
const assets = config.assets;

module.exports = function buildSrc(callback) {
  // Create the assets directory if it is missing
  if (!fs.existsSync(assets)) {
    fs.mkdirSync(assets);
  }
  compressImgs();
  // Compile HTML
  for (let i = 0; i < builds.length; i++) {
    builds[i].compile();
  }
  // SASS
  compileSass();
  // bundle JS via browserify
  bundleJS();
  if (callback) {
    callback();
  }
};
