<template>
  <div class="header-options">
    <section class="options-filter">
      <SensesSelect v-model="tag" :options="tags" class="input-select" />
    </section>
    <section class="options-search">
      <input v-model="term" type="search" class="highlight input-search" placeholder="Search" />
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SensesSelect from 'library/src/components/SensesSelect.vue'
import { get, trim } from 'lodash'

export default {
  components: {
    SensesSelect
  },
  computed: {
    ...mapGetters([
      'tags'
    ]),
    tag: {
      get () {
        return get(this.$store, ['state', 'filter', 'tag'], [])
      },
      set (value) {
        this.changeFilter({ key: 'tag', value })
      }
    },
    term: {
      get () {
        return get(this.$store, ['state', 'filter', 'term'], [])
      },
      set (v) {
        const value = trim(v)
        this.changeFilter({ key: 'term', value })
      }
    }
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

  .header-options {
    display: grid;
    justify-items: center;
    // align-items: center;
    grid-gap: $spacing;
    margin-top: $spacing / 2;

    @include media-query($narrow) {
      grid-template-columns: auto 1fr;
    }

    @include media-query($medium) {
      margin-top: 0;
    }

    .options-search {
      // padding: 0 $spacing / 2;
      width: 100%;
    }

    .options-filter {
      button {
        padding: $spacing / 4 $spacing / 2 !important;

        @include media-query($narrow) {
          padding: $spacing / 2 $spacing !important;
        }
      }
    }

    .input-select {
      button {
        background-color: #f8f8f8;
      }

      span {
        color: $color-neon;
      }
    }

    .input-search {
      padding: $spacing / 4;
      background-color: #f8f8f8;

      &::placeholder {
        color: getColor(neon, 50);
      }

      @include media-query($narrow) {
        padding: $spacing / 2;
      }
    }
  }

</style>
