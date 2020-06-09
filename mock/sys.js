const Mock = require('mockjs') // mockjs 导入依赖模块
const util = require('./util') // 自定义工具模块
module.exports = {
  init: app => {
    // 监听http请求
    app.get('/api/user/userinfo', function (rep, res) {
      // 每次响应请求时读取mock data的json文件
      // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
      var json = util.getJsonFile('./data/userInfo.json')
      // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
      res.json(Mock.mock(util.response(200, json)))
    })
    // 普通登录
    app.post('/api/loginAction', function (rep, res) {
      var body = rep.body
      if (body.username !== 'admin' && body.password !== '123456') {
        res.json(Mock.mock(util.response(521, '用户或密码错误..')))
        return
      }
      var json = util.getJsonFile('./data/userInfo.json')
      res.json(Mock.mock(util.response(200, json)))
    })
    // 注销用户
    app.get('/api/sys/destroy', function (rep, res) {
      //  var body = rep.body 根据sessionId删除redis 的用户登录信息
      res.json(Mock.mock(util.response(200, 'success')))
    })

    // 修改密码
    app.post('/api/sys/changePwd', function (rep, res) {
      res.json(Mock.mock(util.response(200, 'success')))
    })

    // 获取首页菜单
    app.get('/api/sys/get/menu_sys', function (rep, res) {
      var json = util.getJsonFile('./data/navigation.json')
      var array = Mock.mock(json)
      res.json(Mock.mock(util.response(200, array.menu_sys)))
    })
    // 获取菜单信息
    app.get('/api/sys/get/menu/list', function (rep, res) {
      var id = rep.query.dxid
      var json = id
      if (id === 'zyfw') {
        // 分系统类型获取,档案
        json = util.getJsonFile('./data/zhywMenu.json')
      } else if (id === 'yjfy') {
        json = util.getJsonFile('./data/yjfyMenu.json')
      }
      res.json(Mock.mock(util.response(200, json)))
    })
  }
}
