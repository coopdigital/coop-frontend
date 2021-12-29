/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import cleaner from 'rollup-plugin-cleaner';
import postcss from 'rollup-plugin-postcss';

export default function cssBuild(packageDirectory, packageContents) {
  const { sources, style } = packageContents;

  if (sources.styles === undefined || style === undefined) return undefined;

  const input = path.join(packageDirectory, sources.styles);
  const output = path.join(packageDirectory, style);

  return {
    input,
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
