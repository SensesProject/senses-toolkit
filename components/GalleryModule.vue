<template>
  <div class="gallery-module">
    <header :class="['module-header', { isExpanded, isTextOnly }]" :style="{ 'background-image': bg ? `url(${$router.options.base}bg/${bg}.png)` : 'none' }">
      <h2 class="module-title mono">
        <component
          :is="link ? 'a' : 'span'"
          :href="link"
          :class="{ clickable: !!link }"
        >
          {{ title }}
        </component>
      </h2>
      <span v-if="subtitle" class="caption type">{{ subtitle }}</span>
      <transition-expand>
        <p v-if="!isExpanded" class="module-description">
          {{ description }}
        </p>
      </transition-expand>
    </header>
    <footer v-if="author || sortedTags.length || sortedTypes.length || download.length || gems" class="module-footer">
      <a :href="link" :class="['btn', 'btn--module', { 'btn--clickable': link }]"><span>{{ link ? linkText : 'Available soon' }}</span></a>
      <span :class="{ isExpanded }" class="btn btn-expand" @click="expand">More information <svg width="16" height="8"><g><path d="M-4,1.5 L0,-1.5 L4,1.5" /></g></svg></span>
      <transition-expand>
        <ul v-if="isExpanded" class="items">
          <li>
            <span class="caption">Authors</span>
            <span class="authors content">{{ author }}</span>
          </li>
          <li class="tags">
            <section>
              <span class="caption">Audience</span>
              <span
                v-for="tag in sortedTags"
                :key="tag"
                v-tooltip="{ content: `Filter by ${tag}`, offset: 2 }"
                :class="{ tag: true, [tag]: true }"
                @click="() => changeFilter({ key: 'tag', value: tag })"
              >{{ tag }}</span>
            </section>
            <section>
              <span class="caption">Type</span>
              <span
                v-for="typ in sortedTypes"
                :key="typ"
                v-tooltip="{ content: `Filter by ${typ}`, offset: 2 }"
                :class="{ tag: true, [typ]: true }"
                @click="() => changeFilter({ key: 'tag', value: typ })"
              >{{ typ }}</span>
            </section>
          </li>
          <li v-if="download.length">
            <span class="caption">Printable resources</span>
            <span class="btn--link clickable" @click="() => showDownload({ module: id })">View {{ download.length }} {{ download.length > 1 ? 'packages' : 'package' }} for download</span>
          </li>
          <li v-if="gems">
            <span class="caption">Data used in this module</span>
            <a :href="gems" class="btn--link">View {{ gemsAmount ? gemsAmount : '' }} guided explore module{{ gemsAmount === 1 ? '' : 's' }}&nbsp;<i>&nearr;</i></a>
          </li>
        </ul>
      </transition-expand>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { map, get, truncate, sortBy } from 'lodash'
import TransitionExpand from 'library/src/components/helper/TransitionExpand.vue'
import { chain } from '~/assets/js/utils.js'

