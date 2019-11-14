<template>
  <div class="gallery-content">
    <GalleryItem v-for="item in items" :key="item.title" v-bind="item" />
  </div>
</template>

<script>
import GalleryItem from '~/components/GalleryItem.vue'

export default {
  data: () => {
    return {
      items: [{
        title: 'Primer to Climate Scenarios',
        description: 'This module explores how current decarbonization plans until 2030 relate to the long-term targets of the Paris Agreement. This module explores how current decarbonization plans until 2030 relate to the long-term targets of the Paris Agreement.',
        gem: false,
        share: true,
        bg: 'bg3',
        isRight: false,
        audience: ['Policy', 'Finance']
      }, {
        title: 'Global Stocktake I',
        description: 'This module explores how current decarbonization plans until 2030 relate to the long-term targets of the Paris Agreement.',
        gem: false,
        share: true,
        bg: 'bg1',
        isRight: true,
        audience: ['Policy']
      }, {
        title: 'Where is electricity coming from?',
        description: 'We cannot predict the future, but we can create different plausible scenarios of how a future decarbonization pathway could look like.',
        gem: true,
        share: true,
        bg: 'bg2',
        isRight: true,
        audience: ['Business', 'Finance']
      }, {
        title: 'Global Stocktake II',
        description: 'This module explores how current decarbonization plans until 2030 relate to the long-term targets of the Paris Agreement.',
        gem: false,
        share: false,
        bg: 'bg1',
        isRight: true,
        audience: ['Policy']
      }, {
        title: 'Primer to Climate Scenarios',
        description: 'This module explores how current decarbonization plans until 2030 relate to the long-term targets of the Paris Agreement.',
        gem: false,
        share: false,
        bg: 'bg3',
        isRight: false,
        audience: ['Policy', 'Finance']
      }]
    }
  },
  components: {
    GalleryItem
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
