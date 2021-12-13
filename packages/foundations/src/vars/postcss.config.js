/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/**
 * We process all our .pcss files using the postcss.config.js at the root of
 * the project. However, for this folder we want to actually preserve the
 * custom properties and media so we can distribute them.
 */
module.exports = {
  map: {
    inline: false,
  },
  plugins: [
    require('postcss-import'),
    require('postcss-custom-media')({
      preserve: true,
    }),
    require('postcss-custom-properties')({
      preserve: true,
    }),
    require('postcss-nesting'),
    require('postcss-calc'),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
