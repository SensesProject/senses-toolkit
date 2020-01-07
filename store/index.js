import Vue from 'vue'
import Vuex from 'vuex'
import VModal from 'vue-js-modal'
import VTooltip from 'v-tooltip'
import data from './modules/data'
import filter from './modules/filter'
import options from './modules/options'
import downloads from './modules/downloads'

Vue.use(Vuex)
Vue.use(VModal)
Vue.use(VTooltip)

export const modules = {
  data,
  filter,
  options,
  downloads
}
