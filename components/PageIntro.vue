<template>
  <nav class="page-intro">
    <div class="page-intro-float">
      <section class="wrapper">
        <div>
          <span class="glyph glyph-toolkit-thick" />
        </div>
        <div>
          <span>Scroll down to find all modules</span>
        </div>
      </section>
      <section class="policy">
        <a class="wrapper">
          <div>
            <span class="glyph glyph-policies-thick" />
          </div>
          <div>
            <a href="/policy-portal">Visit the <strong>Policy</strong> portal for a curated path&nbsp;&nearr;</a>
          </div>
        </a>
      </section>
      <section class="finance">
        <a class="wrapper">
          <div>
            <span class="glyph glyph-finance-thick" />
          </div>
          <div>
            <a href="/finance-portal">Visit the <strong>Finance</strong> portal for a curated path&nbsp;&nearr;</a>
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
    margin-top: $spacing;
    @include center();

    @include media-query($medium) {
      margin-top: 0;
    }

    .page-intro-float {
      background-color: #fff;
      margin-bottom: $spacing;

      @include media-query($medium) {
        box-shadow: $box-shadow--strong;
        display: grid;
        max-width: $medium;
        grid-template-columns: repeat(3, 1fr);
        transform: translateY(-50%);
        margin-bottom: 0;
      }

      .wrapper {
        padding: $spacing / 4 $spacing / 2;
        display: flex;
        height: 100%;

        @include media-query($medium) {
          padding: $spacing / 2;
        }

        @include media-query($wide) {
          padding: $spacing;
        }

        div {
          @include center();
        }
      }

      section {
        border-bottom: 1px solid #F0F0FF;

        @include media-query($medium) {
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
          font-size: 1.6rem;
          margin-right: $spacing / 2;

          @include media-query($narrow) {
            font-size: 2.2rem;
          }

          @include media-query($medium) {
            font-size: 2.6rem;
          }
        }

        &.policy {
          a {
            cursor: default;
          }

          strong, .glyph, span {
            color: $color-gray;
            // color: #fff;
          }

          strong, .glyph {
            color: $color-green;
          }

          a:hover, a:focus {
            background-color: none;
            cursor: pointer;
            // background-color: $color-green;

            strong, .glyph, span {
              // color: $color-gray;
              // color: #fff;
            }
          }
        }

        &.finance {
          a {
            cursor: default;
          }

          strong, .glyph, span {
            color: $color-gray;
            // color: #fff;
          }

          strong, .glyph {
            color: $color-purple;
          }

          a:hover, a:focus {
            background-color: none;
            cursor: pointer;

            strong, .glyph, span {
              // color: $color-gray;
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
