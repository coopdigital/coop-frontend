var combineFiles = require('combine-files');
combineFiles(['./dist/css/_vars.css', './src/media/breakpoints.css'], './dist/vars.css', '\n\n');