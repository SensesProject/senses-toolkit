<template>
  <div class="container">
    <PageHeader />
    <PageContainer>
      <h1>Imprint</h1>
      <p>The website climatescenarios.org is an initiative of the EU project SENSES. The project investigates potential socioeconomic futures in the face of climate change and how this knowledge can be made accessible to a broader public.</p>
      <p>SENSES will develop tools and approaches to make the new generation of climate change scenarios more comprehensible and accessible. Further information can be found on the project website: <a href="http://senses-project.org">senses-project.org</a></p>
      <h1>Privacy</h1>
      <p>The internet sites under climatescenarios.org (hereinafter: “Website”) are operated by Potsdam-Institute for Climate Imact Research (hereinafter: “PIK”), Telegraphenberg A31, 14473 Potsdam. The careful and legitimate handling of your data is an important concern for us. The following Privacy Policy explain which personal data are gathered on our website and how and for which purposes these are used. Please, read the Privacy Policy completely before you transmit data to us or use our website in other manner and inform yourself about updates of these Data protection notices on a regular basis. The following Privacy Policy is valid for the use of our website in its respective current version.</p>
      <h2>Automatic Collection of data</h2>
      <p>When you visit our website, we do not collect any data of yours.</p>
      <h2>Use of Cookies</h2>
      <p>Cookies are small text files that are filed on your computer and that your browser stores (locally on your hard disk). We do not use any cookies on this website.</p>
      <h2>Other collection, processing and use of personal data</h2>
      <p>As a rule, you can visit our website without us requiring, collecting, processing or using your personal data. You will remain anonymous as an individual user or at least pseudonymous.</p>
      <h2>Changes to the contents of this Data protection notice</h2>
      <p>PIK reserves the right to change the contents of these Privacy Policy every now and then in accordance with the legal data protection regulations.</p>
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
  }

</style>
