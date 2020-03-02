<template>
  <header class="page-header">
    <h1 class="title serif">
      Making sense of climate change scenarios for <br class="until-wide" /><vue-typer
        :pre-erase-delay="5000"
        :text="strings"
        caret-animation="smooth"
        erase-style="clear"
        @erased="onErased" />
    </h1>
    <ul class="header-background">
      <li
        v-for="el in elements"
        :class="{ isVisible: el.isVisible }"
        :style="{ 'background-image': `url('./header/${el.file}')`}" />
    </ul>
    <transition name="fade" mode="out-in">
      <a :key="copyright.link" class="copyright" :href="copyright.link" rel="author external" target="_blank">{{ copyright.info }}, {{ copyright.year }}. Image by {{ copyright.author }}</a>
    </transition>
  </header>
</template>

<script>
import { VueTyper } from 'vue-typer'
import { map, get } from 'lodash'

export default {
  components: {
    VueTyper
  },
  data () {
    const images = [{
      file: 'ATLAS-OF-PLACES-INFRASTRUCTURE-PATTERNS-II-IMG-4.jpg',
      info: 'Kumiyama, Japan',
      year: '2018',
      author: 'Atlas of Places',
      link: 'https://atlasofplaces.com/research/infrastructure-patterns-ii/'
    }, {
      file: 'ATLAS-OF-PLACES-INFRASTRUCTURE-PATTERNS-VI-IMG-6.jpg',
      info: 'Alang, India',
      year: '2019',
      author: 'Atlas of Places',
      link: 'https://atlasofplaces.com/research/infrastructure-patterns-vi/'
    }, {
      file: 'ATLAS-OF-PLACES-UN-FEU-DISTINCT-I-IMG-2.jpg',
      info: 'California, United States',
      year: '2018',
      author: 'Atlas of Places',
      link: 'https://atlasofplaces.com/research/un-feu-distinct-i/'
    }, {
      file: 'The_Coalmine_Series-17.jpg',
      info: 'Coal mining',
      year: '2018',
      author: 'Tom Hegen',
      link: 'http://tomhegen.de/fotodesign/the-coalmine-series/'
    }, {
      file: 'The_Cultivation_Series-10.jpg',
      info: 'Art of Gardening',
      year: '2018',
      author: 'Tom Hegen',
      link: 'http://tomhegen.de/fotodesign/the-cultivation-series/'
    }, {
      file: 'The_Farmer_Series-2.jpg',
      info: 'Lignite Mining',
      year: '2018',
      author: 'Tom Hegen',
      link: 'http://tomhegen.de/fotodesign/the-toxic-series/'
    }, {
      file: 'Tom_Hegen_The_Marble_Series_web-5.jpg',
      info: 'Marble Mining',
      year: '2019',
      author: 'Tom Hegen',
      link: 'http://tomhegen.de/fotodesign/the-marble-series/'
    }, {
      file: 'ATLAS-OF-PLACES-INFRASTRUCTURE-PATTERNS-IV-IMG-7.jpg',
      info: 'Namiquipa, Mexico',
      year: '2019',
      author: 'Atlas of Places',
      link: 'https://atlasofplaces.com/research/infrastructure-patterns-iv/'
    }]
    const strings = ['policy', 'finance', 'decision making', 'scientists', 'investors', 'activists', 'mitigation', 'adaptation']
    return {
      strings,
      images,
      current: 0
    }
  },
  computed: {
    elements () {
      return map(this.images, (obj, i) => {
        return {
          ...obj,
          isVisible: i === this.current
        }
      })
    },
    copyright () {
      return get(this.images, this.current)
    }
  },
  methods: {
    onErased (erasedString) {
      const i = this.strings.indexOf(erasedString)
      this.current = i
    }
  }
}
</script>

<style lang="scss">
  @import "~@/assets/style/global";

  .page-header {
    width: 100%;
    height: 50vh;
    @include center();
    position: relative;

    .header-background, li {
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: 1;
    }

    li {
      opacity: 0;
      transition: opacity 2s;

      &.isVisible {
        opacity: 1;
      }
    }

    @include media-query($medium) {
      min-height: 500px;
    }

    .title {
      max-width: $narrow;
      margin: 0 $spacing / 2;
      @include text-radability(rgba(0, 0, 0, 0.3));
      z-index: 2;

      @include media-query($medium) {
        max-width: 1000px;
      }

      .vue-typer {
        white-space: nowrap;

        .custom.char.typed {
          color: #fff;
        }

        .custom.caret {
          width: 3px;
          background-color: #fff;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3), 0px 0px 5px rgba(0, 0, 0, 0.3), 0px 0px 10px rgba(0, 0, 0, 0.3);
          margin-left: 2px;
          border-radius: 1px;
        }
      }
    }

    .copyright {
      z-index: 2;
      position: absolute;
      right: 5px;
      bottom: 5px;
      color: rgba(#fff, 0.9);
      letter-spacing: 0.02em;
      background: none;
      font-size: 0.5rem;
      font-weight: normal;
      @include text-radability(rgba(0, 0, 0, 0.3));

      &:hover, &:focus {
        color: #fff;
      }

      @include media-query($narrow) {
        font-size: 0.6rem;
      }

      @include media-query($medium) {
        font-size: 0.7rem;
      }

      @include media-query($wide) {
        font-size: 0.7rem;
      }
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .3s;
    }

    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
  }
</style>
