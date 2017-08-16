const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = Merge(CommonConfig, {
  entry: {
    app: `${APP_DIR}/index.js`,
    vendor: [
      'apollo-client',
      'lodash',
      'material-ui',
      'react',
      'react-apollo',
      'react-dom',
      'react-hot-loader',
      'react-redux',
      'react-router',
      'react-router-dom',
      'react-tap-event-plugin',
      'recompose',
      'redux',
      'redux-logger',
      'redux-thunk',
    ],
  },
  plugins: [
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // new BundleAnalyzerPlugin(),
  ],
  output: {
    path: BUILD_DIR,
    filename: '[name].[chunkHash].js',
    publicPath: '/',
  },
});
