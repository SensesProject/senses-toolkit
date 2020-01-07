<template>
  <header class="page-header">
    <h1 class="title serif">
      Making sense of climate change scenarios for <br class="until-medium" /><vue-typer
        :text="strings"
        :pre-erase-delay="3000"
        erase-style="clear"
        caret-animation="smooth"
        :class="klass"
        @erased='onErased' />
    </h1>
    <a class="copyright" href="http://tomhegen.de/" rel="author external" target="_blank">Photographs by Tom Hegen</a>
  </header>
</template>

<script>
import { VueTyper } from 'vue-typer'

function getNextElement (arr, i) {
  if (i === arr.length - 1) {
    return arr[0]
  } else {
    return arr[i + 1]
  }
}

export default {
  data () {
    return {
      strings: ['Policy', 'Finance'],
      klass: 'policy'
    }
  },
  components: {
    VueTyper
  },
  methods: {
    onErased (erasedString) {
      const i = this.strings.indexOf(erasedString)
      this.klass = getNextElement(this.strings, i).toLowerCase()
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
    background-image: url('../static/The_Coalmine_Series-17.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    @include media-query($medium) {
      min-height: 500px;
    }

    .title {
      max-width: $narrow;
      margin: 0 $spacing / 2;
      @include text-radability(rgba(0, 0, 0, 0.3));

      @include media-query($medium) {
        max-width: 1000px;
      }

      .vue-typer {
        &.finance .custom.char.typed {
          color: $color-purple;
        }

        &.policy .custom.char.typed {
          color: $color-green;
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
      position: absolute;
      right: 5px;
      bottom: 5px;
      color: rgba(#fff, 0.5);
      letter-spacing: 0.02em;
      background: none;
      font-size: 0.7rem;
      font-weight: normal;

      &:hover, &:focus {
        color: #fff;
      }
    }
  }
</style>
