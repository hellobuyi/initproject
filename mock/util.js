const fs = require('fs')// 引入文件系统模块
const path = require('path')// 引入path模块

module.exports = {
  // 读取json文件
  getJsonFile: function (filePath) {
    // 读取指定json文件
    var file = path.resolve(__dirname, filePath)
    var json = fs.readFileSync(file, 'utf-8')
    return JSON.parse(json)
  },
  response: function (status, json) {
    if (json === undefined) return { status: status }
    return { status: status, msg: json }
  }
}
