export const state = () => ({
  dialog: null
})

export const getters = {
  dialog: state => state.dialog
}

export const mutations = {
  setDialog (state, dialog) {
    state.dialog = dialog
  }
}

export const actions = {
  hideDialog ({ commit }) {
    commit('setDialog', null)
  },

  showDialog ({ commit }, dialog) {
    commit('setDialog', dialog)
  }
}
