function isBabelCli(caller) {
  return !!(caller && caller.name === "@babel/cli");
}

/** remove pcss to stop storybook build breaking */
const moduleExtensions = ['module-extension', {
  cjs: '',
  mjs: '',
  jsx: '',
}];

/**  when using the transform on pcss,
 *   it breaks our storybook build due to src component
 *  not being able to find .css extensions.
 * Only add this extension transform on cli build  */
const moduleExtensionsWithPcss = ['module-extension', {
  cjs: '',
  mjs: '',
  jsx: '',
  pcss: 'css',
}];

module.exports = (api) => {
  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-object-rest-spread',
  ];

  if (api.caller(isBabelCli) === true) {
    plugins.push(moduleExtensionsWithPcss);
  } else {
    plugins.push(moduleExtensions);
  }

  api.cache(true);

  const presets = [
    ['@babel/preset-env', {
      bugfixes: true,
      corejs: '3.9',
      loose: true,
      shippedProposals: true,
      useBuiltIns: 'usage',
    }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];

  const ignore = ['design-system', '**/*.stories.(js|mdx)'];

  return {
    presets,
    plugins,
    ignore,
  };
};
