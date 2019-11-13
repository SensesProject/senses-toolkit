import { map, assign, get, filter, flatten, includes } from 'lodash'
import { extent } from 'd3-array'
import axios from 'axios'

const state = () => {
  return {
    datum: []
  }
}

const mutations = {
  DATA_CHANGE (state, data) {
    const obj = {
      status: 'idle',
      data: false,
      message: false
    }
    state.datum = assign(obj, data)
  }
}

const getters = {
  data: (state, getters, rootState) => {
    const model = get(rootState, ['settings', 'model'])
    const region = get(rootState, ['settings', 'region'])
    const scenario = get(rootState, ['settings', 'scenario'])
    // console.log({ model, region, scenario })
    const relevant = ['Energy Efficiency', 'CCS', 'Electricity - T&D and Storage', 'Extraction and Conversion - Nuclear', 'Extraction and Conversion - Bioenergy', 'Hydrogen - Non-fossil', 'Electricity - Non-bio Renewables', 'Hydrogen - Fossil', 'Electricity - Fossil Fuels w/o CCS', 'Extraction and Conversion - Fossil Fuels']

    const runs = filter(get(state, ['datum', 'data'], []), { model, region, scenario })
    return filter(runs, (run) => {
      return includes(relevant, get(run, 'variable'))
    })
  },
  rangeValues: (state, getters, rootState) => {
    return extent(flatten(map(getters.data, (runs) => {
      return map(get(runs, 'years', []), '1')
    })))
  },
  rangeTime: (state, getters, rootState) => {
    return extent(flatten(map(getters.data, (runs) => {
      return map(get(runs, 'years', []), (d) => {
        return new Date(d[0], 0, 1)
      })
    })))
  }
}

const actions = {
  loadData ({ commit, state }) {
    const status = get(state.datum, 'status')
    if (status !== 'loading') {
      commit('DATA_CHANGE', { status: 'loading' })
      const url = './data/data.json'
      axios.get(url)
        .then((response) => {
          commit('DATA_CHANGE', { status: 'success', data: response.data.runs })
        })
        .catch((error) => {
          console.error('error', error)
          commit('DATA_CHANGE', { status: 'error', message: error })
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
