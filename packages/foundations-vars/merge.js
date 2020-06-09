var combineFiles = require('combine-files');
combineFiles(['./dist/css/_vars.css', './packages/foundations-vars/src/media/breakpoints.css'], './dist/vars.css', '\n\n');