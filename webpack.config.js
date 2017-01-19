var path = require('path'),
    webpack = require('webpack'),
    config = require('./app.config'),
    ionicWebpackFactory = require(process.env.IONIC_WEBPACK_FACTORY)

module.exports = {
  entry: [process.env.IONIC_APP_ENTRY_POINT, './web.config'],
  output: {
    path: '{{BUILD}}',
    filename: process.env.IONIC_OUTPUT_JS_FILE_NAME,
    devtoolModuleFilenameTemplate: ionicWebpackFactory.getSourceMapperFunction(),
  },
  devtool: process.env.IONIC_GENERATE_SOURCE_MAP ? process.env.IONIC_SOURCE_MAP_TYPE : '',

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [path.resolve('node_modules')]
  },

  module: {
    rules: [
      {
        test: /\.config$/,
        loader: 'file-loader?name=../[name].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.ts$/,
        loader: process.env.IONIC_WEBPACK_LOADER
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin(stringifyValues(config)),
    ionicWebpackFactory.getIonicEnvironmentPlugin()
  ],

  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

function stringifyValues(config) {
  var configStrings = {};

  Object.keys(config).forEach(function (key) {
    configStrings[key] = JSON.stringify(config[key]);
  });

  return configStrings;
}