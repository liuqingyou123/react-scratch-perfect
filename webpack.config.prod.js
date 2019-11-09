const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  mode: 'production', 
  
  entry: {
    index: './src/index.jsx'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "lib"),
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.(jpg|png|gif|bmp|jpeg|ttf|eot|svg|woff|woff2)$/, use: [{loader: "url-loader", options: {limit:1024, name:'[name]-[hash].[ext]'}}] },
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  externals: [nodeExternals()],

  plugins: [
    
  ]
}