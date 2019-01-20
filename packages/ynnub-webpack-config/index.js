/* eslint-disable no-nested-ternary */

'use strict';

const path = require('path');

const defaultResolveLoader = (loader) => loader;

const cssLoaderOptions = function(
  importLoaders,
  global,
  production,
  targetIsNode
) {
  return {
    exportOnlyLocals: targetIsNode,
    sourceMap: !production,
    modules: global ? 'global' : 'local',
    importLoaders,
    localIdentName: global
      ? undefined
      : production !== false
      ? '[hash:base64]'
      : '[name]__[local]___[hash:base64:5]',
  };
};

const createScssModuleUse = function({
  target,
  extractLoader,
  global = false,
  plugins,
  production,
  themeFile,
  includePaths = [],
  resolveLoader = defaultResolveLoader,
} = {}) {
  if (global && target === 'node') {
    return [resolveLoader('ignore-loader')];
  }

  return [
    !production &&
      target !== 'node' && { loader: resolveLoader('extracted-loader') },
    target !== 'node' && extractLoader,
    {
      loader: resolveLoader('css-loader'),
      options: cssLoaderOptions(2, global, production, target === 'node'),
    },
    !global &&
      !production &&
      target !== 'node' && {
        loader: resolveLoader('typed-css-modules-loader'),
        options: { noEmit: true },
      },
    {
      loader: resolveLoader('postcss-loader'),
      options: {
        ident: 'postcss',
        sourceMap: !production,
        plugins: () => plugins,
      },
    },
    {
      loader: resolveLoader('sass-loader'),
      options: {
        sourceMap: !production,
        outputStyle: production !== false && 'compressed',
        data: `$env: ${process.env.NODE_ENV};${
          themeFile ? `@import '${path.resolve(themeFile)}';` : ''
        }`,
        includePaths,
      },
    },
  ].filter(Boolean);
};

const createCssModuleRule = function({
  target,
  extractLoader,
  global = false,
  plugins,
  production,
  resolveLoader = defaultResolveLoader,
}) {
  if (global && target === 'node') {
    return [resolveLoader('ignore-loader')];
  }

  return {
    test: /\.css$/,
    use: [
      !production &&
        target !== 'node' && { loader: resolveLoader('extracted-loader') },
      target !== 'node' && extractLoader,
      {
        loader: resolveLoader('css-loader'),
        options: cssLoaderOptions(1, global, production, target === 'node'),
      },
      !global &&
        !production &&
        target !== 'node' && {
          loader: resolveLoader('typed-css-modules-loader'),
          options: { noEmit: true },
        },
      {
        loader: resolveLoader('postcss-loader'),
        options: {
          ident: 'postcss',
          sourceMap: !production,
          plugins: () => plugins,
        },
      },
    ].filter(Boolean),
  };
};

const fileExtensions = ['css', 'scss'];
exports.stylesCacheGroups = {
  name: 'styles',
  test: new RegExp(`\\.+(${[...fileExtensions].join('|')})$`),
  chunks: 'all',
  enforce: true,
};

exports.createModuleRules = function({
  target,
  extractLoader,
  plugins,
  production,
  themeFile,
  includePaths,
  resolveLoader = defaultResolveLoader,
} = {}) {
  return [
    {
      test: /\.scss$/,
      oneOf: [
        {
          test: /\.global\.scss$/,
          use: createScssModuleUse({
            target,
            extractLoader,
            global: true,
            plugins,
            production,
            themeFile,
            includePaths,
            resolveLoader,
          }),
        },
        {
          use: createScssModuleUse({
            target,
            extractLoader,
            global: false,
            plugins,
            production,
            themeFile,
            includePaths,
            resolveLoader,
          }),
        },
      ],
    },

    createCssModuleRule({
      target,
      extractLoader,
      global: false,
      plugins,
      production,
      resolveLoader,
    }),
  ];
};
