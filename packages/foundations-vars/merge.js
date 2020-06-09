var combineFiles = require('combine-files');
combineFiles(['./dist/css/_vars.css', './src/media/breakpoints.css'], './dist/vars.css', '\n\n');
combineFiles(['./dist/css/_vars.css', './src/media/breakpoints.css'], './src/vars.pcss', '\n\n');