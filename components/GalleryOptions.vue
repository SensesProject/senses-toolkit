<template>
  <div class="header-options">
    <section class="options-filter">
      <SensesSelect />
    </section>
    <section class="options-search">
      <input type="search" class="highlight input-search" placeholder="Search" />
    </section>
  </div>
</template>

<script>
import SensesSelect from 'library/src/components/SensesSelect.vue'

export default {
  components: {
    SensesSelect
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
