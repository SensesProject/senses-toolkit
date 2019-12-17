<template>
  <div class="gallery-module">
    <header :class="{ 'module-header': true }" :style="{ 'background-image': `url(./bg/${bg}.png)`}">
      <h2 class="module-title mono">
        {{ title }}
      </h2>
      <p class="module-description">
        {{ description }}
      </p>
    </header>
    <footer class="module-footer">
      <a v-if="path.length" :href="`/${path}`" class="btn btn-module">Read the module</a>
      <ul>
        <li>By {{ chain(authors) }}</li>
        <li>
          <span
            v-for="tag in tags"
            :key="tag"
            :class="{ tag: true, [tag]: true }"
            @click="() => changeFilter({ key: 'tag', value: tag })">{{ tag }}</span>
        </li>
        <li v-if="gem">
          <span class="btn btn--tertiary">Explore the data</span>
        </li>
        <li v-if="share">
          <span class="btn btn--tertiary">Download ressources</span>
        </li>
      </ul>
      <!-- <button class="btn btn--secondary" v-if="gem">Explore the data</button>
      <button class="btn btn--secondary" v-if="share">Download ressources</button> -->
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    title: { // Title of the module
      type: String,
      default: 'Unnamed module'
    },
    description: { // Description text of the module
      type: String,
      default: null
    },
    gem: { // Link to a gem
      type: [Boolean, String],
      default: false
    },
    share: { // Link to share elements
      type: Boolean,
      default: false
    },
    path: { // The url path to the module
      type: String,
      default: null
    },
    bg: { // The url to the background image
      type: String,
      default: null
    },
    alignRight: {
      type: Boolean,
      default: false
    },
    tags: { // What is the audience (policy, finance)
      type: Array,
      default: () => []
    },
    authors: { // List of authors
      type: Array,
      default: () => []
    }
  },
  methods: {
    chain: (a) => {
      return [a.slice(0, -1).join(', '), a.slice(-1)[0]].join(a.length < 2 ? '' : ' and ')
    },
    ...mapActions([
      'changeFilter'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  $text-width: 350px;
  $button-width: 90px;

  $padding-horizontal: $spacing / 3 * 2;
  $padding-vertical: $spacing / 3 * 2;

  .gallery-module {
    box-shadow: $box-shadow--default;
    background-color: #fff;
    display: grid;
    grid-row: span 2;
    grid-template-rows: 1fr auto;
    grid-template-rows: subgrid;
    grid-row-gap: 0;
    width: 100%;
    margin-bottom: $spacing;

    @include media-query($medium) {
      margin-bottom: 0;
    }

    .module-header {
      padding: $spacing / 3 * 2 $spacing / 3 * 2;

      @include media-query($medium) {
        padding: $padding-vertical $padding-horizontal $spacing;
      }

      // padding-bottom: $spacing * 2;
      min-height: 250px;
      border-bottom: 1px solid getColor(gray, 80);
      background-position: center;
      background-size: 90% auto;
      background-repeat: no-repeat;
      background-opacity: 50%;
      @include text-radability(#fff);
      position: relative;
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      &::after {
        content: "";
        background-color: #fff;
        opacity: 0.7;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: 1;
      }

      &.alignRight {
        align-items: flex-end;
      }

      .module-title {
        margin-bottom: $spacing / 2;
        display: inline-block;
        z-index: 2;
      }

      .module-description {
        max-width: $text-width;
        z-index: 2;
      }
    }

    .module-footer {
      // background-color: rgba(getColor(gray, 90), 0.5);
      display: grid;
      grid-template-rows: $padding-vertical * 2 1fr;
      // grid-row-gap: $spacing / 4;
      padding: 0 $padding-horizontal $padding-vertical;
      align-items: start;
      box-shadow: inset 0 20px 20px -20px rgba(getColor(gray, 80), 0.8);

      .btn-module {
        place-self: flex-end;
        width: $button-width;
        height: $button-width;
        margin-right: calc((100% - #{$text-width} - #{$button-width}) / 2 - #{$spacing / 4});
        z-index: 2;
        border-radius: 50%;
        padding: 0;
        box-shadow: $box-shadow--strong;
        transition: transform 0.3s, background-color 0.3s, color 0.3s;

        &:hover {
          transform: scale(1.1);
          box-shadow: $box-shadow--heavy;
          color: #fff;
          background: $color-neon;
        }
      }

      ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: $spacing / 4 $spacing / 4;

        .btn {
          height: 100%;
        }

        @include media-query($medium) {
          grid-gap: $spacing $spacing / 2;
        }
      }
    }
  }

</style>
