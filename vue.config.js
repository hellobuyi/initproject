module.exports = {
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    before: require('./mock/index.js')
  },
  productionSourceMap: false // 生产环境是否生成 SourceMap
}
