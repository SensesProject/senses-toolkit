<template>
  <div class="page-download">
    <header>
      <h1>{{ item.label }}</h1>
    </header>
    <dl class="details">
      <dt class="caption">Authors</dt>
      <dd>{{ author }}</dd>
      <dt class="caption">Licence</dt>
      <dd>{{ item.licence }}</dd>
      <dt class="caption">Reference</dt>
      <dd>
        <div class="readonly">
          <input type="text" readonly :value="item.reference" />
          <button class="btn">Copy</button>
        </div>
      </dd>
      <dt class="caption">Licence</dt>
      <dd>{{ item.licence }}</dd>
    </dl>
    <footer>
      <a :href="item.link" class="btn">Download</a>
    </footer>
    <span @click="hide" class="close">&times;</span>
    {{ activeID }}
    {{ item }}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { get } from 'lodash'
import { chain } from '~/assets/js/utils.js'

export default {
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
    }
  },
  methods: {
    hide () {
      this.$modal.hide('download')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/global";

.page-download {
  margin: $spacing;
  display: grid;
  grid-row-gap: $spacing;
  position: relative;

  .close {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    line-height: 1;
    color: $color-neon;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }

  .details {
    dd {
      margin-bottom: $spacing / 2;
    }
  }

  .readonly {
    border-radius: $border-radius;
    margin-right: 8px;
    border: 1px solid rgba($color-gray, 0.2);
    display: grid;
    grid-template-columns: 1fr auto;

    input {
      border: 0;
      padding: $spacing / 4;
      font-size: 0.8rem;

      &:focus {
        outline: none;
      }
    }

    button {
      padding: $spacing / 4 $spacing;
    }
  }
}

</style>
