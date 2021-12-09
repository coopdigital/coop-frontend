#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/no-dynamic-require */

const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;

const currentWorkingPath = process.cwd();
console.log('currentWorkingPath:: ', currentWorkingPath);
const srcJSIndex = path.join(currentWorkingPath, 'src/index.mjs');
console.log('indexSource::: ', srcJSIndex);


const { main, name, style } = require(path.join(currentWorkingPath, 'package.json'));
// console.log(main, name, style)
const inputPath = path.join(currentWorkingPath, main);

console.log('inputPath::: ', inputPath );

const newInputPath = path.join(currentWorkingPath, 'src/index.js');

// Little workaround to get package name without scope
// const fileName = name.replace('@coopdigital/', '');

// const fileName = srcJSIndex.replace('.mjs', '');
// console.log(fileName);

// see below for details on the options
const inputOptions = {
  input: newInputPath,
  plugins: [
    resolve(),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
  ],
};

const outputOptions = [
  {
    file: path.join(currentWorkingPath, 'dist/index.cjs.js'),
    format: 'cjs',
  },
  {
    file: path.join(currentWorkingPath, 'dist/index.esm.js'),
    format: 'esm',
  },
];

async function packageBuilder() {
  console.log('HELLO FROM packageBuilder');
  // create bundle
  const bundle = await rollup.rollup(inputOptions);
  console.log('BUNDLE:: ', bundle);
  // loop through the options and write individual bundles
  outputOptions.forEach(async (options) => {
    console.log('options::', options);
    await bundle.write(options);
  });
}

packageBuilder();
