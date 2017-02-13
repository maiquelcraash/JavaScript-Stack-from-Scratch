/**
 * Created by maiquel on 13/02/17.
 */

module.exports =  {
	output: {
		filename: 'client-bundle.js',
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: [/node_modules/],
			},
		],
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
}