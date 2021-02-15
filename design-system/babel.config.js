module.exports = (api) => {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', {
      corejs: 3,
      loose: true,
      shippedProposals: true,
      useBuiltIns: 'usage',
    }],
  ];

  const plugins = [
    '@babel/plugin-transform-runtime',
    ['module-extension', {
      cjs: '',
      mjs: '',
    }],
  ];

  return {
    presets,
    plugins,
  };
};
