const fs = require('fs');

function write(path, str) {
  fs.writeFileSync(path, str);
}

function writeJSON(path, obj) {
  const stringObj = JSON.stringify(obj, null, 2);
  write(path, stringObj);
}

module.exports = {
  write,
  writeJSON
};