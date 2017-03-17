const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
        app: [ path.join(__dirname, 'demo/index.js'), path.join(__dirname, 'style/main.less')],
        vendor: [
            'react',
            'react-dom'
        ]
    },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'react-edit-inline.[chunkHash].js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.less$/,
      loaders: ExtractTextPlugin.extract('css-loader!less-loader')
    },
    {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file-loader?name=fonts/[name].[hash].[ext]"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file-loader?name=fonts/[name].[hash].[ext]"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file-loader?name=fonts/[name].[hash].[ext]"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file-loader?name=fonts/[name].[hash].[ext]"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file-loader?name=fonts/[name].[hash].[ext]"
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
      template: 'index.html'
    }),
    new ExtractTextPlugin('react-edit-inline.[contentHash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'], 
      minChunks: Infinity,
      filename: `external/[name].[chunkHash].js`
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
