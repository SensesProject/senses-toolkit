<template>
  <div class="header-options">
    <section class="options-filter">
      <SensesSelect v-model="rawTag" :options="tags" :class="['input-select', { isActive: rawTag } ]" />
    </section>
    <section class="options-search">
      <input v-model="rawTerm" type="search" :class="['highlight', 'input-search', { isActive: rawTerm }]" placeholder="Search">
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import SensesSelect from 'library/src/components/SensesSelect.vue'
import { trim } from 'lodash'

export default {
  components: {
    SensesSelect
  },
  computed: {
    ...mapState('filter', [
      'hasFilter',
      'tag',
      'term'
    ]),
    ...mapGetters([
      'tags'
    ]),
    rawTag: {
      get () {
        return this.tag
      },
      set (value) {
        this.changeFilter({ key: 'tag', value })
      }
    },
    rawTerm: {
      get () {
        return this.term
      },
      set (v) {
        const value = trim(v)
        this.changeFilter({ key: 'term', value })
      }
    }
  },
  methods: {
    ...mapActions('filter', [
      'changeFilter'
    ])
  }
}
</script>

<style lang="scss">
  @import "~@/assets/style/global";

  .header-options {
    display: grid;
    justify-items: center;
    grid-gap: $spacing / 2;
    margin-top: $spacing / 2;
    align-items: center;

    @include media-query($narrow) {
      grid-template-columns: auto 1fr;
    }

    @include media-query($medium) {
      margin-top: 0;
    }

    .options-search {
      width: 100%;
    }

    .options-filter {
      button {
        padding: $spacing / 4 $spacing / 2 !important;

        @include media-query($narrow) {
          padding: $spacing / 2 $spacing !important;
        }
      }
    }

    .input-select {
      border-radius: $border-radius;

      .highlight {
        transition: border-color $transition;
        background-color: $color-interaction-background;
        border: 1px solid $color-interaction-background;

        &:focus, &:hover, &[aria-expanded="true"] {
          border-color: rgba($color-neon, 0.5);
        }
      }

      span {
        color: $color-neon;
      }

      &.isActive {
        .highlight {
          border-color: $color-neon;
        }
      }
    }

    .input-search {
      padding: $spacing / 4;
      background-color: #f8f8f8;
      -webkit-appearance: none;
      border: 1px solid #f8f8f8;
      height: 100%;
      padding: $spacing / 3;
      background-color: $color-interaction-background;
      border: 1px solid $color-interaction-background;
      transition: border-color $transition;

      &::placeholder {
        color: getColor(neon, 50);
      }

      &:focus, &:hover {
        border-color: rgba($color-neon, 0.5);
      }

      &.isActive {
        border-color: $color-neon;
      }

      @include media-query($narrow) {
        padding: $spacing / 2;
      }
    }
  }

</style>
