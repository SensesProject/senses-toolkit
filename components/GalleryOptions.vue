<template>
  <div class="header-options">
    <section class="options-filter">
      <SensesSelect v-model="audience" :options="audiences" />
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
      'audiences'
    ]),
    audience: {
      get () {
        return get(this.$store, ['state', 'filter', 'audience'])
      },
      set (value) {
        this.changeFilter({ key: 'audience', value })
      }
    },
    term: {
      get () {
        return get(this.$store, ['state', 'filter', 'term'])
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

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .header-options {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: center;
    // align-items: center;
    grid-gap: $spacing / 2;

    .options-search {
      // padding: 0 $spacing / 2;
      width: 100%;
    }
  }

</style>
