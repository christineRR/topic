
module.exports = {
	entry: './src/tab.jsx',
	output: {
		path: './build',
		filename: 'app.js'
	},

	resolve: {
		extension: ['', '.js', '.jsx', '.css']
	},

	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader'
		}, {
			test: /\.jsx$/,
			loader: 'babel-loader!jsx-loader?harmony'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}]
	}
}