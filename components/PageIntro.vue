<template>
  <nav class="page-intro">
    <div class="page-intro-float">
      <section><span>Scroll down to the toolkit for all modules</span></section>
      <section><span>Interested in Policy? Visit the portal</span></section>
      <section><span>Interested in Finance? Visit the portal</span></section>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .page-intro {
    @include center();

    .page-intro-float {
      background-color: #fff;
      box-shadow: $box-shadow--strong;
      display: grid;
      max-width: 800px;
      grid-template-columns: repeat(3, 1fr);
      transform: translateY(-50%);

      section {
        border-right: 1px solid #F0F0FF;
        padding: $spacing;
      }
    }

  }

</style>
