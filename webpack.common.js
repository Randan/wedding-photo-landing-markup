const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    require.resolve('@babel/polyfill'),
    path.join(__dirname, '/src/script/index.js')
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'script.js',
    publicPath: ''
  }
};
