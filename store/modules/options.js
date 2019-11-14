import { uniq, flatten, map, get } from 'lodash'

const getters = {
  audiences: (state, getters, rootState) => {
    const options = [{ 'label': 'Show all', 'value': false }]
    options.push(...uniq(flatten(map(get(rootState, ['data', 'datum', 'data'], []), 'audience'))))
    return options
  }
}

export default {
  getters
}
