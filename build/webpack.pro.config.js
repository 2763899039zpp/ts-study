const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        new CleanWebpackPlugin() // 每次成功构建之后帮助我们清空dist目录
    ]
}
