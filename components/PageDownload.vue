<template>
  <div class="page-download">
    <header class="download-header">
      <h1 class="mono">{{ moduleTitle }}</h1>
      <span class="caption">Available downloads</span>
      <ul class="list">
        <li
          v-for="element in downloadElements"
          :class="{ isActive: element.isActive, clickable: !element.isActive }"
          @click="() => selectDownload({ module: module.id, download: element.id })">{{ element.label }}</li>
      </ul>
    </header>
    <div class="download-download" v-if="download">
      <h2>{{ download.label }}</h2>
      <div>
        <a :href="download.link" class="btn btn--action">Download</a>
      </div>
      <p class="description">{{ download.description }}</p>
    </div>
    <dl class="download-details" v-if="download">
      <dt class="caption ">Preview</dt>
      <dd class="gallery">
        <ul class="previews">
          <li v-for="element in download.previews" class="preview">
            <img :src="`/previews/${element}`" />
          </li>
        </ul>
      </dd>
      <dt class="caption">Authors</dt>
      <dd>{{ author }}</dd>
      <dt v-if="reference" class="caption">Reference</dt>
      <dd v-if="reference">
        <div class="readonly">
          <input type="text" readonly :value="download.reference" :class="{ copied }" />
          <button class="btn" :class="{ copied }" @click="copyToClipboard" ref="referenceButton">{{ copyReference }}</button>
        </div>
      </dd>
      <dt v-if="reference" class="caption">URL</dt>
      <dd v-if="reference">
        <div class="readonly">
          <input type="text" readonly :value="'https://climatescenarios.org/#primerdownloads'" :class="{ copied }" />
          <button class="btn" @click="copyToClipboard" ref="referenceButton">{{ copyReference }}</button>
        </div>
      </dd>
      <dt class="caption">Licence</dt>
      <dd>{{ download.licence }}</dd>
    </dl>
    <footer class="download-footer">
      <strong>You are free to</strong>
      <ul>
        <li>Copy and redistribute the material in any medium or format</li>
        <li>Remix, transform, and build upon the material for any purpose, even commercially</li>
      </ul>
      <strong>Under the following terms</strong>
      <ul>
        <li>You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.</li>
        <li>If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.</li>
        <li>You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.</li>
      </ul>
    </footer>
    <span @click="hide" class="close">&times;</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { get, map } from 'lodash'
import copy from 'copy-to-clipboard'
import { chain } from '~/assets/js/utils.js'

export default {
  data () {
    return {
      copyReference: 'Click to copy',
      copiedReference: 'Copied to clipboard',
      copied: false,
      referenceLabel: false
    }
  },
  computed: {
    ...mapGetters([
      'downloads',
      'module'
    ]),
    ...mapGetters({
      'downloadID': 'currentDownloadID'
    }),
    moduleTitle () {
      return get(this.module, 'title')
    },
    download () {
      return get(this.downloads, this.downloadID)
    },
    author () {
      return chain(this.download.authors)
    },
    reference () {
      return this.download.reference
    },
    downloadIDs () {
      return get(this.module, 'downloadIDs')
    },
    downloadElements () {
      const { downloadIDs, downloadID, downloads } = this
      if (downloadIDs) {
        return map(downloadIDs, (id) => {
          const item = get(downloads, id)
          const label = get(item, 'label', 'unnamed item')
          const isActive = id === downloadID
          return {
            id,
            ...item,
            label,
            isActive
          }
        })
      }
      return []
    }
  },
  methods: {
    ...mapActions([
      'selectDownload'
    ]),
    copyToClipboard () {
      if (this.reference) {
        copy(this.reference)
        this.referenceLabel = true
        this.copied = true
        setTimeout(() => {
          this.copied = false
          this.$refs.referenceButton.blur()
        }, 1000)
        setTimeout(() => {
          this.referenceLabel = false
        }, 2000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/global";

.page-download {
  // margin: $spacing;
  display: grid;
  grid-row-gap: $spacing;
  position: relative;
  z-index: 10;

  .download-download, .download-details {
    margin: $spacing;
    margin-bottom: 0;
    margin-top: 0;
  }

  .download-download {
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: $spacing;
    grid-row-gap: $spacing;

    .description {
      grid-column-end: span 2;
    }
  }

  .download-header {
    // background-color: $color-neon;
    padding: $spacing;
    // color: #fff;
    border-bottom: 1px solid getColor(gray, 80);

    h1 {
      font-size: 2.3rem;
      font-style: italic;
      line-height: 1;
      letter-spacing: -0.02em;
      margin-bottom: $spacing / 2;
    }

    .caption {
      color: rgba(#000, 0.7);
    }

    .list {
      margin-top: $spacing / 4;
      list-style: none;

      li {
        padding: 0.2em 1em 0.2em 1.6em;
        list-style-position: inside;
        text-indent: -1.6em;
        line-height: 1.5em;
        color: $color-neon;

        &:hover, &:hover {
          color: getColor(neon, 40);
        }

        &.isActive {
          color: #000;
        }

        &:before {
          content: "— ";
          color: getColor(gray, 80);
          margin-right: 0.3em;
        }
      }
    }
  }

  .download-footer {
    border-top: 1px solid getColor(gray, 80);
    padding: $spacing;

    ul {
      font-size: 0.8rem;
    }

    strong {
      font-size: 0.9rem;
    }

    ul {
      margin-left: $spacing;
      margin-bottom: $spacing / 2;
    }

    .btn {
      margin-top: $spacing;
    }

    dl {
      margin-bottom: $spacing / 2;
    }
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    display: inline-block;
    color: $color-neon;
    cursor: pointer;
    speak: none;
    font-variant: normal;
    text-transform: none;
    line-height: 1em;
    margin-top: $spacing / 3;
    margin-right: $spacing / 2;

    &:hover {
      color: #000;
    }
  }

  .download-details {
    dd {
      margin-bottom: $spacing / 2;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  .gallery {
    position: relative;
    height: 200px;
  }

  .previews {
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    list-style: none;
    position: absolute;

    .preview {
      height: 200px;
      padding: $spacing / 4;

      img {
        height: 100%;
        width: auto;
        box-shadow: $box-shadow--default;
      }
    }
  }

  .readonly {
    border-radius: $border-radius;
    margin-right: 8px;
    display: grid;
    grid-template-columns: 1fr auto;

    .btn {
      border: 1px solid rgba($color-gray, 0.2);
      background-color: #fff;
      color: $color-neon;
      transition: color 2s, border-color 2s, box-shadow 2s;

      &:hover, &:focus {
        color: #000;
        transition: color 0.1s;
      }

      &.copied {
        color: $color-neon;
        border-color: $color-neon;
        transition: color 0.1s, border-color 0.1s, box-shadow 0.1s;
      }
    }

    input {
      border: 0;
      padding: $spacing / 4;
      font-size: 0.8rem;
      border: 1px solid rgba($color-gray, 0.2);
      border-right: 0;
      box-shadow: 0 0 0 $color-neon;
      transition: color 2s, border-color 2s, box-shadow 2s;

      &.copied {
        color: $color-neon;
        border-color: $color-neon;
        transition: color 0.1s, border-color 0.1s, box-shadow 0.1s;
      }

      &:focus {
        outline: none;
      }
    }

    button {
      padding: $spacing / 4 $spacing;
      border-radius: 0 $border-radius $border-radius 0;

      &:focus {
        outline: none;
      }
    }
  }
}

</style>
