const { write } = require('./writer');


function writeGitIgnore(path) {
  let gitIgnoreData = `node_modules
  .env
  coverage`;
  write((path + '/.gitignore'), gitIgnoreData);
}

module.exports = writeGitIgnore;