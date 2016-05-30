/* eslint-disable no-var */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  output: {
    publicPath: '/',
    libraryTarget: 'commonjs2', // necessary for the babel plugin
    path: path.join(__dirname, 'lib-css'), // where to place webpack files
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        // eslint-disable-next-line max-len
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=atriumReactPlugin__[local]__[hash:base64:5]!postcss-loader'),
      },
    ],
  },
  postcss: [autoprefixer({ browsers: ['> 1%'] })],
  plugins: [
    new ExtractTextPlugin('[contenthash].css'),
  ],
};
