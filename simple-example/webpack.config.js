var path = require('path');

module.exports = {
	entry: [ path.resolve('./js/app.js') ],
	output: {
		path: path.resolve('build/js/'),
		filename: 'bundle.js',
		publicPath: '/public/assets/js'
	},

	devServer: {
		contentBase: 'public'
	},

	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint'
			}
		],
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loaders: [ 'style', 'css' ]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: [ 'style', 'css', 'sass' ]
			}
		]
	}
}