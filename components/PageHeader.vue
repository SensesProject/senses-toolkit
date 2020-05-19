<template>
  <header class="page-header">
    <h1 class="title serif">
      Making sense of climate change scenarios for <br class="until-medium"><vue-typer
        :pre-erase-delay="5000"
        :text="strings"
        caret-animation="smooth"
        erase-style="clear"
        @erased="onErased"
      />
    </h1>
    <ul v-if="type" class="header-background">
      <li
        v-for="el in elements"
        :key="el.file"
        :class="{ isVisible: el.isVisible }"
        :style="{ 'background-image': `url('${$router.options.base}/header/${el.file}.${type}')` }"
      />
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
      file: 'Tom_Hegen_The_Cultivation_Series',
      info: 'Cultivation Series',
      year: '2018',
      author: 'Tom Hegen',
      link: 'http://tomhegen.de/fotodesign/the-cultivation-series/'
    }, {
      file: 'Tom_Hegen_The-Coalmine-Series',
      info: 'Coalmine Series',
      year: '2018',
      author: 'Tom Hegen',
      link: 'http://tomhegen.de/fotodesign/the-coalmine-series/'
    }, {
      file: 'Tom_Hegen_The_Marble_Series',
      info: 'Marble Series',
      year: '2019',
      author: 'Tom Hegen',
      link: 'http://tomhegen.de/fotodesign/the-marble-series/'
    }, {
      file: 'Tom_Hegen_The-Spanish-Farmland-Series',
      info: 'Spanish Farmland Series',
      year: '2020',
      author: 'Tom Hegen',
      link: 'http://tomhegen.de/fotodesign/the-spanish-farmland-series/'
    }, {
      file: 'Tom_Hegen_The-Toxic-Series',
      info: 'Toxic Series',
      year: '2018',
      author: 'Tom Hegen',
      link: 'http://tomhegen.de/fotodesign/the-toxic-series/'
    }]
    const strings = ['policy', 'finance', 'scientists', 'investors', 'activists', 'mitigation', 'adaptation']
    return {
      strings,
      images,
      current: 0,
      type: false
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
  mounted () {
    const WebP = new Image()
    WebP.onload = WebP.onerror = () => {
      this.type = (WebP.height === 2) ? 'webp' : 'jpg'
    }
    WebP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  },
  methods: {
    onErased (erasedString) {
      this.current += 1
      if (this.current === this.images.length) {
        this.current = 0
      }
    }
  }
}
</script>

<style lang="scss">
  @import "~@/assets/style/global";

  .page-header {
    width: 100%;
    height: 50vh;
    min-height: 250px;
    @include center();
    position: relative;

    @include media-query($narrow) {
      min-height: 300px;
    }

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
      margin: 0 $spacing;
      @include text-radability(rgba(0, 0, 0, 0.3));
      z-index: 2;

      @include media-query($narrow) {
        margin: 0 $spacing * 2;
      }

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
