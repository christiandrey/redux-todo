const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const AsyncChunkNames = require("webpack-async-chunk-names-plugin");

module.exports = {
	entry: {
		main: ["./src/index.tsx"]
	},
	output: {
		path: path.resolve(__dirname, "dist/bundles"),
		filename: "main.js",
		chunkFilename: "[name].js",
		publicPath: "/bundles/"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader"
				}
			}
		]
	},
	resolve: {
		extensions: [".less", ".css", ".ts", ".tsx", ".js"]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				default: false,
				vendors: false,
				// VENDOR CHUNK
				vendor: {
					chunks: "all",
					name: "vendor",
					test: /node_modules/
				},

				// COMMON CHUNK
				common: {
					name: "common",
					minChunks: 2,
					chunks: "async",
					priority: 10,
					reuseExistingChunk: true,
					enforce: true
				}
			}
		}
	},
	plugins: [
		// new CleanWebpackPlugin("dist", {}),
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, "index.html"),
			filename: "../index.html"
		}),
		new AsyncChunkNames()
	]
};
