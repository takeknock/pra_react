const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 3000,
    publicPath: '/',
  },
  devtool: 'eval-source-map', // デプロイするときには削除
  mode: 'development', // デプロイするときには 'production' へ変更
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          limit: 20000,
          name: '[name].[ext]',
        },
      },
    ],
  },
};
