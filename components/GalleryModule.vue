<template>
  <div class="gallery-module">
    <header :class="{ 'module-header': true, isExpanded }" :style="{ 'background-image': `url(./bg/${bg}.png)`}">
      <h2 class="module-title mono">
        {{ title }}
      </h2>
      <transition-expand>
        <p v-if="!isExpanded" class="module-description">
          {{ description }}
        </p>
      </transition-expand>
    </header>
    <footer class="module-footer">
      <a v-if="path.length" :href="`/${path}`" class="btn btn-module">Read the module</a>
      <span @click="expand" class="btn btn-expand" :class="{ isExpanded }">More information <svg width="16" height="8"><g><path d="M-4,1.5 L0,-1.5 L4,1.5"/></g></svg></span>
      <transition-expand>
        <ul v-if="isExpanded" class="items">
          <li>
            <span class="caption">Authors</span>
            <span>By {{ author }}</span>
          </li>
          <li>
            <span class="caption">Audience</span>
            <span
              v-for="tag in tags"
              :key="tag"
              :class="{ tag: true, [tag]: true }"
              @click="() => changeFilter({ key: 'tag', value: tag })"
            >{{ tag }}</span>
          </li>
          <li v-if="gem" class="wide">
            <span class="caption">Gems for this module</span>
            <ul class="list">
              <li>
                <a href="https://data.ene.iiasa.ac.at/iamc-1.5c-explorer//#/workspaces/share/1a6e44c8-0963-4f28-a871-2b81bfb11def">PEP Emissions by major economies (iiasa.ac.at) <i>&nearr;</i></a>
              </li>
            </ul>
          </li>
          <li v-if="share" class="wide">
            <span class="caption">Download ressources</span>
            <ul class="list">
              <a href="#">Static visualisation graphics</a>
            </ul>
          </li>
        </ul>
      </transition-expand>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TransitionExpand from '~/components/TransitionExpand.vue'
import { chain } from '~/assets/js/utils.js'

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
  data () {
    return {
      isExpanded: false
    }
  },
  computed: {
    author () {
      return chain(this.authors)
    }
  },
  methods: {
    ...mapActions([
      'changeFilter'
    ]),
    expand () {
      this.isExpanded = !this.isExpanded
    }
  },
  components: {
    TransitionExpand
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
    background-color: #fff;
    display: grid;
    grid-row: span 2;
    grid-template-rows: 1fr auto;
    grid-template-rows: subgrid;
    grid-row-gap: 0;
    width: 100%;
    margin-bottom: $spacing;
    min-height: 350px;
    box-shadow: $box-shadow--default;

    @include media-query($medium) {
      margin-bottom: 0;
    }

    .module-header {
      padding: $spacing / 3 * 2 $spacing / 3 * 2;

      @include media-query($medium) {
        padding: $padding-vertical $padding-horizontal $spacing;
      }

      // padding-bottom: $spacing * 2;
      // min-height: 250px;
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
        opacity: 1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: 1;
        transition: opacity 1s;
      }

      &.isExpanded::after {
        opacity: 1;
      }

      &.alignRight {
        align-items: flex-end;
      }

      .module-title {
        display: inline-block;
        z-index: 2;
      }

      .module-description {
        margin-top: $spacing / 2;
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
      box-shadow: inset 0 20px 20px -20px rgba(getColor(gray, 80), 0.5);
      position: relative;

      .btn-module {
        place-self: flex-end;
        width: $button-width;
        height: $button-width;
        margin-right: calc((100% - #{$text-width} - #{$button-width}) / 2 - #{$spacing / 4});
        z-index: 2;
        border-radius: 50%;
        padding: 0;
        box-shadow: $box-shadow--strong;
        transition: transform $transition, background-color $transition, color $transition;

        &:hover {
          transform: scale(1.1);
          box-shadow: $box-shadow--heavy;
          color: #fff;
          background: $color-neon;
        }
      }

      .btn-expand {
        place-self: flex-start;
        position: absolute;
        border-radius: $spacing / 4;
        padding: $spacing / 8 $spacing / 2;
        height: $spacing;
        left: $padding-horizontal;
        top: -$spacing / 2;
        z-index: 2;
        transition: background-color $transition, color $transition;
        background-color: #fff;
        border: 1px solid getColor(gray, 80);
        color: $color-deep-gray;

        svg {
          g {
            transform: translate(11px, 4px);
            path {
              stroke: $color-deep-gray;
              stroke-width: 1.5;
              fill: none;
              transition: transform $transition, stroke $transition;
              transform: rotate(0deg);
            }
          }
        }

        &:hover {
          color: $color-neon;

          svg g path {
            stroke: $color-neon;
          }
        }

        &.isExpanded {
          svg {
            g {
              path {
                transform: rotate(180deg);
              }
            }
          }
        }
      }

      ul.items {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: $spacing / 4 $spacing / 4;

        .btn {
          height: 100%;
        }

        @include media-query($medium) {
          grid-gap: $spacing / 2 $spacing / 2;
        }

        .wide {
          grid-column-end: span 2;
        }
      }

      ul.list {
        list-style: none;
        font-size: 0.8rem;
      }
    }
  }

</style>
