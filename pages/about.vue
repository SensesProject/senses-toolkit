<template>
  <div class="container">
    <PageHeader />
    <PageContainer>
      <h1>How to use the SENSES Tookit</h1>
      <p>
        The SENSES Toolkit is a unique collection of user-centred visualization tools of climate change scenario knowledge. It includes tools to learn about the scenario approach and its key insights, tools to explore climate change scenarios, and practical guidelines of how to use climate change scenarios for three key user groups.It builds on co-production techniques of relevant and useful climate change scenario knowledge.
      </p>
      <p>
        The aim of SENSES is to provide tools for better assessment and application of climate change scenario knowledge. The interactive approach aims to connect users to the original scenario data and to minimize the risk that the extracted information is misinterpreted and/or perceived as intransparent. Thus, an essential objective of SENSES is that the developed tools are understandable, accessible, trustworthy, and useful for the stakeholders.
      </p>
      <p>
        The following video is a quick tutorial on the key features of the SENSES Toolkit:
      </p>
      <p>
        <video controls width="100%">
          <source
            :src="`${$router.options.base}video/toolkit.webm`"
            type="video/webm"
          >
          <source
            :src="`${$router.options.base}video/toolkit.mp4`"
            type="video/mp4"
          >
          Sorry, your browser doesn't support embedded videos.
        </video>
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

    video {
      margin: $spacing auto 0;
    }
  }

</style>
