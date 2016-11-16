var webpack = require('webpack');
module.exports = {
  entry:  './bootstrap.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
  }
};

if (process.env.NODE_ENV === 'prod') {
  module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]);
}
