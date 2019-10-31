const install = require('../installers/installer');
const installDependencies = require('../installers/dependencies-installer');
const installDevDependencies = require('../installers/dev-dependencies-installer');
const child_process = require('child_process');

describe('Installers', () => {
  it('Install works with Dependencies and DevDependencies', () => {
    child_process.execSync = jest.fn();
    let packages = ['install', 'me'];
    let path = '.';
    install(path, packages, true);
    install(path, packages, false);
    expect(child_process.execSync.mock.calls[0][0])
      .toBe(`npm i -D ${packages.join(' ')}`);
    expect(child_process.execSync.mock.calls[1][0])
      .toBe(`npm i ${packages.join(' ')}`);
  });

  it('DevDependencies and Dependencies as stand alone', () => {
    child_process.execSync = jest.fn();
    let path = '.';
    installDependencies(path);   
    installDevDependencies(path);    
    expect(child_process.execSync.mock.calls[0][0]).toBe(`npm i react react-dom`);
    expect(child_process.execSync.mock.calls[1][0][7]).toBe(`D`);
  });
  
});