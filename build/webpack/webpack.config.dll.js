const webpack = require('webpack');
const { dest } = require('../lib/path-helpers');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    vendor: [
      'react',
      'react-dom'
    ],
    styleguide: [
      'react-modal',
      'pretty-data',
      'react-element-to-jsx-string',
      'react-syntax-highlighter',
      'slugify'
    ]
  },
  output: {
    path: dest('assets/dlls'),
    filename: '[name].dll.js',
    library: '[name]_dll',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DllPlugin({
      path: dest('assets/dlls/[name]-manifest.json'),
      name: '[name]_dll'
    })
  ]
};
