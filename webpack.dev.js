const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = Merge(CommonConfig, {
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      `${APP_DIR}/index.js`,
    ],
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: 8080,
    historyApiFallback: true,
  },
  devtool: 'cheap-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: '/',
  },
});
