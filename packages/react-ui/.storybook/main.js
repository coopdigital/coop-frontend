module.exports = {
  stories: ["../src/**/src/*.stories.mdx"],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-postcss",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
    "@whitespace/storybook-addon-html",
    "storybook-addon-designs/register",
  ],

};
