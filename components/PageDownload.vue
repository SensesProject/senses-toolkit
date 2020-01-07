<template>
  <div class="page-download">
    <header class="download-header">
      <h1>{{ item.label }}</h1>
    </header>
    <dl class="download-details">
      <dt class="caption">Description</dt>
      <dd>{{ item.description }}</dd>
      <dt class="caption">Authors</dt>
      <dd>{{ author }}</dd>
      <dt v-if="reference" class="caption">Reference</dt>
      <dd v-if="reference">
        <div class="readonly">
          <input type="text" readonly :value="item.reference" :class="{ copied }" />
          <button class="btn" @click="copyToClipboard" ref="referenceButton">{{ copyReference }}</button>
        </div>
      </dd>
    </dl>
    <footer class="download-footer">
      <dl>
        <dt class="caption">Licence</dt>
        <dd>{{ item.licence }}</dd>
      </dl>
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
      <a :href="item.link" class="btn btn--invert btn--action">Download {{ item.label }}</a>
    </footer>
    <span @click="hide" class="close">&times;</span>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { get } from 'lodash'
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
    ...mapState({
      activeID: state => get(state, ['downloads', 'activeID'], false)
    }),
    ...mapGetters([
      'downloads'
    ]),
    item () {
      return get(this.downloads, this.activeID)
    },
    author () {
      return chain(this.item.authors)
    },
    reference () {
      return this.item.reference
    }
  },
  methods: {
    hide () {
      this.$modal.hide('download')
    },
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

  .download-header, .download-details {
    margin: $spacing;
    margin-bottom: 0;

    &.download-details {
      margin-top: 0;
    }
  }

  .download-footer {
    background-color: $color-neon;
    padding: $spacing;
    color: #fff;

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

    .caption {
      color: rgba(#fff, 0.7);
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
    }
  }

  .readonly {
    border-radius: $border-radius;
    margin-right: 8px;
    display: grid;
    grid-template-columns: 1fr auto;

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
