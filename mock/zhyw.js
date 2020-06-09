const Mock = require('mockjs') // mockjs 导入依赖模块
const util = require('./util') // 自定义工具模块
module.exports = {
  init: (app) => {
    app.get('/api/zhyw/zhywMenu', function (rep, res) {
      var json = util.getJsonFile('./data/zhywMenu.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array))
    })
  }
}
