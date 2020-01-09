import { assign, get, filter, includes, trim } from 'lodash'
import axios from 'axios'
import Fuse from 'fuse.js'

const options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    'title',
    'description',
    'keywords',
    'authors',
    'tags'
  ]
}

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
    const tag = get(rootState, ['filter', 'tag'])

    // First filter all elements with the correct tag
    const elements = filter(get(state, ['datum', 'data'], []), (run) => {
      if (!(!tag || (tag && includes(get(run, 'tags'), tag)))) {
        return false
      }

      return true
    })

    const term = trim(get(rootState, ['filter', 'term']))

    if (term) {
      const fuse = new Fuse(elements, options)
      return fuse.search(term)
    } else {
      return elements
    }
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
