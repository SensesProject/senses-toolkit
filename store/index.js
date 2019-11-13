import Vue from 'vue'
import Vuex from 'vuex'
import data from './modules/data'
import settings from './modules/settings'
import options from './modules/options'

Vue.use(Vuex)

export const modules = {
  data,
  settings,
  options
}
