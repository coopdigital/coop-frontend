/* eslint-disable import/no-extraneous-dependencies */
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import path from 'path';
import cleaner from 'rollup-plugin-delete';
import copy from 'rollup-plugin-copy';

export default function componentBuild(packageDirectory, packageContents) {
  const { main, module, sources, devDependencies, dependencies, peerDependencies } =
    packageContents;

  const combinedDependencies = {
    devDependencies: devDependencies ? Object.keys(devDependencies) : [],
    peerDependencies: peerDependencies ? Object.keys(peerDependencies) : [],
    dependencies: dependencies ? Object.keys(dependencies) : [],
  };

  if (sources.main === undefined) return undefined;

  const input = path.join(packageDirectory, sources.main);
  return {
    input,
    external: [
      /\.pcss$/,
      ...combinedDependencies.devDependencies,
      ...combinedDependencies.peerDependencies,
      ...combinedDependencies.dependencies,
    ],
    plugins: [
      resolve({
        extensions: ['.mjs', '.js', '.jsx'],
      }),
      cleaner({
        targets: ['./dist/**.js', './dist/jinja', './dist/html'],
      }),
      babel({
        presets: ['@babel/preset-env', '@babel/preset-react'],
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      copy({
        targets: [
          { src: 'src/html/**/*.html', dest: 'dist/html' },
          { src: 'src/jinja/**.html', dest: 'dist/jinja' },
        ],
      }),
    ],
    output: [
      {
        file: path.resolve(main),
        format: 'cjs',
      },
      {
        file: path.resolve(module),
        format: 'esm',
      },
    ],
  };
}
