import { has, get, set } from 'lodash'

const DEFAULTS = {
  model: 'AIM/CGE',
  region: 'World',
  scenario: 'CPol',
  visualisation: 'Alluvial'
}

const state = () => {
  return {
    model: DEFAULTS.model,
    region: DEFAULTS.region,
    scenario: DEFAULTS.scenario,
    visualisation: DEFAULTS.visualisation
  }
}

const mutations = {
  SETTINGS_CHANGE (state, { key, value }) {
    if (has(state, key)) {
      let val = value
      if (!value) {
        val = get(DEFAULTS, key)
      }
      set(state, key, val)
    }
  }
}

const actions = {
  changeSettings ({ commit }, params) {
    commit('SETTINGS_CHANGE', params)
  }
}

export default {
  state,
  mutations,
  actions
}
