'use strict';
const fs = require('fs');
const env = process.env.ENV;

module.exports = {
  api: 'http://jsonplaceholder.typicode.com/',
  endpoints: [
    'posts',
    'albums'
  ],
  pages: [
    'index',
    'posts',
    'albums'
  ],
  views: './src/views/',
  data: './data/',
  build: './www/',
  assets: './www/assets/',
  jade: {
    basedir: './src/views/',
    pretty: true
  },
  imagemin: {
    source: './src/assets/images/',
    directory: './www/assets/images/'
  },
  sass: {
    file: './src/assets/styles/app.scss',
    directory: './www/assets/styles/',
    outFile: './www/assets/styles/app.css',
    outputStyle: 'nested',
    sourceMapEmbed: true
  },
  browserify: {
    file: './src/assets/scripts/app.js',
    directory: './www/assets/scripts/',
    outFile: './www/assets/scripts/app.js',
    debug() {
      if (env) {
        return false;
      }
      return true;
    }
  },
  locals() {
    return JSON.parse(fs.readFileSync('./data/locals.json'));
  }
};
