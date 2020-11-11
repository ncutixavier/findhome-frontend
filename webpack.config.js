const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
	devServer: {
		port: 3050,
		historyApiFallback: {
			disableDotRule: true
		}
	},
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
      new HtmlWebPackPlugin({ template: "./public/index.html" }),
      new MiniCssExtractPlugin()
  ]
};