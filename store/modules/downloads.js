import { assign, get, fromPairs, map } from 'lodash'
import axios from 'axios'

const state = () => {
  return {
    datum: [],
    activeID: false
  }
}

const mutations = {
  DOWNLOADS_CHANGE (state, data) {
    const obj = {
      status: 'idle',
      data: false,
      message: false
    }
    state.datum = assign(obj, data)
  },
  DOWNLOAD_SELECT (state, id) {
    state.activeID = !id ? false : id
  }
}

const getters = {
  downloads: (state, getters, rootState) => {
    const downloads = get(state, ['datum', 'data'], [])
    return fromPairs(map(downloads, (download, i) => {
      const id = get(download, 'id', `unknown_${i}`)
      return [id, download]
    }))
  }
}

const actions = {
  loadDownloads ({ commit, state }) {
    const status = get(state.datum, 'status')
    if (status !== 'loading') {
      commit('DOWNLOADS_CHANGE', { status: 'loading' })
      const url = './downloads.json'
      axios.get(url)
        .then((response) => {
          commit('DOWNLOADS_CHANGE', { status: 'success', data: response.data.downloads })
        })
        .catch((error) => {
          console.error('error', error)
          commit('DOWNLOADS_CHANGE', { status: 'error', message: error })
        })
    }
  },
  selectDownload ({ commit }, id) {
    commit('DOWNLOAD_SELECT', id)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
