import { get, find } from 'lodash'

const state = () => {
  return {
    datum: [],
    currentModuleID: false, // The id of the module
    currentDownloadID: false // The id of the selected item
  }
}

const mutations = {
  DOWNLOAD_SELECT (state, params) {
    const moduleID = get(params, 'module')
    if (moduleID) { // If module id is present
      state.currentModuleID = moduleID
      const downloadID = get(params, 'download')
      if (downloadID) { // If download id is present
        state.currentDownloadID = downloadID
      } else {
        state.currentDownloadID = true
      }
    } else {
      state.currentModuleID = false
      state.currentDownloadID = false
    }
  }
}

const getters = {
  module: (state, getters, rootState) => { // Currently selected module
    const modules = get(rootState, ['data', 'datum', 'data'])
    return find(modules, { id: state.currentModuleID })
  },
  currentDownloadTitle: (state, getters, rootState) => { // Title of the active module
    return get(getters.module, 'title')
  },
  currentDownloadIDs: (state, getters, rootState) => { // IDs of downloads for active module
    return get(getters.module, 'downloadIDs')
  }
}

const actions = {
  selectDownload ({ commit }, params) {
    commit('DOWNLOAD_SELECT', params)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
