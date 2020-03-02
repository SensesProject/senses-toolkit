import { uniq, flatten, map, get } from 'lodash'

const getters = {
  tags: (state, getters, rootState) => {
    const options = [{ label: 'Show all', value: false }]
    options.push({ text: 'Filter by audience' })
    options.push(...uniq(flatten(map(get(rootState, ['data', 'datum', 'data'], []), 'tags'))))
    options.push({ text: 'Filter by type' })
    options.push(...uniq(flatten(map(get(rootState, ['data', 'datum', 'data'], []), 'type'))))
    return options
  }
}

export default {
  getters
}
