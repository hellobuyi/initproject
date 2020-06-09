import { mapMutations } from 'vuex'
export default {
  name: 'index',

  data () {
    return {
      menu_list: []
    }
  },
  mounted () {
    this.initmenu()
    this.$store.commit('topBanner/changeName', '')
  },
  methods: {
    ...mapMutations('topBanner', ['changeName']),
    initmenu () {
      this.api.get(this, 'home_menu', (data) => {
        this.menu_list = data
        console.log(data)
      })
    },
    restr (str) {
      return str.replace('/', '<br>')
    },
    handleSys (option) {
      this.changeName({ name: option.title.replace('/', '') })
      this.$router.push({ path: option.url })
    }
  }
}
