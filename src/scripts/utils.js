const defaultDialogOption = { width: '20%', title: '提示', saveBtn: '保存' }

const utilsFunction = {
  // 注销登录状态
  kpstEncryption: false,
  // 前端写入登录状态
  register: (_this, data) => {
    localStorage.setItem('kpst-token', data.key)
    localStorage.setItem('kpst-username', data.yhzh)
    utilsFunction.push(_this, '/')
  },
  destroy: _this => {
    _this.api.get(_this, 'sys_destroy', () => {
      localStorage.removeItem('kpst-token')
      localStorage.removeItem('kpst-username')
      utilsFunction.push(_this, '/login')
    })
  },
  push: (_this, url) => {
    _this.$router.push(url)
  },
  getDialogOption: option => {
    const json = option.replace(/'/g, '"')
    return Object.assign({}, defaultDialogOption, JSON.parse(json))
  },
  clickUrl (_this, data) {
    if (data.tp === '1') {
      utilsFunction.push(_this, data.url)
      return
    }
    if (data.tp === '2') {
      var a = document.getElementById('main-href')
      a.setAttribute('href', data.url)
      a.click()
      a.setAttribute('href', '#')
    }
  },
  setImgSrc: url => {
    const imgSrc =
      url !== undefined || url !== '' ? url : 'assets/home/icon.png'
    return require('@/' + imgSrc)
  }
}

export default utilsFunction
