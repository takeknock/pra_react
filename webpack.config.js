const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var publicDir = __dirname + '/public';
module.exports = [
  {
    entry: [
      './src/index.js'
    ],
    output: {
      path: publicDir,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: publicDir
    }
  },
  {
    entry: [
      './stylesheets/index.scss'
    ],
    output: {
      path: publicDir,
      publicPath: '/',
      filename: 'bundle.css'
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
    ],
  },
]
