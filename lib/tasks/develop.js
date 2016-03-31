'use strict';
const server = require('browser-sync').create();

server.init({
  server: './www',
  files: [
    './www/**/*.html',
    './www/**/*.css',
    './www/**/*.js',
    './www/**/*.png',
    './www/**/*.svg'
  ],
  notify: false
});
server.reload();
