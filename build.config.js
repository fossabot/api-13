const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server.js',
  target: 'node',
  externals: [nodeExternals()],
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js'
  },
  resolve: {
    mainFields: ['main']
  }
};