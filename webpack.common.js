const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');

const config = {
  plugins: [
    new webpack.NamedChunksPlugin(),
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
    }),
    new CopyWebpackPlugin([
      // Copy directory contents to {output}/to/directory/
      { from: 'extra' },
    ]),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader'],
    }, {
      test: /\.(jpg|gif|png|svg)$/,
      loader: ['file-loader'],
    }],
  },

};

module.exports = config;
