module.exports = {
  entry: ['./frontend/js/main.jsx'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel' },
      { test: /\.js$/, loader: 'babel' },
      { test: /\.sass$/, loader: 'style!css!sass?sourceMap&indentedSyntax' },
      { test: /\.svg$/, loader: 'url-loader' }  
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
