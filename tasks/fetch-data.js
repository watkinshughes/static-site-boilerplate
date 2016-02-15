'use strict';
const fs = require('fs');
const fetch = require('fetch-static-data');
const config = require(__root +'/config.js');
const length = config.endpoints.length;

module.exports = function(callback) {
  let locals = {};
  let count = 0;
  function saveData() {
    count++
    if (count === length) {
      const file = config.data + 'locals.json';
      const data = JSON.stringify(locals, null, ' ');
      fs.writeFile(file, data, (error) => {
        if (error) throw error;
        console.log('compiled locals saved...');
        callback();
      });
    }
  }
  config.endpoints.forEach(function(endpoint) {
    fetch({
      'api': config.api,
      'endpoint': endpoint, 
      'format': 'json'
    }, function(data){
      locals[endpoint] = JSON.parse(data);
      saveData(data);
    });
  });
}