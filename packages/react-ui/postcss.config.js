/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
  map: {
    inline: false,
  },
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
