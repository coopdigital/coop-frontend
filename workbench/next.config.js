module.exports = {
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
};
