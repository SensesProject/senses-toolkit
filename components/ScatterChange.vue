<template>
  <div class="vis">
    <svg ref="vis" :style="{ 'width': dimension, 'height': dimension}">
      <g
        v-for="(e, i) in elements"
        :key="e.key"
        :class="`color${i}`"
      >
        <g>
          <path :d="e.line" />
          <circle
            v-for="dot in e.dots"
            :key="dot[0]"
            :cx="dot[1]"
            :cy="dot[2]"
            :r="2"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import { scaleLinear } from 'd3-scale'
import { line } from 'd3-shape'
import { map, forEach, fromPairs, sum } from 'lodash'
import { mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      width: 0,
      height: 0,
      margin: {
        left: 80,
        right: 150,
        top: 70,
        bottom: 10
      }
    }
  },
  computed: {
    ...mapGetters([
      'data',
      'rangeValues',
      'rangeTime'
    ]),
    dimension () {
      return Math.min(this.width, this.height)
    },
    sumPerYear () {
      let years
      forEach(this.data, (run, i) => {
        if (i === 0) {
          years = fromPairs(map(run.years, (year) => {
            const [key, value] = year
            return [key, [value]]
          }))
        } else {
          forEach(run.years, (year) => {
            const [key, value] = year
            years[key].push(value)
          })
        }
      })
      return map(years, (values) => {
        return sum(values)
      })
    },
    scaleX () {
      return scaleLinear()
        .range([this.margin.left, this.dimension - this.margin.right])
        .domain(this.rangeValues).nice()
    },
    scaleY () {
      return scaleLinear()
        .range([this.dimension - this.margin.bottom, this.margin.top])
        .domain([0, 0.6])
    },
    elements () {
      return map(this.data, (run, i) => {
        const { key, years } = run

        const dots = map(years, ([year, value], n) => {
          const sum = this.sumPerYear[n]
          const x = this.scaleX(value)
          const y = this.scaleY(1 / sum * value)
          return [year, x, y]
        })
        const line = this.drawLine()(dots)

        return {
          key,
          dots,
          line
        }
      })
    }
  },
  mounted () {
    this.calcSizes()
    window.addEventListener('resize', this.calcSizes, false)
  },
  updated () {
    this.calcSizes()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.calcSizes, false)
  },
  methods: {
    calcSizes () {
      const { vis: el } = this.$refs
      if (el !== 'undefined') {
        this.width = el.clientWidth || el.parentNode.clientWidth
        this.height = el.clientHeight || el.parentNode.clientHeight
      }
    },
    drawLine () {
      return line()
        .x((d) => {
          return d[1]
        })
        .y((d) => {
          return d[2]
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .vis {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: 100%;

      path {
        stroke-width: 2px;
        fill: none;
      }
    }
  }

</style>
