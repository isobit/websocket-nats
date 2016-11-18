const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry:  './bootstrap.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'prod') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]);
}
