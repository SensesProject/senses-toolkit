import { assign, get, filter, includes, trim } from 'lodash'
import Fuse from 'fuse.js'
const { getUrlToResources } = require('library/src/assets/js/utils.js')

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
    'tags',
    'type'
  ]
}

const state = () => {
  return {
    datum: [],
    draft: false
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
  },
  SET_DRAFT (state) {
    state.draft = true
  }
}

const getters = {
  modules: (state, getters, rootState, test) => {
    const tag = get(rootState, ['filter', 'tag'])

    // Filter all modules, that are not visible
    const visible = filter(get(state, ['datum', 'data'], []), (run) => {
      return state.draft ? true : get(run, 'visible', true)
    })

    // First filter all elements with the correct tag
    const elements = filter(visible, (run) => {
      const list = [...get(run, 'tags'), ...get(run, 'type')]
      if (!(!tag || (tag && includes(list, tag)))) {
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
      fetch( getUrlToResources('settings/modules.json', true))
        .then(response => response.json())
        .then(data => {
          commit('MODULES_CHANGE', { status: 'success', data: get(data, ['modules'], []) })
        })
        .catch(error => {
          console.error('error', error)
          commit('MODULES_CHANGE', { status: 'error', message: error })
        })
    }
  },
  setDraft ({ commit }) {
    commit('SET_DRAFT')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
