#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const postcss = require('rollup-plugin-postcss');
const copy = require('rollup-plugin-copy');
const cleaner = require('rollup-plugin-cleaner');

const currentWorkingPath = process.cwd();
// Little refactor from where we get the code
const { src, name, style } = require(path.join(currentWorkingPath, 'package.json'));

// build input path using the src
const inputPath = path.join(currentWorkingPath, src);

// Little hack to just get the file name
const packageRegEx = /@coopdigital\/component-|@coopdigital\/foundations-/;
// const fileName = name.replace(packageRegEx, '');

// see below for details on the options
const inputOptions = {
  input: inputPath,
  external: ['react', 'prop-types'],
  plugins: [
    resolve(),
    cleaner({
      targets: [
        './dist/',
      ],
    }),
    postcss({
      config: {
        path: '../../postcss.config.js',
      },
      extensions: ['.pcss', '.css'],
      inject: false,
      modules: false,
      extract: path.resolve(style),
    }),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    copy(
      {
        targets: [
          { src: 'src/html/**.html', dest: 'dist/html' },
          { src: 'src/jinja/**.html', dest: 'dist/jinja' },
        ],
      },
    ),
  ],
};

const outputOptions = [
  {
    file: 'dist/index.cjs.js',
    format: 'cjs',
  },
  {
    file: 'dist/index.esm.js',
    format: 'esm',
  },
];

async function build() {
  // create bundle
  const bundle = await rollup.rollup(inputOptions);
  // loop through the options and write individual bundles
  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();
