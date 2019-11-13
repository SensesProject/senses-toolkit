<template>
  <div class="gallery-module">
    <header :class="{ 'module-header': true, isRight }" :style="{ 'background-image': `url(./bg/${bg}.png)`}">
      <h2 class="module-title mono">{{ title }}</h2>
      <p class="module-description">{{ description }}</p>
    </header>
    <footer class="module-footer">
      <button class="btn">Read the module</button>
      <button class="btn btn--secondary" v-if="gem">Explore the data</button>
      <button class="btn btn--secondary" v-if="share">Download ressources</button>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    gem: {
      type: Boolean,
      default: false
    },
    share: {
      type: Boolean,
      default: false
    },
    bg: {
      type: String
    },
    isRight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .gallery-module {
    box-shadow: $box-shadow--default;
    // grid-template-columns: $spacing 1fr $spacing;
    background-color: #fff;
    display: grid;
    grid-row: span 2;
    grid-template-rows: 1fr auto;
    grid-template-rows: subgrid;
    grid-row-gap: 0;

    .module-header {
      padding: $spacing / 2 $spacing / 3 * 2;
      // padding-top: $spacing;
      padding-bottom: $spacing * 2;
      min-height: 250px;
      border-bottom: 1px solid #F0F0FF;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      @include text-radability();

      &.isRight {
        display: flex;
        align-items: end;
        flex-direction: column;
      }

      .module-title {
        margin-bottom: $spacing / 2;
        display: inline-block;
        max-width: 350px;
      }

      .module-description {
        max-width: 350px;
      }
    }

    .module-footer {
      // padding-top: $spacing / 2;
      // grid-column-start: 2;
      margin-bottom: $spacing;
      display: grid;
      grid-template-rows: 1fr;
      grid-row-gap: $spacing / 4;
      justify-items: center;
      align-items: start;

      & > * {
        width: 60%;

        &:first-child {
          transform: translateY(-50%);
        }
      }
    }
  }

</style>
