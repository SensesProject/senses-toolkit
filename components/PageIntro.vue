<template>
  <nav class="page-intro">
    <div class="page-intro-float">
      <section class="wrapper">
        <div>
          <span class="glyph glyph-policies" />
        </div>
        <div>
          <span>Scroll down to the toolkit for all modules</span>
        </div>
      </section>
      <section class="policy">
        <a href="#" class="wrapper">
          <div>
            <span class="glyph glyph-policies" />
          </div>
          <div>
            <span>Interested in <strong>Policy</strong>? Visit the portal&nbsp;&nearr;</span>
          </div>
        </a>
      </section>
      <section class="finance">
        <a href="#" class="wrapper">
          <div>
            <span class="glyph glyph-wildfires" />
          </div>
          <div>
            <span>Interested in <strong>Finance</strong>? Visit the portal&nbsp;&nearr;</span>
          </div>
        </a>
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
      margin-bottom: $spacing;

      @include media-query($narrow) {
        display: grid;
        max-width: $medium;
        grid-template-columns: repeat(3, 1fr);
        transform: translateY(-50%);
        margin-bottom: 0;
      }

      .wrapper {
        padding: $spacing / 2;
        display: flex;
        height: 100%;

        @include media-query($medium) {
          padding: $spacing;
        }

        div {
          @include center();
        }
      }

      section {
        border-bottom: 1px solid #F0F0FF;

        @include media-query($narrow) {
          border: none;
          border-right: 1px solid #F0F0FF;
        }

        &:last-child {
          border: none;
        }

        [class^="glyph-"]:before, [class*=" glyph-"]:before {
          margin: 0;
        }

        a {
          background: none;
          color: #000;
        }

        .glyph {
          font-size: 2.6rem;
          margin-right: $spacing / 2;
        }

        &.policy {
          strong, .glyph {
            color: $color-green;
          }

          a:hover, a:focus {
            background-color: $color-green;

            strong, .glyph, span {
              color: #fff;
            }
          }
        }

        &.finance {
          strong, .glyph {
            color: $color-purple;
          }

          a:hover, a:focus {
            background-color: $color-purple;

            strong, .glyph, span {
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>
