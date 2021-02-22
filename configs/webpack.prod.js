const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');

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
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'app/template.html',
      publicPath: '/assets',
      title: 'NeutralinoJs',
      inject: 'body',
      scriptLoading: 'blocking',
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeAttributeQuotes: false
      }
    }),
    new BeautifyHtmlWebpackPlugin({
      indent_size: 2,
      indent_char: ' ',
      indent_with_tabs: true,
      end_with_newline: true
    }),
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/app.css'
    }),
    new CleanWebpackPlugin({
      root: process.cwd(),
      verbose: true,
      dry: false,
      cleanOnceBeforeBuildPatterns: [
        '**/js/app.*',
        '**/css/app.css',
        '!neutralino.js',
        '!**/img/neutralino.png'
      ]
    })
  ]
});
