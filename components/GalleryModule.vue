<template>
  <div class="gallery-module">
    <header :class="{ 'module-header': true, isRight }" :style="{ 'background-image': `url(./bg/${bg}.png)`}">
      <h2 class="module-title mono">{{ title }}</h2>
      <p class="module-description">{{ description }}</p>
    </header>
    <footer class="module-footer">
      <button class="btn btn-module">Read the module</button>
      <ul>
        <li>By {{ chain(authors) }}</li>
        <li><span v-for="tag in audience" :key="tag" :class="{ tag: true, [tag]: true }">{{ tag }}</span></li>
        <li v-if="gem"><span class="btn btn--tertiary">Explore the data</span></li>
        <li v-if="share"><span class="btn btn--tertiary">Download ressources</span></li>
      </ul>
      <!-- <button class="btn btn--secondary" v-if="gem">Explore the data</button>
      <button class="btn btn--secondary" v-if="share">Download ressources</button> -->
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
      type: [Boolean, String],
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
    },
    audience: {
      type: Array,
      default: () => []
    },
    authors: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    chain: (a) => {
      return [a.slice(0, -1).join(', '), a.slice(-1)[0]].join(a.length < 2 ? '' : ' and ')
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
      @include text-radability(#fff);

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
      display: grid;
      grid-template-rows: 1fr;
      // grid-row-gap: $spacing / 4;
      padding: 0 $spacing / 2 $spacing / 2;
      align-items: start;

      .btn-module {
        place-self: center;
        width: 60%;
        transform: translateY(-50%);
      }

      ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: $spacing / 2 $spacing / 2;
      }
    }
  }

</style>