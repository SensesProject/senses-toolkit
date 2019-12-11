<template>
  <nav class="page-intro">
    <div class="page-intro-float">
      <section><span>Scroll down to the toolkit for all modules</span></section>
      <section class="policy">
        <div>
          <span class="glyph glyph-policies" />
        </div>
        <div>
          <span>Interested in <strong>Policy</strong>? Visit the portal</span>
        </div>
      </section>
      <section class="finance">
        <div>
          <span class="glyph glyph-wildfires" />
        </div>
        <div>
          <span>Interested in <strong>Finance</strong>? Visit the portal</span>
        </div>
      </section>
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
      max-width: 850px;
      grid-template-columns: repeat(3, 1fr);
      transform: translateY(-50%);

      section {
        border-right: 1px solid #F0F0FF;
        padding: $spacing;
        display: flex;

        .glyph {
          font-size: 2.3rem;
        }

        &.policy {
          strong, .glyph {
            color: $color-green;
          }
        }

        &.finance {
          strong, .glyph {
            color: $color-purple;
          }
        }
      }
    }

  }

</style>
