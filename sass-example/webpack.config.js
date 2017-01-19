var path = require('path');

module.exports = {
	entry: [path.resolve('./js/app.js')],
	output: {
		path: path.resolve('build/js/'),
		publicPath: '/public/assets/js/',
		filename: 'bundle.js'
	},

	devServer: {
		contentBase: 'public'
	},

	module: {
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loaders: ['style', 'css']
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: ['style', 'css', 'sass']
			}
		]
	}
}