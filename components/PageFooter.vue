<template>
  <footer class="page-footer">
    <div class="footer-contact">
      <span class="caption">Contact</span>
      <address itemscope itemtype="http://schema.org/Person" class="vcard">
        <strong class="fn">Cornelia Auer</strong><br>
        <span class="org">Potsdam Institut für Klimafolgenforschung (PIK)</span><br>
        <div class="adr">
          <span class="street-address">Telegrafenberg A31</span><br>
          <span class="postal-code">14473</span> <span class="locality">Potsdam</span><br><br>
        </div>

        PO Box 601203<br>
        14412 Potsdam<br><br>

        Tel: <span class="tel" itemprop="telephone"><a href="tel:+4933128820787">+49-331-288-20787</a></span><br>
        e-mail: <a
          href="#"
          class="ml"
          data-name="cornelia.auer"
          data-domain="pik-potsdam"
          data-tld="de"
          onclick="window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld; return false;"
        />
      </address>
    </div>
    <div class="footer-lpi">
      <span class="caption">Project Leader (LPI)</span>
      <strong class="fn">Elmar Kriegler</strong><br>
      <span class="org">Potsdam Institut für Klimafolgenforschung (PIK)</span><br>
      <div class="adr">
        <span class="street-address">Telegrafenberg A31</span><br>
        <span class="postal-code">14473</span> <span class="locality">Potsdam</span>
      </div>
    </div>
    <div class="footer-consortium">
      <span class="caption">Consortium members</span>
      <ul class="logo-list members">
        <li><a href="https://www.fh-potsdam.de/"><img :src="`${$router.options.base}logos/logo_FHP.png`" alt="University of Applied Sciences Potsdam" target="_blank"></a></li>
        <li><a href="https://iiasa.ac.at/"><img :src="`${$router.options.base}logos/logo_IIASA.png`" alt="International Institute for Applied Systems Analysis" target="_blank"></a></li>
        <li><a href="https://www.pik-potsdam.de/"><img :src="`${$router.options.base}logos/logo_PIK.png`" alt="Potsdam Institute for Climate Impact Research" target="_blank"></a></li>
        <li><a href="https://www.sei.org/"><img :src="`${$router.options.base}logos/logo_SEI.png`" alt="Stockholm Environment Institute" target="_blank"></a></li>
        <li><a href="https://www.wur.nl/"><img :src="`${$router.options.base}logos/logo_WUR.png`" alt="Wageningen University and Research" target="_blank"></a></li>
      </ul>
    </div>
    <div class="footer-funding">
      <span class="caption">Funded by</span>
      <span class="org">The project runs from 2017 to 2020. The project SENSES is part of the European Research Area for Climate Services (ERA4CS), an ERA-NET initiated by JPI Climate. It is funded by BMBF (DE), BMWFW (AT), NWO (NL), FORMAS (SE) with co-funding by the European Union (Grant 690462). <a href="http://www.jpi-climate.eu/ERA4CS">(ERA4CS)</a>.</span>
      <ul class="logo-list funders">
        <li><img :src="`${$router.options.base}logos/logo_EU.svg`" alt="European Union" style="width: 70%"></li>
        <li><a href="http://www.jpi-climate.eu/"><img :src="`${$router.options.base}logos/logo_JPI.png`" alt="Joint Programming Initiative Climate" target="_blank"></a></li>
        <li><a href="https://www.bmbf.de/en/index.html"><img :src="`${$router.options.base}logos/logo_BMBF.svg`" alt="Federal Ministry of Education and Research" target="_blank"></a></li>
        <li><a href="http://www.dlr.de/"><img :src="`${$router.options.base}logos/logo_DLR.svg`" alt="German Aerospace Center" style="width: 60%" target="_blank"></a></li>
        <li><a href="https://www.nwo.nl/"><img :src="`${$router.options.base}logos/logo_nwo.svg`" alt="The Netherlands Organisation for Scientific Research" style="width: 70%" target="_blank"></a></li>
        <li><a href="http://www.formas.se/"><img :src="`${$router.options.base}logos/logo_formas.svg`" alt="The Swedish Research Council for Environment, Agricultural Sciences and Spatial Planning" style="margin-top: 2em" target="_blank"></a></li>
      </ul>
    </div>
  </footer>
</template>

<script>

export default {}
</script>

<style lang="scss">
  @import "~@/assets/style/global";

  .page-footer {
    margin: $spacing / 2;
    margin-top: $spacing * 2;
    display: grid;
    font-size: 0.8rem;
    grid-gap: $spacing / 2;

    address {
      font-style: normal;
    }

    .ml:after {
      content: attr(data-name) "@" attr(data-domain) "." attr(data-tld);
    }

    @include media-query($medium) {
      width: 96vw;
      max-width: 1200px;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: $spacing * 3 / 2;

      .footer-funding, .footer-consortium {
        grid-column-end: span 2;
      }
    }

    .logo-list {
      display: grid;
      list-style: none;
      justify-items: center;
      align-items: center;
      justify-content: space-evenly;
      grid-gap: $spacing;
      margin: $spacing 0 $spacing * 2;

      &.members {
        margin-top: 0;
        grid-template-columns: repeat(2, 1fr);

        @include media-query($narrow) {
          grid-template-columns: repeat(3, 1fr);
        }

        @include media-query($medium) {
          grid-gap: $spacing * 3 / 2;
          grid-template-columns: repeat(5, 1fr);
        }
      }

      &.funders {
        grid-template-columns: repeat(2, 1fr);

        @include media-query($narrow) {
          grid-template-columns: repeat(3, 1fr);
        }

        @include media-query($medium) {
          grid-gap: $spacing * 3 / 2;
          grid-template-columns: repeat(6, 1fr);
        }
      }

      li {
        @include center();
        width: 100%;
      }

      a {
        text-decoration: none;
        background: none;
        @include center();
        width: 100%;
      }

      img {
        width: 100%;
        max-width: 30vw;
        height: auto;
      }
    }
  }

</style>
