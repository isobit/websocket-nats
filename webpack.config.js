var webpack = require('webpack');
module.exports = {
	entry:  './bootstrap.js',
	output: {
		path:     './dist',
		filename: 'bundle.js',
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({minimize: true})
	]
};
