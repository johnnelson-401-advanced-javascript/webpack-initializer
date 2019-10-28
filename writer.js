const fs = require('fs');

function write(str, path) {
  fs.writeFile(path, str, (err) => {
    if(err) throw err;
  });
}

function writeJSON(obj, path) {
  fs.writeFile(path, obj, JSON, (err) => {
    if(err) throw err;
  });
}

module.exports = write, writeJSON;