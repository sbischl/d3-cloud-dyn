const fs = require('fs');
const path = require('path');
const browserify = require('browserify');
const mkdirp = require('mkdirp');

// Ensure build directory exists
mkdirp.sync(path.join(__dirname, 'build'));

// Create a browserify bundle
const b = browserify({
  entries: [path.join(__dirname, 'index.js')],
  standalone: 'd3.layout.cloud'
});

// Write the bundle to the output file
const output = fs.createWriteStream(path.join(__dirname, 'build', 'd3.layout.cloud.js'));
b.bundle().pipe(output);

console.log('Build completed successfully!'); 