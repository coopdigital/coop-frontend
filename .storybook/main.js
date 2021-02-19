module.exports = {
  "stories": [
    "../packages/**/**/*.stories.mdx",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
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
  ]
}