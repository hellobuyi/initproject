export default {
  data () {
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: localStorage.getItem('kpst-username'),
        opwd: '',
        pwd: '',
        epwd: ''
      },

      rules: {
        opwd: [
          { required: true, message: '请输入原始密码', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入新密码', trigger: 'change' },
          { min: 8, max: 15, message: '长度在 8 到 15 个字符', trigger: 'blur' },
          { pattern: /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}/, message: '密码太简单,不符合规则,请重新输入..' }
        ],
        epwd: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) {
          return false
        }
        this.changePwd()
      })
    },
    resetForm () {
      this.$refs.ruleForm.resetFields()
    },
    result () {
      this.$alert('密码修改成功,请重新登陆..', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          this.utils.destroy(this)
        }
      })
    },
    changePwd () {
      var values = this.utils.getValue(this.$refs.ruleForm, ['epwd'])
      this.api.post(this, 'sys_changePwd', this.result, values)
    }
  }
}
