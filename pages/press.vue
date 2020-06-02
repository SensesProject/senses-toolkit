<template>
  <div class="container">
    <PageHeader />
    <PageContainer>
      <h1>Making sense of climate scenarios: toolkit for decision-makers launched</h1>
      <p class="intro">To make climate scenarios work for decision-makers, an international team of researchers developed a comprehensive interactive online platform. It is the first of its kind to provide the tools to use those scenarios – from climate impacts to mitigation and energy options – to a broader public beyond science. The scenarios help policy makers and businesses, finance actors and civil society alike to assess the threat of global warming and ways to limit it.</p>
      <p>“Climate scenarios are powerful tools that allow us to explore possible climate futures and how they are shaped by our collective actions – which is why we want to enable all kinds of decision-makers to actually make use of them,” says Elmar Kriegler from the Potsdam Institute for Climate Impact Research (PIK) who leads the SENSES consortium that collectively developed the online platform. “Science has been developing and using climate scenarios for many years, based on computer simulations, yet they’re admittedly a rather complicated matter and results are scattered in all too many scientific publications. We now want to offer a new way of access to those scenarios – so people can see for themselves what is at stake with climate stabilization, and can base their decisions on the best information available.”</p>
      <h2>From 2°C to coal-exit, from solar power to biomass: a wealth of options</h2>
      <p>For instance, a finance expert who wants to assess the potential of stranded assets in the fossil fuel industry would be interested to see how rapidly global greenhouse gas emissions must be reduced to keep warming below the internationally agreed limit of 1.5–2°C. The user can check out the emissions gap learning module on the SENSES platform which gives basic information as well as graphics and links to literature.</p>
      <p>To further explore the details, the user can go to what the researchers call a Guided Exploration Module (GEM).  “The GEMs provide a soft landing in the data and allow users to develop key insights from analyzing the scenarios themselves”, explains project coordinator Cornelia Auer, also from PIK. “They can understand robust trends, like a coal-exit or the decarbonization of electricity, but also variations in the scenarios like the influence of technologies such as carbon dioxide removal.”</p>
      <p>For those interested in going even further, there’s a scenario finder. Users can browse through a large set of scenarios that they filter according to their preferences and assumptions – those who think a solar powered future is likely can filter scenarios with a higher solar share, whereas those who want low use of biomass and still a well below 2°C scenario can filter for these characteristics.</p>
      <h2>“Different targets, different pathways”</h2>
      <p>While the platform is designed for use by decision-makers and experts, it is open for everyone. “This is really about open science,” says Kriegler. “Finding solutions to tackle the climate challenge is something we can only do together, it is a process that needs to include many different voices and perspectives. Enabling them to use climate scenarios from science is one important element here.” It is a new form of climate service – climate change scenario services.</p>
      <p>“We provide users with a lot of if-then. That might seem a bit tedious, but it’s what we feel is necessary,” Kriegler concludes. “The basic idea of climate scenarios is that there is more than one goal, and there are a lot of pathways to those goals. Choosing between options depends on preferences. Yet making choices is not arbitrary, one has to be aware of the consequences. Science-based scenarios provide this kind of critical risk information.”</p>
      <hr>
      <p class="intro">The SENSES project (climate change ScENario ServicES) is part of the official European Research Area for Climate Services, supported by national ministries and the EU. It is a collaborative project of PIK, Fachhochschule Potsdam, International Institute for Applied Systems Analysis (IIASA), Wageningen University (WUR) and Stockholm Environment Institute (SEI):</p>
      <p><strong>Volker Krey, Energy Program Deputy Director at the International Institute for Applied Systems Analysis (IIASA), key partner of the project:</strong> “The SENSES project was a new experience for us and has lifted communication of insights from climate change scenario research and providing related services to a new level by putting it on center stage. The consortium combines a wide range of expertise from climate change research to participatory processes and design, which was a key ingredient for the development of the SENSES toolkit. At IIASA we focused on providing scientific insights on climate change mitigation and data access via the Scenario Explorer infrastructure in a way that allows easy reuse for creating additional communication tools in the future.”</p>
      <p><strong>Boris Müller from the Interaction Design Lab of Fachhochschule Potsdam, another key partner:</strong> “Throughout the SENSES project, we collaborated closely with stakeholders from policy, business or finance backgrounds - we conducted a number of co-design workshops that helped us to understand the demand for climate change scenarios in the respective fields,” says “This process enabled us to create a modular and user-centred design concept for the SENSES Toolkit. Using data visualisations that turn abstract data sets into insightful images is an essential strategy for addressing the requirements and workflows of our stakeholders.”</p>
      <hr>
      Weblink to SENSES platform: <a href="https://www.climatescenarios.org/">www.climatescenarios.org</a><br>
      Weblink to SENSES project website: <a href="http://senses-project.org/">www.senses-project.org</a>
      <hr>
      <span class="caption">Media contacts</span>
      <address itemscope itemtype="http://schema.org/Person" class="vcard">
        <span class="org">Potsdam Institute for Climate Impact Research (PIK)</span><br>
        <strong class="fn">Jonas Viering</strong><br>
        <span>Head of communications team</span>

        Tel: <span class="tel" itemprop="telephone"><a href="tel:+493312882507">+49 331 288 25 07</a></span><br>
        e-mail: <a
          href="#"
          class="ml"
          data-name="presse"
          data-domain="pik-potsdam"
          data-tld="de"
          onclick="window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld; return false;"
        />
        <span>Follow us on twitter: <a href="https://twitter.com/PIK_Climate">@PIK_climate</a></span>
      </address>
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

    p + p {
      margin-top: $spacing / 2;
    }

    .intro {
      font-weight: $font-weight-bold;
    }

    hr {
      margin: $spacing * 2 0;
      border: 0;
      height: 1px;
      background-color: $color-pale-gray;
    }
  }

</style>
