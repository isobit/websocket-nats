const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry:  './entry.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'websocket-nats.js'
  }
};

if (process.env.NODE_ENV === 'dev') {
  module.exports.output.filename = 'websocket-nats.dev.js';
  module.exports.devtool = '#eval-source-map';
}

if (process.env.NODE_ENV === 'prod') {
  module.exports.output.filename = 'websocket-nats.min.js';
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]);
}
