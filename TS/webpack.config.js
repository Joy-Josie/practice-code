const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 指定入口文件
  entry: './src/index.ts',
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件的名字
    filename: 'bundle.js'
  },
  // 指定webpack打包时要使用的模块
  module: {
    // 指定loader的规则
    rules: [
      {
        // 指定规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: 'ts-loader',
        // 要排除的文件夹
        exclude: /node_modules/
      }
    ]
  },
  // 配置webpack插件
  plugins: [new HTMLWebpackPlugin()]
}
