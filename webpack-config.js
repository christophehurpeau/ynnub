const path = require('path');

exports.createModuleRule = function(ExtractTextPlugin, { global = false, plugins, publicPath, production, themeFile }) {
  return {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      publicPath,
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: false,
            modules: !global,
            minimize: production !== false,
            importLoaders: 2,
            localIdentName: production !== false ? '[hash:base64]' :
              '[name]__[local]___[hash:base64:5]',
            discardComments: {
              removeAll: production !== false,
            }
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: false,
            plugins: () => plugins,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: false,
            outputStyle: production !== false && 'compressed',
            data: "$env: " + process.env.NODE_ENV + ";"
          },
        },
        themeFile && {
          loader: 'banner-content-loader',
          options: {
            prefix: `@import '${path.resolve(themeFile)}';`,
          },
        },
      ].filter(Boolean)
    }),
  }
};

exports.createExtractPlugin = function(ExtractTextPlugin, options) {
  return new ExtractTextPlugin(Object.assign({}, { allChunks: true }, options));
};
