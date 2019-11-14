import Vue from 'vue'
import Vuex from 'vuex'
import data from './modules/data'
import filter from './modules/filter'
import options from './modules/options'

Vue.use(Vuex)

export const modules = {
  data,
  filter,
  options
}
