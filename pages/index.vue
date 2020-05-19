<template>
  <div class="container">
    <PageHeader />
    <PageIntro />
    <PageGallery />
    <PageFooter />
    <SensesDownload
      :close="close"
      :ids="currentDownloadIDs"
      :title="currentDownloadTitle"
      :visible="currentDownloadID"
    />
  </div>
</template>

<script>
import { get, isUndefined } from 'lodash'
import { mapState, mapActions, mapGetters } from 'vuex'
import SensesDownload from 'library/src/components/SensesDownload.vue'
import PageFooter from '~/components/PageFooter.vue'
import PageGallery from '~/components/PageGallery.vue'
import PageHeader from '~/components/PageHeader.vue'
import PageIntro from '~/components/PageIntro.vue'

export default {
  components: {
    PageFooter,
    PageGallery,
    PageHeader,
    PageIntro,
    SensesDownload
  },
  computed: {
    ...mapState({
      currentDownloadID: state => get(state, 'downloads.currentDownloadID', false)
    }),
    ...mapGetters([
      'currentDownloadTitle',
      'currentDownloadIDs'
    ])
  },
  mounted () {
    const download = get(this, ['$route', 'query', 'd'])
    if (download) {
      const id = parseInt(download)
      if (id) {
        this.selectDownload(id)
      }
    }
    if (!isUndefined(get(this, ['$route', 'query', 'draft']))) {
      this.setDraft()
    }
  },
  methods: {
    ...mapActions([
      'selectDownload',
      'setDraft'
    ]),
    close () {
      this.selectDownload({})
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
