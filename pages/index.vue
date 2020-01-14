<template>
  <div class="container">
    <PageHeader />
    <PageIntro />
    <PageGallery />
    <PageFooter />
    <modal
      :scrollable="true"
      name="download"
      height="auto"
      :width="800"
    >
      <PageDownload />
    </modal>
  </div>
</template>

<script>
import { get } from 'lodash'
import { mapActions } from 'vuex'
import PageHeader from '~/components/PageHeader.vue'
import PageIntro from '~/components/PageIntro.vue'
import PageGallery from '~/components/PageGallery.vue'
import PageFooter from '~/components/PageFooter.vue'
import PageDownload from '~/components/PageDownload.vue'

export default {
  components: {
    PageHeader,
    PageIntro,
    PageGallery,
    PageFooter,
    PageDownload
  },
  mounted () {
    const download = get(this, ['$route', 'query', 'd'])
    if (download) {
      this.showDownload(parseInt(download))
    }
  },
  methods: {
    ...mapActions([
      'selectDownload'
    ]),
    showDownload (id) {
      if (id) {
        this.selectDownload(id)
        this.$modal.show('download')
      }
    }
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
