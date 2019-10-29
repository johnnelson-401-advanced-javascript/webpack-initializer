function install(path, packages, dev) {

  const { execSync } = require('child_process');

  console.log(`Installing${dev ? ' Dev' : ' '}Dependencies`);
  let script = dev ? `npm i -D ` : `npm i `;
  execSync(`${script}${packages.join(' ')}`, {
    cwd: path,
    stdio: 'inherit'
  });
  console.log(`Completed install of ${dev ? ' Dev' : ' '}Dependencies`);
}

module.exports = install;