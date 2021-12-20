import rollup from 'rollup';
import path from 'path'
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy'
import cleaner from 'rollup-plugin-cleaner'
import rename from 'rollup-plugin-rename';
import postcss from 'rollup-plugin-postcss';


const currentWorkingPath = process.cwd();
const { src, name, style, styleSrc } = require(path.join(currentWorkingPath, 'package.json'));

const inputPathJS = path.join(currentWorkingPath, src);
const inputPathCSS = path.join(currentWorkingPath, styleSrc);
// const inputPathHTML = path.join(currentWorkingPath, src);

const packageRegEx = /@coopdigital\/component-|@coopdigital\/foundations-/;

export default [

    {
        input: inputPathJS,
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
        ],
        output:[
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
    },
    {

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
            }
        ]
    }
]