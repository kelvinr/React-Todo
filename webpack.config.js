module.exports = {
  entry: ['./frontend/js/main.jsx'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(jsx|js)$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.sass$/, loader: 'style!css!sass?sourceMap&indentedSyntax' },
      { test: /\.svg$/, loader: 'url-loader' }  
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
