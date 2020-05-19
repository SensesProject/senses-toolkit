<template>
  <div class="container">
    <PageHeader />
    <PageContainer>
      <h1>Imprint</h1>
      <p>The website climatescenarios.org is an initiative of the EU project SENSES. The project investigates potential socioeconomic futures in the face of climate change and how this knowledge can be made accessible to a broader public.</p>
      <p>SENSES will develop tools and approaches to make the new generation of climate change scenarios more comprehensible and accessible. Further information can be found on the project website: <a href="http://senses-project.org">senses-project.org</a></p>
      <h1>Privacy</h1>
      <p>The internet sites under climatescenarios.org (hereinafter: “Website”) are operated by Potsdam-Institute for Climate Imact Research (hereinafter: “PIK”), Telegraphenberg A31, 14473 Potsdam. The careful and legitimate handling of your data is an important concern for us. The following Privacy Policy explain which personal data are gathered on our website and how and for which purposes these are used. Please, read the Privacy Policy completely before you transmit data to us or use our website in other manner and inform yourself about updates of these Data protection notices on a regular basis. The following Privacy Policy is valid for the use of our website in its respective current version.</p>
      <h2>Provision of the Website and Creation of Log Files</h2>
      <h3>Description and Scope of Data Processing</h3>
      <p>With every visit to our website, our system automatically collects data and information from the computer system of the visiting computer. In particular, the following data are hereby collected:</p>
      <ul>
        <li>the visited address (URL);</li>
        <li>the IP address of the requesting computer;</li>
        <li>the date and the time of the request;</li>
        <li>the description of the web browser type used and/or the operating system used;</li>
        <li>the address (URL) of the website from which the file was requested;</li>
        <li>the access status (file transferred, file not found, etc.);</li>
        <li>the data volume transferred.</li>
      </ul>
      <p>The data shall also be stored in the log files of our system. This data shall not be stored together with other personal data of the user.</p>
      <h3>Legal Basis and Purpose of the Processing</h3>
      <p>Legal basis for the temporary storage of the data and the log files is Art. 6 (1) (f) EU GDPR which is required for safeguarding the legitimate interests of the PIK.</p>
      <p>The temporary storage of the IP address through our system is necessary to allow the delivery of the website to the computer of the user. For this purpose, the IP address of the user must be stored for the duration of the session.</p>
      <p>The data are stored in log files to ensure the functionality of the website. In addition, we use the data to optimize our website and to ensure the safety of our information technology systems. In this context, the data shall not be evaluated for marketing purposes.</p>
      <p>Our legitimate interest in the processing pursuant to Art. 6 (1) ( f) EU GDPR lies also in these purposes. You may request additional information on the balancing of interests under datenschutz@pik-potsdam.de.</p>
      <h3>Duration of Data Recording</h3>
      <p>The data shall be deleted as soon as they are no longer necessary for the purpose for which they are collected. Where data are collected for the provision of the website, this is the case when a session ends.</p>
      <p>In case data are stored in log files, this is the case no later than after twelve months. A data recording beyond that is possible in an anonymized form. In such case the users' IP addresses will be erased or encrypted, thus making an identification of the visiting client impossible.</p>
      <h3>Requirement to Provide Data</h3>
      <p>The provision of data is neither legally nor contractually prescribed and required. The collection of data for the provision of the website and the storage of data in log files is, however, urgently necessary for the operation of the website.</p>
      <p>The non-provision of personal data could involve detriments for you. For instance, this could have the consequence that you cannot receive or use our services (e.g. an access to the website may not be possible). However, you will not incur any legal disadvantages from such non-provision unless provided otherwise.</p>
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

    h3 {
      margin-top: $spacing;
      margin-bottom: $spacing / 4;
    }

    ul {
      margin-top: $spacing / 4;

      li {
        margin-left: $spacing;
      }
    }

    p + p, ul + p {
      margin-top: $spacing / 4;
    }
  }

</style>
