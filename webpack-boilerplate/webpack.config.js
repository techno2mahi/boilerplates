const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: ['style-loader' , 'css-loader'], exclude: /node_modules/},
    ]
  },  
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ], 
  mode : 'development'
};