<template>
  <div class="gallery-content">
    <GalleryModule v-for="module in modules" :key="module.title" v-bind="module" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GalleryModule from '~/components/GalleryModule.vue'

export default {
  components: {
    GalleryModule
  },
  computed: {
    ...mapGetters([
      'modules'
    ])
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
    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr auto);
  }

</style>
