module.exports = {
  plugins: [
    require('postcss-import')({
      path: [
        '../node_modules',
        'node_modules',
      ],
    }),
    require('postcss-custom-media'),
    require('postcss-custom-properties')({
      preserve: false,
    }),
    require('postcss-nesting'),
    require('postcss-calc'),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
