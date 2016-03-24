const config = require('../../config.js');
const fs = require('fs');
const sass = require('node-sass');
const directory = config.sass.directory;

module.exports = function compileSass() {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
  sass.render({
    file: config.sass.file,
    outFile: config.sass.outFile,
    outputStyle: config.sass.outputStyle,
    sourceMapEmbed: config.sass.sourceMapEmbed
  }, (err, result)=> {
    if (err) {
      console.log(err.status);
      console.log(err.file);
      console.log(err.column);
      console.log(err.message);
      console.log(err.line);
      throw err;
    } else {
      fs.writeFile(config.sass.outFile, result.css, ()=> {
        if (err) {
          console.log(err.message);
          throw err;
        } else {
          console.log('SASS compiled');
        }
      });
    }
  });
};
