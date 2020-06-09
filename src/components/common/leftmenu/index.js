
import { mapState } from 'vuex'

export default {
  data () {
    return { menuData: [] }
  },
  props: {
    dxid: { type: String, default: '' },
    menuItem: { type: Object, default: {} }
  },
  created () {
    this.api.get(this, 'sys_menu', { callback: this.loadMenuData, data: { dxid: 'zyfw' } })
  },
  computed: {
    ...mapState(['leftMenuName'])
  },
  methods: {
    loadMenuData (data) {
      console.log(data)
      this.$store.commit('topBanner/changeBanner', { bannerArr: data })
      this.$store.state.topBanner.leftMenu = data[0].children
      // var item = data[0]
      // for (var j = 0, len = data.length; j < len; j++) {
      //   if (data[j].url === this.$route.path) {
      //     item = data[j]
      //     break
      //   }
      // }
      // this.clickUrl(item)
    },
    clickUrl (item) {
      this.$emit('update:menuItem', item)
      // this.$store.commit('setLeftMenuName', item.title)
      // this.$store.commit('isReLoad', true)
    }
  }
}
