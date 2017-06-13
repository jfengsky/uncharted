// var webpack = require('webpack');

import { resolve, externals, module, node } from './config'
export default {
  entry: './ts/APP/index.tsx',
  output: {
    filename: "bundle.js",
    path: __dirname + "/../dist"
  },
  // Turn on sourcemaps
  devtool: 'source-map',
  resolve,
  node,
  // Add minification
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
  ],
  module,
  externals
}