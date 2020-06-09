const bodyParser = require('body-parser')
// 引入其他API接口
const data = require('./data')
const sys = require('./sys')
const zhyw = require('./zhyw')

// 返回一个函数
module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  // 系统数据
  data.init(app)
  sys.init(app)
  zhyw.init(app)
}
