const path = require("path");

module.exports = {
	entry: "./src/index.tsx",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "app.bundle.js",
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
	},
	devServer: {
		port: 8080,
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
	},
	plugins: [
		// new ForkTsCheckWebpackPlugin(), // Static type checking running in a separate process.
	],
};
