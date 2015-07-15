var config = require('./webpack.config');
var webpack = require('webpack');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("development")
    }
  })
);

module.exports = config;
