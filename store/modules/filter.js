import { has, get, set } from 'lodash'

const DEFAULTS = {
  audience: false,
  term: ''
}

const state = () => {
  return {
    audience: DEFAULTS.audience,
    term: DEFAULTS.term
  }
}

const mutations = {
  FILTER_CHANGE (state, { key, value }) {
    if (has(state, key)) {
      const val = !value ? get(DEFAULTS, key) : value
      set(state, key, val)
    }
  }
}

const actions = {
  changeFilter ({ commit }, params) {
    commit('FILTER_CHANGE', params)
  }
}

export default {
  state,
  mutations,
  actions
}
