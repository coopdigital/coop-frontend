/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import cleaner from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';

export default function cssBuild(packageDirectory, packageContents) {
  const { sources, style } = packageContents;

  if (sources.style === undefined || style === undefined) return undefined;

  const input = path.join(packageDirectory, sources.style);
  const output = path.join(packageDirectory, style);

  return {
    input,
    plugins: [
      cleaner({
        targets: ['./dist/*.css', './dist/*.css.map'],
      }),
      postcss({
        config: {
          path: '../../postcss.config.js',
        },
        sourceMap: true,
        extensions: ['.pcss', '.css'],
        inject: false,
        modules: false,
        extract: path.resolve(output),
      }),
    ],
    output: [
      {
        file: output,
      },
    ],
  };
}
