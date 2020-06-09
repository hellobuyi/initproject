const state = {
  name: '',
  bannerArr: [],
  leftMenu: []
}
const mutations = {
  changeBanner: (state, payload) => {
    if (payload) {
      state.bannerArr = payload.bannerArr
    } else {
      state.bannerArr = []
    }
  },
  changeName: (state, payload) => {
    if (payload) {
      state.name = payload.name
    } else {
      state.name = ''
    }
  }
}
const actions = {
  // changeBanner: (context, payload) => {
  //   context.commit('CHANGE_BANNER', payload)
  // }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
