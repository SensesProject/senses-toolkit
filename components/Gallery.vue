<template>
  <div class="gallery-content">
    <h3 v-if="!hasFilter" class="section-header">
      <span>Learn modules</span>
    </h3>
    <GalleryModule
      v-for="module in elements['true']"
      :key="module.id"
      v-tooltip="{
        content: 'If you are new to scenarios you should start here!',
        trigger: 'manual',
        show: module.id === 'primer',
        offset: 5,
        position: 'top',
        classes: 'attention'
      }"
      v-bind="module"
    />
    <h3 v-if="!hasFilter" class="section-header explore">
      <span>Explore modules</span>
    </h3>
    <GalleryModule
      v-for="module in elements['false']"
      :key="module.id"
      v-tooltip="{
        content: 'If you are new to scenarios you should start here!',
        trigger: 'manual',
        show: module.id === 'primer',
        offset: 5,
        position: 'top',
        classes: 'attention'
      }"
      v-bind="module"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { groupBy, get } from 'lodash'
import GalleryModule from '~/components/GalleryModule.vue'

export default {
  components: {
    GalleryModule
  },
  computed: {
    ...mapState('filter', [
      'hasFilter'
    ]),
    ...mapGetters([
      'modules'
    ]),
    elements () {
      if (this.hasFilter) {
        return { true: this.modules }
      }
      return groupBy(this.modules, (module) => {
        return get(module, 'type', []).includes('Learn')
      })
    }
  },
  created () {
    this.loadModules()
  },
  methods: {
    ...mapActions([
      'loadModules'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .gallery-content {
    @include media-query($medium) {
      display: grid;
      grid-template-rows: repeat(auto-fit, 1fr auto);
    }
  }

</style>
