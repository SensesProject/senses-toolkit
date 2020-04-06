<template>
  <div>
    <SensesMenu message="Evaluation prototype" :toolkit="true" />
    <nuxt />
  </div>
</template>

<script>
import SensesMenu from 'library/src/components/SensesMenu.vue'

export default {
  components: {
    SensesMenu
  }
}
</script>

<style>

</style>
