<template>
  <div class="container">
    <PageHeader />
    <PageContainer>
      <h1>How to use the SENSES Tookit</h1>
      <p>
        The SENSES Toolkit is a unique collection of user-centred scenario visualization tools, include practical guidelines and manuals, and builds on co-production techniques of relevant and useful climate change knowledge for three key user groups.
      </p>
      <p>
        The aim of SENSES is to generate tools for debate and deliberation. The interactive approach of co-production prevents that users become detached from the original scenario data, and minimizes the risk that the extracted information is misinterpreted and/or perceived as intransparent. Thus, an essential objective of SENSES is that the developed tools are understandable, accessible, trustworthy, and useful for the stakeholders.
      </p>
      <p>
        The following video is a quick tutorial on the key features of the SENSES Toolkit:
      </p>
      <p>
        <img :src="`${$router.options.base}/SENSES-Placeholder.jpg`" alt="Video Placeholder">
      </p>
    </PageContainer>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from '~/components/PageFooter.vue'
import PageHeader from '~/components/PageHeader.vue'
import PageContainer from '~/components/PageContainer.vue'

export default {
  components: {
    PageFooter,
    PageHeader,
    PageContainer
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
      width: 80%;
    }

    img {
      width: 80%;
      border: 1px solid #eee;
      margin: $spacing auto 0;
    }
  }

</style>
