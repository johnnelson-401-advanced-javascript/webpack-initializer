const installer = require('./installer');

function installDependencies(path) {
  const packages = [
    'react',
    'react-dom'
  ];
  installer(path, packages, false);
  console.log(`Finished installing Dependencies`);
}

module.exports = installDependencies;