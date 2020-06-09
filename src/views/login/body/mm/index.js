import SIdentify from '@/components/common/SIdentify/SIdentify.vue'
const state = {
  identifyCodes: '1234567890',
  identifyCode: '',
  form: {
    username: '',
    password: '',
    code: ''
  }
}
const actions = {
  randomNum (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  },
  refreshCode () {
    state.identifyCode = ''
    actions.makeCode(state.identifyCodes, 4)
  },
  makeCode (o, l) {
    for (let i = 0; i < l; i++) {
      state.identifyCode += state.identifyCodes[
        actions.randomNum(0, state.identifyCodes.length)
      ]
    }
  },

  loginAction (_this) {
    var username = state.form.username
    var password = state.form.password
    var code = state.form.code
    if (_this === undefined) _this = this
    if (username === '') {
      _this.$message({ showClose: true, message: '请输入用户名...', type: 'error' })
      return
    }
    if (password === '') {
      _this.$message({ showClose: true, message: '请输入用户密码...', type: 'error' })
      return
    }
    if (code === '') {
      _this.$message({ showClose: true, message: '请输入验证码...', type: 'error' })
      return
    }
    if (state.identifyCode !== code) {
      _this.$message({ showClose: true, message: '验证码输入有误,请检查...', type: 'error' })
      actions.refreshCode()
      return
    }
    _this.api.login(_this, 'loginAction', (data) => {
      console.log(data)
      if (data === null) return
      state.form.username = ''
      state.form.password = ''
      state.form.code = ''
      _this.utils.register(_this, data)
    }, { username: username, password: password })
  }
}
export default {
  name: 'mm',
  data () {
    return state
  },
  components: { 's-identify': SIdentify },
  mounted () {
    state.identifyCode = ''
    actions.makeCode(state.identifyCodes, 4)
  },
  created () {
    actions.refreshCode()
  },
  methods: actions
}
