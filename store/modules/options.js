import { map, get, uniq } from 'lodash'

const getters = {
  models: (state, getters, rootState) => {
    return uniq(map(get(rootState, ['data', 'datum', 'data'], []), 'model'))
  },
  regions: (state, getters, rootState) => {
    return uniq(map(get(rootState, ['data', 'datum', 'data'], []), 'region'))
  },
  scenarios: (state, getters, rootState) => {
    return uniq(map(get(rootState, ['data', 'datum', 'data'], []), 'scenario'))
  },
  visualisations: () => {
    return ['Alluvial', 'ScatterSlope', 'ScatterChange', 'CircleLine']
  }
}

export default {
  getters
}