export default {
  components: {
    TransitionExpand
  },
  props: {
    id: { // The id of the module. Used for the download-modal
      type: String,
      default: null
    },
    title: { // Title of the module
      type: String,
      default: 'Unnamed module'
    },
    subtitle: { // Subtitle of the module
      type: [String, Boolean],
      default: false
    },
    description: { // Description text of the module
      type: String,
      default: null
    },
    gems: { // Link to gems
      type: [String, Boolean],
      default: false
    },
    gemsAmount: { // Link to gems
      type: Number,
      default: 0
    },
    downloadIDs: { // Link to share elements
      type: [Boolean, Array],
      default: () => []
    },
    link: { // The url path to the module
      type: [Boolean, String],
      default: false
    },
    linkText: { // The url path to the module
      type: String,
      default: 'Read the module'
    },
    bg: { // The url to the background image
      type: [String, Boolean],
      default: false
    },
    tags: { // What is the audience (policy, finance)
      type: Array,
      default: () => []
    },
    type: { // What is the type (learn, share, …)
      type: Array,
      default: () => []
    },
    authors: { // List of authors
      type: Array,
      default: () => []
    },
    isTextOnly: { // Is true for elements like: More modules coming soon
      type: Boolean,
      default: false
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
    },
    sortedTypes () {
      return sortBy(this.type, d => d.length * -1)
    },
    sortedTags () {
      return sortBy(this.tags, d => d.length * -1)
    },
    download () {
      const { downloadIDs, downloads } = this
      if (downloadIDs) {
        return map(downloadIDs, (id) => {
          const item = get(downloads, id)
          const label = get(item, 'label', 'unnamed item')
          return {
            id,
            ...item,
            label
          }
        })
      }
      return []
    }
  },
  methods: {
    ...mapActions([
      'changeFilter',
      'selectDownload'
    ]),
    expand () {
      this.isExpanded = !this.isExpanded
    },
    showDownload (id) {
      if (id) {
        this.selectDownload(id)
        // this.$modal.show('download')
      }
    },
    truncate (str) {
      return truncate(str, { length: 35, separator: /, +-–/ })
    }
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
    grid-row-gap: 0;
    width: 100%;
    margin-bottom: $spacing;
    min-height: 350px;
    box-shadow: $box-shadow--default;

    @include media-query($narrow) {
      width: 80%;
    }

    @include media-query($medium) {
      margin-bottom: 0;
      width: 100%;
    }

    .module-header {
      padding: $spacing / 3 * 2 $spacing / 3 * 2;

      @include media-query($medium) {
        padding: $padding-vertical $padding-horizontal $spacing;
      }

      background-position: center;
      background-size: 90% auto;
      background-repeat: no-repeat;
      background-opacity: 50%;
      @include text-radability(#fff);
      position: relative;
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      &:not(.isTextOnly) {
        border-bottom: 1px solid getColor(gray, 80);
      }

      &.isTextOnly {
        background-position: center bottom;
      }

      a {
        background: none;
        color: #000;

        &:hover, &:focus {
          color: $color-neon;
        }
      }

      .type {
        margin-top: $spacing / 4;
        display: inline-block;
      }

      &::after {
        content: "";
        background-color: #fff;
        opacity: 0.2;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: 1;
        transition: opacity 1s;
      }

      &.isExpanded::after {
        opacity: .2;
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
      // box-shadow: inset 0 20px 20px -20px rgba(getColor(gray, 80), 0.5);
      position: relative;

      .btn--module {
        place-self: flex-end;
        width: $button-width;
        height: $button-width;
        margin-right: 0;
        z-index: 2;
        border-radius: 50%;
        transition: transform $transition, background-color $transition, color $transition, box-shadow $transition;
        font-size: 0.8rem;
        text-align: center;
        @include center();
        border: 0;
        background: $color-pale-gray;
        color: $color-dark-gray;
        cursor: default;

        span {
          margin: $spacing / 4;
          line-height: 1.2;
        }

        @include media-query($medium) {
          margin-right: calc((100% - #{$text-width} - #{$button-width}) / 2 - #{$spacing / 4});
        }

        &.btn--clickable {
          cursor: pointer;
          background: $color-neon;
          box-shadow: $box-shadow--weak;
          color: #fff;

          &:hover {
            transform: scale(1.1);
            box-shadow: $box-shadow--heavy;
            color: #fff;
            background: $color-neon;
          }
        }
      }

      .btn-expand {
        place-self: flex-start;
        position: absolute;
        border-radius: $spacing / 4;
        padding: 0 $spacing / 2;
        line-height: $spacing;
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

      .btn--link {
        background: #fff;
        border: 1px solid getColor(gray, 80);
        color: $color-deep-gray;
        border-radius: $border-radius * 2;
        padding: 4px 8px 4px;
        margin-top: $spacing / 8;
        display: inline-block;

        &:hover {
          color: $color-neon;
        }
      }

      ul.items {
        list-style: none;
        display: grid;
        grid-gap: $spacing / 2 $spacing / 4;

        @include media-query($medium) {
          grid-template-columns: repeat(2, 1fr);
          grid-gap: $spacing / 4 $spacing / 4;
        }

        .authors {
          max-width: 450px;
          display: inline-block;
        }

        .btn {
          height: 100%;
        }

        .caption {
          margin: $spacing / 2 0 $spacing / 8;
        }

        section + section {
          margin-top: $spacing / 4;

          @include media-query($medium) {
            margin-top: $spacing / 2;
          }
        }

        li.tags {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: $spacing / 4 $spacing / 4;

          section {
            margin-top: 0;
          }
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

        li {
          color: $color-neon;
          background: none;

          &:hover, &:focus {
            color: getColor(neon, 40);
          }
        }
      }
    }
  }

</style>
