
import MM from '@/views/login/body/mm/index.vue'
export default {
  name: 'login',
  components: {
    // "login-body": loginBody
  },
  data () {
    return {
      label: 'LOGO萧山区智慧农业水利系统',
      loginTop: { App: 'App下载', help: '使用帮助' },
      currentComponent: null,
      smcheck: false,
      tabs: [
        { title: 'LOGO萧山区智慧农业水利系统', src: require('../../assets/login/password2.png'), object: MM }
      ]
    }
  },
  created () {
    var _this = this
    document.onkeypress = function (e) {
      var keycode = document.all ? event.keyCode : e.which
      if (keycode === 13) {
        _this.currentComponent.methods.loginAction(_this)
        return false
      }
    }
  },
  mounted () {
    const object = this.tabs[0].object
    this.currentComponent = object
  },
  methods: {
    getSmcheck () {
      return this.smcheck
    },
    tabarbtn (title, index) {
      if (title === '扫码登录') {
        this.smcheck = true
      } else {
        this.smcheck = false
      }
      if (this.currentComponent.name === 'sm') {
        this.smcheck = false
      }
      this.label = title
      const object = this.tabs[index].object
      this.currentComponent = object
    }
  }
}
