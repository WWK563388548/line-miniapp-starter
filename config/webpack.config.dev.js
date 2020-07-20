const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const appSrc = path.resolve(__dirname, '../src');
const appDist = path.resolve(__dirname, '../dist');
const appPublic = path.resolve(__dirname, '../public');
const appIndex = path.resolve(appSrc, 'index.js');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: appPublic,
    hot: true,
    host: 'localhost',
    port: 8998,
    historyApiFallback: true,
    // displays error on browser
    overlay: true,
    inline: true,
    // print error info
    stats: 'errors-only',
    // set up proxy
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'https://easy-mock.com/mock/5c2dc9665cfaa5209116fa40/example',
        pathRewrite: {
            '^/api/': '/'
        }
      }
    }
  },
  entry: appIndex,
  output: {
    filename: 'public/js/[name].[hash:8].js',
    path: appDist,
    publicPath: '/'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: appHtml,
      filename: 'index.html'
    })
  ]
}