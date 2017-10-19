var path = require("path");


module.exports = {
	entry: [
	  "./src/index.js"
  ],
  devtool: 'eval-source-map',
	output: {
		publicPath: "lib",
		path: __dirname + "/lib/",
		filename: "app.js",
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, '../'),
				exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          sourceMaps: true
        }
			}
		]
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  plugins: []
};
