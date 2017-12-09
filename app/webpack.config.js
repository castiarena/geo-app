const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react'],
          plugins: [
            [
              'react-css-modules',
              {
                context: path.resolve(__dirname, 'src')
              }
            ]
          ]
        }
      },
      {
        test: /\.css$/,        
        include: path.resolve(__dirname, './src'),
        loaders: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ],
      },
      {
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
          loader: 'file-loader',
          query: {
              name: 'media/[name].[ext]'
          }
      }
    ]
  },
  plugins: [
    //new webpack.DefinePlugin(getClientEnvironment('')),
    new webpack.optimize.UglifyJsPlugin({ mangle: false }),
    new ExtractTextPlugin({ filename: '[name].css' }, { allChunks: true}),
    new ForceCaseSensitivityPlugin(),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        options: {
            postcss: [
                autoprefixer({
                    browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
                })
            ]
        }
    })
  ]
};