const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/app.css'
    }),
    new CleanWebpackPlugin({
      root: process.cwd(),
      verbose: true,
      dry: false,
      cleanOnceBeforeBuildPatterns: [
        '**/js/*',
        '**/css/app.css',
        '!**/js/neutralino.js',
        '!**/img/*'
      ]
    })
  ]
});
