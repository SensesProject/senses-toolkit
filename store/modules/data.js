import { assign, get, filter, includes, trim } from 'lodash'
import axios from 'axios'

const state = () => {
  return {
    datum: []
  }
}

const mutations = {
  MODULES_CHANGE (state, data) {
    const obj = {
      status: 'idle',
      data: false,
      message: false
    }
    state.datum = assign(obj, data)
  }
}

const getters = {
  modules: (state, getters, rootState) => {
    const audience = get(rootState, ['filter', 'audience'])
    const term = trim(get(rootState, ['filter', 'term']).toLowerCase())

    return filter(get(state, ['datum', 'data'], []), (run) => {
      if (!(!audience || (audience && includes(get(run, 'audience'), audience)))) {
        return false
      }

      if (!(!term.length || (term.length && get(run, 'title').toLowerCase().includes(term)))) {
        return false
      }

      return true
    })
  }
}

const actions = {
  loadModules ({ commit, state }) {
    const status = get(state.datum, 'status')
    if (status !== 'loading') {
      commit('MODULES_CHANGE', { status: 'loading' })
      const url = './modules.json'
      axios.get(url)
        .then((response) => {
          commit('MODULES_CHANGE', { status: 'success', data: response.data.modules })
        })
        .catch((error) => {
          console.error('error', error)
          commit('MODULES_CHANGE', { status: 'error', message: error })
        })
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
