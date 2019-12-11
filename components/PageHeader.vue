<template>
  <header class="page-header">
    <h1 class="title serif">
      Making sense of climate change scenarios for Policy
    </h1>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .page-header {
    width: 100%;
    height: 50vh;
    min-height: 500px;
    @include center();
    background-image: url('../static/The_Coalmine_Series-17.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .title {
      max-width: 1000px;
      @include text-radability(rgba(0, 0, 0, 0.3));
    }
  }

</style>
