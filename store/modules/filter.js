import { has, get, set } from 'lodash'

const DEFAULTS = {
  tag: false,
  term: ''
}

const state = () => {
  return {
    tag: DEFAULTS.tag,
    term: DEFAULTS.term,
    hasFilter: false
  }
}

const mutations = {
  FILTER_CHANGE (state, { key, value }) {
    if (has(state, key)) {
      const val = !value ? get(DEFAULTS, key) : value
      set(state, key, val)
    }
    state.hasFilter = !(state.tag === DEFAULTS.tag && state.term === DEFAULTS.term)
    // console.log(state.tag, DEFAULTS.tag, state.term, DEFAULTS.term, state.tag === DEFAULTS.tag && state.term === DEFAULTS.term)
  }
}

const actions = {
  changeFilter ({ commit }, params) {
    commit('FILTER_CHANGE', params)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
