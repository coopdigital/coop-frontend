module.exports = {
  plugins: [
    require('postcss-import'),
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
