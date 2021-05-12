const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  // 入口
  entry: {
    main: './src/index.js'
    // sub: './src/index.js'
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: {
          // loader: 'url-loader' 会将图片转换为base64的格式
          // file-loader 会将图片转换为文件格式引入
          loader: 'url-loader',
          options: {
            // 占位符
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            // 如果图片小于limit则转为base64引入
            // 如果图片大于limit则同file-loader
            limit: 2048
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}
