/* eslint-disable no-nested-ternary */
const path = require('path');

const defaultResolveLoader = loader => loader;

const cssLoaderOptions = function(importLoaders, global, production) {
  return {
    sourceMap: false,
    modules: !global,
    minimize: production !== false,
    importLoaders,
    localIdentName: global
      ? undefined
      : production !== false ? '[hash:base64]' : '[name]__[local]___[hash:base64:5]',
    discardComments: {
      removeAll: production !== false,
    },
  };
};

const createScssModuleRule = function(
  { extractLoader, global = false, plugins, production, themeFile, includePaths = [], resolveLoader = defaultResolveLoader } = {},
) {
  return {
    test: global ? /\.global\.scss$/ : /^((?!\.global).)*\.scss$/,
    use: [
      extractLoader,
      !global ? {
        loader: resolveLoader('typings-for-css-modules-loader'),
        options: {
          namedExports: true,
          ...cssLoaderOptions(2, global, production),
        }
      } : {
        loader: resolveLoader('css-loader'),
        options: cssLoaderOptions(2, global, production),
      },
      {
        loader: resolveLoader('postcss-loader'),
        options: {
          ident: 'postcss',
          sourceMap: false,
          plugins: () => plugins,
        },
      },
      {
        loader: resolveLoader('sass-loader'),
        options: {
          sourceMap: false,
          outputStyle: production !== false && 'compressed',
          data: `$env: ${process.env.NODE_ENV};${themeFile
            ? `@import '${path.resolve(themeFile)}';`
            : ''}`,
          includePaths,
        },
      },
    ].filter(Boolean),
  };
};

const createCssModuleRule = function({ extractLoader, global = false, plugins, production, resolveLoader = defaultResolveLoader }) {
  return {
    test: /\.css$/,
    use: [
      extractLoader,
      {
        loader: resolveLoader('typings-for-css-modules-loader'),
        options: {
          namedExports: true,
          ...cssLoaderOptions(1, global, production),
        },
      },
      {
        loader: resolveLoader('postcss-loader'),
        options: {
          ident: 'postcss',
          sourceMap: false,
          plugins: () => plugins,
        },
      },
    ].filter(Boolean),
  };
};

exports.createModuleRules = function(
  { extractLoader, plugins, production, themeFile, includePaths, resolveLoader = defaultResolveLoader } = {},
) {
  return [
    createScssModuleRule({
      extractLoader,
      global: true,
      plugins,
      production,
      themeFile,
      includePaths,
      resolveLoader,
    }),

    createScssModuleRule({
      extractLoader,
      global: false,
      plugins,
      production,
      themeFile,
      includePaths,
      resolveLoader,
    }),

    createCssModuleRule({
      extractLoader,
      global: false,
      plugins,
      production,
      resolveLoader,
    }),
  ];
};
