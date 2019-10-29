const { writeJSON } = require('./writer');

function writeBabel(path) {
  const babelData = {
    'presets': [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    'plugins': [
      '@babel/plugin-proposal-class-properties'
    ]
  };
  writeJSON((path + '/.babelrc'), babelData);
}

module.exports = writeBabel;
