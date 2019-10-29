const { execSync } = require('child_process');

function installer(path, packages, dev) {
  let script = dev ? `npm i -D ` : `npm i `;
  execSync(`${script}+${packages.join(' ')}`, {
    cwd: path,
    stdio: 'inherit'
  });
}

module.exports = installer;