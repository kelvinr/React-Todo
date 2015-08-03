var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './frontend/js/main.jsx'
  ],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(jsx|js)$/, loader: 'react-hot!babel', exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass?sourceMap') },
      { test: /\.svg$/, loader: 'url-loader' }  
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/style.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
