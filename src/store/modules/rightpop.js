const state = {
  rightpop: false
}
const mutations = {
  CHANGE_POP: (state, payload) => {
    state.rightpop = payload
  }
}
const actions = {
  changepop: (context, payload) => {
    context.commit('CHANGE_POP', payload)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
