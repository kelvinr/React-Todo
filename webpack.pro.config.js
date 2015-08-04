var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./frontend/js/main.jsx'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(jsx|js)$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass?sourceMap') },
      { test: /\.svg$/, loader: 'url-loader' }  
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('style.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
