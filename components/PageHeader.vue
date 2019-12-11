<template>
  <header class="page-header">
    <h1 class="title serif">
      Making sense of climate change scenarios for <vue-typer
        :text="strings"
        :pre-erase-delay="3000"
        erase-style="clear"
        caret-animation="smooth"
        :class="klass"
        @erased='onErased' />
    </h1>
  </header>
</template>

<script>
import { VueTyper } from 'vue-typer'

function getNextElement (arr, i) {
  const length = arr.length
  if (i === length - 1) {
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
      console.log(i, getNextElement(this.strings, i).toLowerCase())
      this.klass = getNextElement(this.strings, i).toLowerCase()
      console.log({ erasedString })
    }
  }
}
</script>

<style lang="scss">
  @import "~@/assets/style/global";

  .page-header {
    width: 100%;
    height: 50vh;
    min-height: 500px;
    @include center();
    background-image: url('../static/The_Coalmine_Series-17.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .title {
      max-width: 1000px;
      @include text-radability(rgba(0, 0, 0, 0.3));

      .vue-typer {
        &.finance .custom.char.typed {
          color: $color-purple;
        }

        &.policy .custom.char.typed {
          color: $color-green;
        }

        .custom.caret {
          width: 5px;
          background-color: #fff;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3), 0px 0px 5px rgba(0, 0, 0, 0.3), 0px 0px 10px rgba(0, 0, 0, 0.3);
          margin-left: 2px;
          border-radius: 1px;
        }
      }
    }
  }
</style>
