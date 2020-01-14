import { assign, get, fromPairs, map, find } from 'lodash'
import axios from 'axios'

const state = () => {
  return {
    datum: [],
    moduleID: false, // The id of the module
    downloadID: false // The id of the selected item
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
  DOWNLOAD_SELECT (state, params) {
    const moduleID = get(params, 'module')
    if (moduleID) { // If module id is present
      state.moduleID = moduleID
      const downloadID = get(params, 'download')
      if (downloadID) { // If download id is present
        state.downloadID = moduleID
      }
    } else { // If module id is not present: close window
      state.moduleID = false
    }
  }
}

const getters = {
  downloads: (state, getters) => {
    const downloads = get(state, ['datum', 'data'], [])
    return fromPairs(map(downloads, (download, i) => {
      const id = get(download, 'id', `unknown_${i}`)
      return [id, download]
    }))
  },
  module: (state, getters, rootState) => {
    const modules = get(rootState, ['data', 'datum', 'data'])
    console.log({ modules }, state.moduleID, find(modules, { 'id': state.moduleID }))
    return find(modules, { 'id': state.moduleID })
  },
  currentDownloadID: (state, getters, rootState) => {
    if (getters.module) {
      console.log('There is a module')
      const downloadID = state.downloadID
      const downloads = get(getters.module, 'downloadIDs', [])
      console.log({ downloadID, downloads })
      if (!downloadID || downloads.includes(downloadID)) {
        console.log('get', get(downloads, 0, false))
        return get(downloads, 0, false)
      } else {
        return false
      }
    } else {
      return false
    }
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
  selectDownload ({ commit }, params) {
    console.log({ params })
    commit('DOWNLOAD_SELECT', params)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
