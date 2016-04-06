'use strict';
module.exports = (karma)=> {
  karma.set({
    frameworks: ['jasmine', 'browserify'],

    files: [
      'test/**/*Spec.js'
    ],

    reporters: ['dots'],

    preprocessors: {
      'test/**/*Spec.js': ['browserify']
    },

    browsers: ['PhantomJS'],

    logLevel: 'LOG_DEBUG',

    singleRun: true,
    autoWatch: false,

    browserify: {
      debug: true,
      transform: [
        'browserify-shim',
        ['babelify', { presets: 'es2015' }]
      ]
    }
  });
};
