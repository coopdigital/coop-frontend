import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import cleaner from 'rollup-plugin-cleaner';
import rename from 'rollup-plugin-rename';
import postcss from 'rollup-plugin-postcss';
import htmlEntry from 'rollup-plugin-html-entry';
import glob from 'glob';

const currentWorkingPath = process.cwd();
const { src, name, style, styleSrc } = require(path.join(
  currentWorkingPath,
  'package.json'
));

const srcPath = `${currentWorkingPath}/src/`;
const inputPathJS = path.join(currentWorkingPath, src);
const inputPathCSS = path.join(currentWorkingPath, styleSrc);
const inputPathHTML = path.join(currentWorkingPath, 'src/html/**.html');
const inputPathJINJA = path.join(currentWorkingPath, 'src/jinja/*.html');


const hasHTML = glob.sync(srcPath + '**/*.html').length > 0;
const hasJINJA = glob.sync(srcPath + 'jinja/*.html').length > 0;
const hasPCSS = glob.sync(srcPath + '**/*.html').length > 0;
const hasJSX = glob.sync(srcPath + '**/index.mjs').length > 0;
const hasIndexJS = glob.sync(srcPath + '**/index.mjs').length > 0;

const exportedConfig = [];

const configJSX = {};

const configJS = {
  input: inputPathJS,
  external: ['react', 'prop-types', /\.pcss$/],
  plugins: [
    resolve({
      extensions: ['.mjs', '.cjs', '.js', '.jsx'],
    }),
    cleaner({
      targets: ['./dist/index.[cjs,mjs].js'],
    }),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
      exclude: ['node_modules/**', '**/*.[test,spec].js'],
    }),
  ],
  output: [
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
  ],
};

const configPCSS = {
  input: inputPathCSS,
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
  output: [
    {
      file: style,
      format: 'esm',
    },
  ],
};

const configHTML = {
  input: 'src/html/*.html',
  plugins: [
    htmlEntry({ exports: false }),
    cleaner({
      targets: [
        './dist/html/',
        './dist/jinja/',
      ],
    }),
    copy(
      {
        targets: [
          { src: 'src/html/**.html', dest: 'dist/html' },
        ],
      },
    ),
  ],
};

const configJINJA = {
  input: 'src/jinja/*.html',
  plugins: [
    htmlEntry({ exports: false }),
    cleaner({
      targets: [
        './dist/jinja/',
      ],
    }),
    copy(
      {
        targets: [
          { src: 'src/jinja/**.html', dest: 'dist/jinja' },
        ],
      },
    ),
  ],
};


//load config/add config to config array used in default export
/* Idea: possibly look up both jinja and html templates here
       or split out conditionals to check for jinja and html */
if(hasHTML) {
  exportedConfig.push(configHTML)
}

if(hasJINJA) {
  exportedConfig.push(configJINJA)
}

if(hasPCSS) {
  exportedConfig.push(configPCSS)
}

if(hasIndexJS) {
  exportedConfig.push(configJS)
} else if(hasJSX) {
  // exportedConfig.push(configJSX)
}

export default exportedConfig;

// [
//   {
//     input: inputPathJS,
//     external: ['react', 'prop-types', /\.pcss$/],
//     plugins: [
//       resolve({
//         extensions: ['.mjs', '.cjs', '.js', '.jsx'],
//       }),
//       cleaner({
//         targets: ['./dist/index.[cjs,mjs].js'],
//       }),
//       babel({
//         presets: ['@babel/preset-env', '@babel/preset-react'],
//         babelHelpers: 'bundled',
//         exclude: ['node_modules/**', '**/*.[test,spec].js'],
//       }),
//     ],
//     output: [
//       {
//         file: 'dist/index.cjs.js',
//         format: 'cjs',
//         plugins: [
//           rename({
//             map: (name) => name.replace('.pcss', '.css'),
//           }),
//         ],
//       },
//       {
//         file: 'dist/index.esm.js',
//         format: 'esm',
//         plugins: [
//           rename({
//             map: (name) => name.replace('.pcss', '.css'),
//           }),
//         ],
//       },
//     ],
//   },
//   {
//     input: inputPathCSS,
//     plugins: [
//       cleaner({
//         targets: ['./dist/css'],
//       }),
//       postcss({
//         config: {
//           path: '../../postcss.config.js',
//         },
//         sourceMap: true,
//         extensions: ['.pcss', '.css'],
//         inject: false,
//         modules: false,
//         extract: path.resolve(style),
//       }),
//     ],
//     output: [
//       {
//         file: style,
//         format: 'esm',
//       },
//     ],
//   },
// ];