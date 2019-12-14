import { uniq, flatten, map, get } from 'lodash'

const getters = {
  tags: (state, getters, rootState) => {
    const options = [{ 'label': 'Show all', 'value': false }]
    options.push(...uniq(flatten(map(get(rootState, ['data', 'datum', 'data'], []), 'tags'))))
    return options
  }
}

export default {
  getters
}
