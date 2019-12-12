<template>
  <div class="page-gallery">
    <header class="gallery-header">
      <h1 class="header-title">The Senses Toolkit</h1>
      <div class="header-intro">
        <p>This collection of visualisation tools helps you understand and communicate climate change scenarios. Each module answers a specific question. Lorem ipsum dolor.</p>
      </div>
      <GalleryOptions />
    </header>
    <Gallery />
  </div>
</template>

<script>
import Gallery from '~/components/Gallery.vue'
import GalleryOptions from '~/components/GalleryOptions.vue'

export default {
  components: {
    Gallery,
    GalleryOptions
  }
}
</script>

<style lang="scss">
  @import "~@/assets/style/global";

  .page-gallery {
    @include media-query($medium) {
      width: 96vw;
      max-width: 1200px;
    }

    .gallery-header, .gallery-content {
      @include media-query($medium) {
        display: grid;
        grid-gap: $spacing;
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
