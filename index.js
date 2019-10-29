#!/usr/bin/env node

const fs = require('fs');

//import file writers
const writeGitIgnore = require('./writers/git-ignore-writer');
const writeBabel = require('./writers/babel-writer');
const writeLinter = require('./writers/eslint-writer');
const writePackageJSON = require('./writers/package-json-writer');
const { writeIndexJS, writeIndexHTML } = require('./writers/src-index-writer');
const writeTravis = require('./writers/travis-writer');
const writeWebPack = require('./writers/webpack-writer');

//import dependency installers
const installDependencies = require('./installers/dependencies-installer');
const installDevDependencies = require('./installers/dev-dependencies-installer');

// assign the name of the folder from the command line arguments as a variable
const args = process.argv;
const path = args[args.length - 1];

//if the folder is not named . make the directory
if(path !== '.') {
  fs.mkdirSync(path);
}
fs.mkdirSync(`${path}/src`);

//write all necessary files
writeGitIgnore(path);
writeBabel(path);
writeLinter(path);
writePackageJSON(path);
writeIndexHTML(path);
writeIndexJS(path);
writeTravis(path);
writeWebPack(path);

//install all dependencies
installDependencies(path);
installDevDependencies(path);