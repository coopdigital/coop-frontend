/* eslint-disable import/no-extraneous-dependencies */
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import path from 'path';
import cleaner from 'rollup-plugin-cleaner';
import copy from 'rollup-plugin-copy';
import rename from 'rollup-plugin-rename';

export default function reactBuild(packageDirectory, packageContents) {
  const { sources } = packageContents;

  if (sources.react === undefined) return undefined;

  const input = path.join(packageDirectory, sources.react);
  return {
    input,
    external: ['react', 'prop-types', /\.pcss$/],
    plugins: [
      resolve({
        extensions: ['.mjs', '.js', '.jsx'],
      }),
      cleaner({
        targets: ['./dist/react/', './dist/jinja'],
      }),
      babel({
        presets: ['@babel/preset-env', '@babel/preset-react'],
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      copy({
        targets: [
          { src: 'src/html/**.html', dest: 'dist/html' },
          { src: 'src/jinja/**.html', dest: 'dist/jinja' },
        ],
      }),
    ],
    output: [
      {
        file: 'dist/react/index.cjs.js',
        format: 'cjs',
        plugins: [
          rename({
            map: (name) => name.replace('.pcss', '.css'),
          }),
        ],
      },
      {
        file: 'dist/react/index.esm.js',
        format: 'esm',
        plugins: [
          rename({
            map: (name) => name.replace('.pcss', '.css'),
          }),
        ],
      },
    ],
  };
}
