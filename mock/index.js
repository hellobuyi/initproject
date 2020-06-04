const bodyParser = require('body-parser')
// 引入其他API接口
const analyze = require('./data')

// 返回一个函数
module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  // 系统数据
  analyze.init(app)
}
