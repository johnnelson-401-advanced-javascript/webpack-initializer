const fs = require('fs');
const { write, writeJSON } = require('../writer');
const writePackageJSON = require('../package-json-writer');
const writeLinter = require('../eslint-writer');
const writeBabel = require('../babel-writer');
const writeWebPack = require('../webpack-writer');
const writeGitIgnore = require('../git-ignore-writer');
const writeTravis = require('../travis-writer');


describe('writer.js', () => {
  it('writes a text file', () => {
    fs.writeFileSync = jest.fn();
    let str = 'test string';
    let path = '.';
    write(path, str);
    expect(fs.writeFileSync.mock.calls[0][0]).toBe(path);
    expect(fs.writeFileSync.mock.calls[0][1]).toBe(str);
  });

  it('writeJSON writes a JSON object', () => {
    fs.writeFileSync = jest.fn();
    let path = '.';
    let obj = { test: 'test' };
    writeJSON(path, obj);
    expect(fs.writeFileSync).toHaveBeenCalledWith(path, JSON.stringify(obj, null, 2));
  });

  it('package-json-writer', () => {
    fs.writeFileSync = jest.fn();
    let path = '.';
    writePackageJSON(path);
    expect(fs.writeFileSync).toHaveBeenCalledWith(path + '/package.json', expect.any(String));

  });

  it('Linter', () => {
    fs.writeFileSync = jest.fn();
    let path = '.';
    writeLinter(path);
    expect(fs.writeFileSync).toHaveBeenCalledWith(path + '/.eslintrc', expect.any(String));
  });

  it('writeBabel', () => {
    fs.writeFileSync = jest.fn();
    let path = '.';
    writeBabel(path);
    expect(fs.writeFileSync).toHaveBeenCalledWith(path + '/.babelrc', expect.any(String));
  });

  it('webPack', () => {
    fs.writeFileSync = jest.fn();
    let path = '.';
    writeWebPack(path);
    expect(fs.writeFileSync).toHaveBeenCalledWith(path + '/webpack.config.js', expect.any(String));    
  });

  it('gitignore', () => {
    fs.writeFileSync = jest.fn();
    let path = '.';
    writeGitIgnore(path);
    expect(fs.writeFileSync).toHaveBeenCalledWith(path + '/.gitignore', expect.any(String));    
  });
  
  it('writeTravis', () => {
    fs.writeFileSync = jest.fn();
    let path = '.';
    writeTravis(path);
    expect(fs.writeFileSync).toHaveBeenCalledWith(path + '/.travis.yml', expect.any(String));    
  });

});
