var path = require('path')
module.exports = {
  entry: './src/v-swipeclose.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'Vue-SwipeClose.js'
  },
  externals: {
    vue: 'Vue'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}