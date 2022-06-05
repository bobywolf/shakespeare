const { merge } = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const common = require('./webpack.common')
const { PROJECT_PATH, SERVER_HOST, SERVER_PORT } = require('../constant')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  target: 'web',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(PROJECT_PATH, './dist')
  },
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    // clientLogLevel: 'none',   
    compress: true,               
    open: true,                   
    hot: true,           
    // noInfo: true,
    client: {
      logging: 'none',
    }      
  },
  stats: 'errors-only',
  plugins: [
    // 实际上只开启 hot：true 就会自动识别有无声明该插件，没有则自动引入，但是怕有隐藏问题这里还是手动加上了
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    minimize: false,
    minimizer: [],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  },
})
