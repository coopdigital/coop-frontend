module.exports = {
  "stories": [
    "../packages/**/**/*.stories.mdx",
  ],
  "addons": [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
    'storybook-addon-designs/register',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.pcss$/,
      use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
    });
    return config;
  },
}