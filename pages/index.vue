<template>
  <div class="container">
    <PageHeader />
    <PageIntro />
    <PageGallery />
    <modal name="download">
      <PageDownload />
    </modal>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import PageIntro from '~/components/PageIntro.vue'
import PageGallery from '~/components/PageGallery.vue'
import PageDownload from '~/components/PageDownload.vue'

export default {
  components: {
    PageHeader,
    PageIntro,
    PageGallery,
    PageDownload
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
