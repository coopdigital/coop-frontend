#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');
const postcss = require('rollup-plugin-postcss');
const cleaner = require('rollup-plugin-cleaner');

const currentWorkingPath = process.cwd();

// Little refactor from where we get the code
const { src, name, style, styleSrc} = require(path.join(
  currentWorkingPath,
  'package.json'
));

// build input path using the src
const inputPath = path.join(currentWorkingPath, styleSrc);

// Little hack to just get the file name
const packageRegEx = /@coopdigital\/component-|@coopdigital\/foundations-/;
// const fileName = name.replace(packageRegEx, '');

// see below for details on the options
const inputOptionsJS = {
  input: inputPath,
  plugins: [
    cleaner({
      targets: ['./dist/css'],
    }),
    postcss({
      config: {
        path: '../../postcss.config.js',
      },
      sourceMap: true,
      extensions: ['.pcss', '.css'],
      inject: false,
      modules: false,
      extract: path.resolve(style),
    }),
  ],
};

const outputOptions = [
  {
    file: style,
    format: 'esm',
  },
];

async function build() {
  // create bundle
  const bundle = await rollup.rollup(inputOptionsJS);

  // loop through the options and write individual bundles
  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();
