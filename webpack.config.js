const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      path: path.resolve(__dirname, './public'),
      filename: 'bundle.js',
    },
    devServer: {
      static: path.resolve(__dirname, './public'),
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
        ]
    },
    resolve: {
      extensions: ['*', '.js']
    },
}