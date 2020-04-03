<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
  @import "~@/assets/style/global";

  .page-container {
    margin: $spacing * 2 0;

    @include media-query($medium) {
      width: 96vw;
      max-width: 1200px;
    }

    h1 {
      margin: $spacing 0 $spacing / 2;

      &:first-child {
        margin-top: 0;
      }
    }

    h2 {
      margin: $spacing 0 $spacing / 2;
    }
  }
</style>
