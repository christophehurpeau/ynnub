module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      // order is first-to-last

      // 1. Typescript
      '@babel/preset-typescript',

      // 2. optimizations
      [
        'babel-preset-optimizations',
        { keepFnName: true, simplify: false, undefinedToVoid: false },
      ],

      // 3. discard, just after optimizations
      [{ plugins: ['babel-plugin-discard-module-references'] }],

      // 4. next preset: env, react, ...
      [
        'next/babel',
        {
          'preset-env': {
            loose: true,
            shippedProposals: true,
          },
          'preset-react': { useBuiltIns: true },
        },
      ],
    ]
      // default order is last-to-first
      .reverse(),

    plugins: ['babel-plugin-jsx-code', 'babel-plugin-inline-classnames-babel7'],
  };
};
