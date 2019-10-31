const { write } = require('./writer');

function writeIndexJS(path) {
  let indexJS = `
  import React from 'react';
  import { render } from 'react-dom';
  import App from './components/App';
  
  render(
    <App />,
    document.getElementById('root')
  );
  `;
  write((path + '/src/index.js'), indexJS);

}

function writeIndexHTML(path) {
  let indexHTML = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${path}</title>
  </head>
  
  <body>
    <div id="root"></div>
  </body>
  
  </html>
  `;
  write((path + '/src/index.html'), indexHTML);

}

module.exports = {
  writeIndexJS,
  writeIndexHTML,
};
