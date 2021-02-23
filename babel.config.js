module.exports = (api) => {
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
  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-object-rest-spread',
    ['module-extension', {
      cjs: '',
      mjs: '',
      jsx: '',
    }],
  ];

  const ignore = ['design-system', '**/*.stories.(js|mdx)'];

  return {
    presets,
    plugins,
    ignore,
  };
};
