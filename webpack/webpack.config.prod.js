const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const appSrc = path.resolve(__dirname, '../src');
const appDist = path.resolve(__dirname, '../dist');
const appPublic = path.resolve(__dirname, '../public');
const appIndex = path.resolve(appSrc, 'index.tsx');
const appHtml = path.resolve(appPublic, 'index.html');

module.exports = {
  mode: 'production',
  devtool: 'hidden-source-map',
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
    new MiniCssExtractPlugin({
      filename: 'public/styles/[name].[contenthash:8].css',
      chunkFilename: 'public/styles/[name].[contenthash:8].chunk.css'
    }),
    new webpack.DefinePlugin({
      // Defining NODE_ENV to production
      'process.env': {
          NODE_ENV: JSON.stringify('production')
      }
    }),
    new CleanWebpackPlugin()
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
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local].[hash:8]'
              },
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
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
  optimization: {
    // Bundle js/css and uglify them
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
              // Output warnings when Uglifyjs remove unused code
              warnings: false,
              // Remove all console code
              drop_console: true,
              // collapse vars that be defined but only use once
              collapse_vars: true,
              // Extract values to vars that be used many times value
              reduce_vars: true,
          },
          output: {
              // The smallest output
              beautify: false,
              // Remove all comments
              comments: false,
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|scss|sass)/,
          chunks: 'all',
          enforce: true,
          reuseExistingChunk: true
        },
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
          reuseExistingChunk: true
        },
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: true
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