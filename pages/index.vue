<template>
  <div class="container">
    <PageHeader />
    <PageIntro />
    <PageGallery />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import PageIntro from '~/components/PageIntro.vue'
import PageGallery from '~/components/PageGallery.vue'

export default {
  components: {
    PageHeader,
    PageIntro,
    PageGallery
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

</style>
