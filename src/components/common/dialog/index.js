import './directives.js'
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: true
    },
    dialogOptions: {
      type: Object,
      default: { title: '', saveBtn: '保存', width: '30%', isre: false }
    },
    data: { type: [Object, Array], default: () => { } },
    dialogContentComponent: { type: Function },
    show: { type: Boolean, default: true },
    showDel: { type: Boolean, default: false },
    typeSelectData: { type: Array, default: () => [] },
    roomSelectData: { type: Array, default: () => [] },
    day: { type: String, default: '' }
  },
  methods: {
    resetForm () {
      this.$refs.childFunx.resetForm()
    },
    submitForm () {
      this.$refs.childFunx.submitForm(this)
    },
    deleteDate () {
      this.$refs.childFunx.deleteDate(this)
    },
    modalClose () {
      this.$emit('update:dialogVisible', false) // 直接修改父组件的属性
    },
    reLoad () {
      this.$parent.reload()
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.modalClose()
        })
        .catch(_ => { })
    }
  }
}
