const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
  const files = [
    './dist/G03-custom-elements/runtime-es5.js',
    './dist/G03-custom-elements/polyfills-es5.js',
    './dist/G03-custom-elements/main-es5.js',
    './dist/G03-custom-elements/runtime-es2015.js',
    './dist/G03-custom-elements/polyfills-es2015.js',
    './dist/G03-custom-elements/main-es2015.js'
  ];

  await fs.ensureDir('output');
  await concat(files, 'output/contact-form.js');
}
concatenate();
