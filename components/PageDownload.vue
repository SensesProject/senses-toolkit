<template>
  <div class="page-download">
    <h1>{{ item.label }}</h1>
    {{ activeID }}
    {{ item }}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { get } from 'lodash'

export default {
  computed: {
    ...mapState({
      activeID: state => get(state, ['downloads', 'activeID'], false)
    }),
    ...mapGetters([
      'downloads'
    ]),
    item () {
      return get(this.downloads, this.activeID)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/global";

</style>
