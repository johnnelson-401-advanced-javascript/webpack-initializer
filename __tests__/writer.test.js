const fs = require('fs');
const { write, writeJSON } = require('../writer');
const writePackageJSON = require('../package-json-writer');
const writeLinter = require('../eslint-writer');


describe('writer.js', () => {
  it('writes a text file', () => {
    fs.writeFileSync = jest.fn();
    let str = 'test string';
    let path = './__tests__/test.txt';
    write(path, str);
    expect(fs.writeFileSync.mock.calls[0][0]).toBe(path);
    expect(fs.writeFileSync.mock.calls[0][1]).toBe(str);
  });

  it('writeJSON writes a JSON object', () => {
    fs.writeFileSync = jest.fn();
    let path = './__tests__/test.txt';
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

});
