const withTM = require('next-transpile-modules')([
  '../node_modules/@coopdigital/component-searchable-dropdown',
]);

module.exports = withTM({
  reactStrictMode: true,
  basePath: '/workbench',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pcss/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'postcss-loader',
        },
      ],
    });

    return config;
  },
});
