import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import rightpop from './modules/rightpop'
import topbanner from './modules/topbanner'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Rightpop: rightpop,
    topBanner: topbanner
  },
  getters
})

export default store
