<template>
  <nav class="options">
    <SensesSelect v-model="model" :options="models" width="200" />
    <SensesSelect v-model="region" :options="regions" width="200" />
    <SensesRadio v-model="scenario" :options="scenarios" />
    <SensesSelect v-model="visualisation" :options="visualisations" width="200" />
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import SensesSelect from 'library/src/components/SensesSelect'
import SensesRadio from 'library/src/components/SensesRadio'

export default {
  components: {
    SensesSelect,
    SensesRadio
  },
  computed: {
    ...mapGetters([
      'models',
      'regions',
      'scenarios',
      'visualisations'
    ]),
    model: {
      get () {
        return this.$store.state.settings.model
      },
      set (value) {
        this.$store.commit('SETTINGS_CHANGE', { key: 'model', value })
      }
    },
    region: {
      get () {
        return this.$store.state.settings.region
      },
      set (value) {
        this.$store.commit('SETTINGS_CHANGE', { key: 'region', value })
      }
    },
    scenario: {
      get () {
        return this.$store.state.settings.scenario
      },
      set (value) {
        this.$store.commit('SETTINGS_CHANGE', { key: 'scenario', value })
      }
    },
    visualisation: {
      get () {
        return this.$store.state.settings.visualisation
      },
      set (value) {
        this.$store.commit('SETTINGS_CHANGE', { key: 'visualisation', value })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .options {
    margin: $spacing / 2 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
  }
</style>
