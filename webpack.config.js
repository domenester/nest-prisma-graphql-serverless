/* eslint-disable @typescript-eslint/no-var-requires */
const slsw = require('serverless-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: slsw.lib.entries,
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.ts'],
  },
  optimization: {
    concatenateModules: false
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true
        }
      }
    ]
  },
  plugins: [
    new TsconfigPathsPlugin({ configFile: "./tsconfig.json" }),
    new CopyWebpackPlugin({
      patterns: [
        { from: '/home/diogo/Projetos/bem.care/services/billing/src/schema.gql', to: './src' }
      ]
    }),
    new ForkTsCheckerWebpackPlugin(), 
  ]
};