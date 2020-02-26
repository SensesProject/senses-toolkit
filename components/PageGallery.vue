<template>
  <div class="page-gallery">
    <header class="gallery-header">
      <h1 class="header-title">
        The Senses Toolkit
      </h1>
      <div class="header-intro">
        <p>These modules helps you understand and communicate climate change scenarios. The modules utilise visualisations in an <span class="clickable interactive" @click="() => changeFilter({ key: 'tag', value: 'Learn' })">explanatory</span> or <span class="clickable interactive" @click="() => changeFilter({ key: 'tag', value: 'Explore' })">exploratory</span> way. The target audience are <span class="clickable interactive" @click="() => changeFilter({ key: 'tag', value: 'Finance' })">finance</span>, <span class="clickable interactive" @click="() => changeFilter({ key: 'tag', value: 'Policy' })">policy</span> and <span class="clickable interactive" @click="() => changeFilter({ key: 'tag', value: 'Regional' })">regional</span> decision makers.</p>
      </div>
      <GalleryOptions />
    </header>
    <Gallery />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Gallery from '~/components/Gallery.vue'
import GalleryOptions from '~/components/GalleryOptions.vue'

export default {
  components: {
    Gallery,
    GalleryOptions
  },
  methods: {
    ...mapActions([
      'changeFilter'
    ])
  }
}
</script>

<style lang="scss">
  @import "~@/assets/style/global";

  .page-gallery {
    .interactive {
      border-bottom: 1px solid rgba($color-neon, 0.5);
      transition: border-color 0.2s;

      &:hover, &:focus {
        border-bottom-color: $color-neon
      }
    }

    @include media-query($medium) {
      width: 96vw;
      max-width: 1200px;
    }

    .gallery-header, .gallery-content {
      @include media-query($medium) {
        display: grid;
        grid-gap: $spacing * 3 / 2;
        grid-template-columns: 1fr;
        grid-auto-flow: row;
      }

      @include media-query(1200px) {
        & {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }

    .gallery-header {
      margin: 0 $spacing / 3 * 2 $spacing * 2;

      @include media-query($medium) {
        & {
          margin: 0 0 $spacing * 2;
        }
      }

      .header-title {
        @include media-query(1200px) {
          & {
            grid-column-start: span 2;
          }
        }
      }
    }
  }
</style>
