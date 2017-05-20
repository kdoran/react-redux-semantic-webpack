var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './javascript/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/assets/"
  },
  devtool: 'source-map',
  resolve: {
    modules: [
      path.resolve(__dirname, 'javascript'),
      path.resolve(__dirname, 'javascript', 'components'),
      path.resolve(__dirname, 'javascript', 'containers'),
      path.resolve(__dirname, 'javascript', 'store'),
      path.resolve(__dirname, 'javascript', 'utils'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0', 'react']
          }
        }
      },
      {
        // set up standard-loader as a preloader
        enforce: 'pre',
        test: /\.js$/,
        loader: 'standard-loader',
        exclude: /node_modules/,
        options: {
          // Emit errors instead of warnings (default = false)
          error: false,
          // enable snazzy output (default = true)
          snazzy: true,
          // other config options to be passed through to standard e.g.
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "less-loader", options: { sourceMap: true } }
        ]
      }
    ]
  },
  devServer: {
   compress: true,
   hot: true,
   noInfo: true,
   historyApiFallback: true
 },
 plugins: [
   new webpack.HotModuleReplacementPlugin()
 ]
};
