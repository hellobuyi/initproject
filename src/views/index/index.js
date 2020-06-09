import _dialog from '@/components/common/dialog/index.vue'
export default {
  name: 'index',
  components: {
    'gr-dialog': _dialog
  },
  data () {
    return {
      username: localStorage.getItem('kpst-username'),
      dialogOptions: { width: '20%', title: '提示', saveBtn: '保存' },
      dialogVisible: false,
      dialogContentComponent: null,
      dropdownData: [
        { name: '用户中心', divided: false, class: 'el-icon-user-solid', command: 'push$' },
        // eslint-disable-next-line no-template-curly-in-string
        { name: '密码修改', divided: false, class: 'el-icon-s-goods', command: 'dialog${"title":"密码修改","width":"450px"}' },
        { name: '退出系统', divided: true, class: 'el-icon-error', command: 'destroy$' }
      ],
      screenWidth: document.body.clientWidth,
      screenHeight: document.body.clientHeight,
      cheight: document.body.clientHeight - 30 + 'px',
      activeIndex: '1'
    }
  },
  mounted () {
  },
  methods: {
    setDropdownClass (option) {
      return option + ' el-icon--left'
    },
    handleCommand (command) {
      const params = command.split('$')
      if (params[0] === 'dialog') {
        this.dialogOptions = this.utils.getDialogOption(params[1])
        this.dialogVisible = true
        this.dialogContentComponent = () => import('./pwd/xg.vue')
        return
      }
      this.utils[params[0]].call(this, this, params[1])
    },
    handleSelect (key, keyPath) {
      var list = this.$store.state.topBanner.bannerArr[key - 1]
      this.$store.state.topBanner.leftMenu = list.children
      this.$router.push({ path: list.url })
      console.log(this.$store.state.topBanner.bannerArr[key - 1])
    }
  }
}
