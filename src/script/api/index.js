import urlArray from './urlArray.js'
const baseApi = 'http://localhost:8080'
const kpst = {
  get: (_this, key, callback, data) => {
    var url = urlArray[key]
    _this.axios.get(baseApi + url, { params: data }).then((response) => {
      if (response.data === null) return
      kpst.result(_this, response.data, callback, true)
    }).catch((error) => {
      _this.$message({ showClose: true, message: error, type: 'error' })
    })
  },
  post: (_this, key, callback, data) => {
    var url = urlArray[key]
    var values = data || {}
    if (_this.utils.kpstEncryption) {
      values = { content: _this.utils.aesEncrypt(values) }
    }
    _this.axios.post(baseApi + url, values).then((response) => {
      if (data === null) return
      kpst.result(_this, response.data, callback, true)
    }).catch((error) => {
      _this.$message({ showClose: true, message: error, type: 'error' })
    })
  },
  result: (_this, data, callback, b) => {
    if (data.status === 200) {
      var content = data.msg
      callback.call(this, content)
      return
    }
    if (data.status === 240) {
      _this.$message({ showClose: true, message: '您没有登陆,请联系管理员..', type: 'error' })
      _this.$router.push({ path: '/login' })
      return
    }
    if (data.status === 241) {
      _this.$message({ showClose: true, message: '您没有该对象权限,请联系管理员..', type: 'error' })
      return
    }
    if (data.status === 521) {
      _this.$message({ showClose: true, message: data.msg, type: 'error' })
      return
    }
    if (data.status === 500) {
      _this.$message({ showClose: true, message: '请不要非法操作..', type: 'error' })
    }
  }
}
export default kpst
