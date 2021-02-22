const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/renderer.tsx'),
  output: {
    filename: 'js/app.[name].js',
    path: path.resolve(__dirname, '../app/assets/'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
