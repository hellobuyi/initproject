import urlArray from './urlArray.js'
const baseApi = 'http://localhost:8081'
const result = (that, data, callback, isde) => {
  if (data.status === 240) {
    // that.$message({ showClose: true, message: '您没有登陆,请联系管理员..', type: 'error' })
    that.utils.removeStorage()
    return
  }
  if (data.status === 241) {
    that.$message({ showClose: true, message: '您没有该对象权限,请联系管理员..', type: 'error' })
    return
  }
  if (data.status === 521) {
    that.$message({ showClose: true, message: data.msg, type: 'error' })
    return
  }
  if (data.status === 500) {
    that.$message({ showClose: true, message: '请不要非法操作..', type: 'error' })
    return
  }
  if (data.status === 200) {
    let content = data.msg
    if (content === 'ok') {
      callback.call(this)
      return
    }
    if (that.utils.openKey && (!isde)) {
      content = JSON.parse(that.utils.decode(content))
    }
    callback.call(this, content)
    return
  }
  that.$message({ showClose: true, message: '未知错误..', type: 'error' })
}
const getData = (that, options) => {
  if (!options.headers) options.headers = {}
  if (!options.flag) {
    Object.assign(options.headers, { sessionId: localStorage.getItem('kpst-token') })
  }
  const data = options.data ? options.data : {}
  if (options.post && that.utils.openKey && (!options.isde)) {
    return { content: that.utils.encrypt(data) }
  }
  return data
}
const parse = (that, key, options, params, post) => {
  var data, headers, callback
  if (typeof options === 'function') {
    data = params || {}
    if (post && that.utils.openKey && (!options.isde)) {
      data = { content: that.utils.encrypt(data) }
    }
    headers = { sessionId: localStorage.getItem('kpst-token') }
    callback = options
    options = {}
  } else {
    options.post = post
    data = getData(that, options)
    headers = options.headers
    callback = options.callback
  }
  return { data: data, headers: headers, callback: callback }
}
const kpst = {
  login: (_this, key, callback, data) => {
    var url = urlArray[key]
    var values = data || {}
    // if (_this.utils.kpstEncryption) { values = { content: _this.utils.encryptedData(JSON.stringify(values)) } }
    _this.axios.post(baseApi + url, values).then((response) => {
      if (response.data === null) return
      kpst.result(_this, response.data, callback, false)
    }).catch((error) => {
      _this.$message({ showClose: true, message: error, type: 'error' })
    })
  },
  get (that, key, options, params) {
    var _p = parse(that, key, options, params, false)
    that.axios.get(urlArray[key], { params: _p.data, headers: _p.headers }).then((response) => {
      if (response.data === null) return
      result(that, response.data, _p.callback, options.isde)
    }).catch((error) => {
      that.$message({ showClose: true, message: error, type: 'error' })
    })
  },
  post (that, key, options, params) {
    var _p = parse(that, key, options, params, true)
    that.axios.post(urlArray[key], _p.data, { headers: _p.headers }).then((response) => {
      if (response.data === null) return
      result(that, response.data, _p.callback, true)
    }).catch((error) => {
      that.$message({ showClose: true, message: error, type: 'error' })
    })
  }

}
export default kpst
