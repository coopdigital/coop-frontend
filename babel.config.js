module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        corejs: '3.9',
        loose: true,
        shippedProposals: true,
        useBuiltIns: 'usage',
      },
    ],
    '@babel/preset-typescript',
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'module-extension',
      {
        cjs: '',
        mjs: '',
      },
    ],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ];

  return {
    presets,
    plugins,
  };
};
