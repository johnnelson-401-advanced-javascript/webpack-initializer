const { write } = require('./writer');


function writeTravis(path) {
  let travisData = `language: node_js
  services:
    - mongodb
  node_js:
    - "stable"
  `;
  write((path + '/.travis.yml'), travisData);
}

module.exports = writeTravis;