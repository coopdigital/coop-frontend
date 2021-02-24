function isBabelCli(caller) {
  console.log("CALLER::: ", caller);
  return !!(caller && caller.name === "@babel/cli");
}

const moduleExtensions = ['module-extension', {
  cjs: '',
  mjs: '',
  jsx: '',
}];

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
      corejs: 3,
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
