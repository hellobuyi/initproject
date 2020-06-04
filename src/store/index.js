import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import rightpop from './modules/rightpop'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Rightpop: rightpop
  },
  getters
})

export default store
