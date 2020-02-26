<template>
  <nav class="page-intro">
    <div class="page-intro-float">
      <section class="wrapper">
        <div>
          <span class="glyph glyph-gems" />
        </div>
        <div>
          <span>Scroll down to find all modules</span>
        </div>
      </section>
      <section class="policy">
        <a href="https://dev.climatescenarios.org/policy-portal/" class="wrapper">
          <div>
            <span class="glyph glyph-policies" />
          </div>
          <div>
            <span>Visit the <strong>Policy</strong> portal for a curated path&nbsp;&nearr;</span>
          </div>
        </a>
      </section>
      <section class="finance" v-tooltip="{ content: 'Coming soon', offset: 5, classes: 'attention finance' }">
        <a class="wrapper">
          <div>
            <span class="glyph glyph-hurricanes" />
          </div>
          <div>
            <span>Visit the <strong>Finance</strong> portal for a curated path&nbsp;&nearr;</span>
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
    z-index: 3;
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
          a {
            cursor: default;
          }

          strong, .glyph {
            color: $color-purple;
          }

          a:hover, a:focus {
            background-color: none;

            strong, .glyph, span {
              color: $color-gray;
            }
          }

          // a:hover, a:focus {
          //   background-color: $color-purple;

          //   strong, .glyph, span {
          //     color: #fff;
          //   }
          // }
        }
      }
    }
  }
</style>
