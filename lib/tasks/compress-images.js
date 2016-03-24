'use strict';
const config = require('../../config.js');
const fs = require('fs');
const Imagemin = require('imagemin');
const directory = config.imagemin.directory;

module.exports = function compressImgs() {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
  new Imagemin()
  .src(`${config.imagemin.source}*.{gif,jpg,png,svg}`)
  .dest(directory)
  .use(Imagemin.jpegtran({ progressive: true }))
  .use(Imagemin.optipng({ optimizationLevel: 1 }))
  .use(Imagemin.svgo())
  .run((err)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log('Images compressed');
    }
  });
};
