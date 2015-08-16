/* eslint es6:false */

var autoprefixer = require('autoprefixer-core');

module.exports = {
  entry: {
    app: './app/app.js',
    html: './app/index.html'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  devtool: '#source-map',
  postcss: function () {
    return [autoprefixer];
  }
};
