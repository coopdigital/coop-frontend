#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const copy = require('rollup-plugin-copy');
const cleaner = require('rollup-plugin-cleaner');
const rename = require('rollup-plugin-rename').default;

const currentWorkingPath = process.cwd();

// Little refactor from where we get the code
const { src, name, style } = require(path.join(currentWorkingPath, 'package.json'));

// build input path using the src
const inputPath = path.join(currentWorkingPath, src);

// Little hack to just get the file name
const packageRegEx = /@coopdigital\/component-|@coopdigital\/foundations-/;

// see below for details on the options
const inputOptionsJS = {
  input: inputPath,
  external: ['react', 'prop-types', /\.pcss$/],
  plugins: [
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json', '.pcss', '.css'],
    }),
    cleaner({
      targets: [
        './dist/index.[cjs,mjs].js',
      ],
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
    plugins: [
      rename({
        map: (name) => name.replace('.pcss', '.css'),
      }),
    ],
  },
  {
    file: 'dist/index.esm.js',
    format: 'esm',
    plugins: [
      rename({
        map: (name) => name.replace('.pcss', '.css'),
      }),
    ],
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
