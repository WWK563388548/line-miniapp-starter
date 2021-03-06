const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const autoprefixer = require('autoprefixer');

const appSrc = path.resolve(__dirname, '../src');
const appDist = path.resolve(__dirname, '../dist');
const appPublic = path.resolve(__dirname, '../public');
const appIndex = path.resolve(appSrc, 'index.tsx');
const appHtml = path.resolve(appPublic, 'index.html');

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
    }),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader?cacheDirectory',
        include: [ appSrc ],
        exclude: /node_modules/
      },
      // Handle css/sass/scss
      {
        test: /\.(sc|sa|c)ss$/,
        include: [path.join(__dirname, '../', './src')],
        use: [
          'style-loader',
          "@teamsupercell/typings-for-css-modules-loader",
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local].[hash:8]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          'sass-loader'
        ]
      },
      // Handle images
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // Handle fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      // Handle csv
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      // Handle xml
      {
        test: /\.xml$/,
        use: [
            'xml-loader'
        ]
      },
      // Handle MakeDown
      {
        test: /\.md$/,
        use: [
          'html-loader',
          'markdown-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      src: appSrc,
      utils: path.resolve(__dirname, '../src/utils'),
      pages: path.resolve(__dirname, '../src/pages'),
      components: path.resolve(__dirname, '../src/components'),
      modules: path.resolve(__dirname, '../node_modules'), // Only can find modules from node_modules of project
    }
  }
}