<template>
  <div class="view view1">
    <view-clock></view-clock>
    <view-table></view-table>
    <view-letter></view-letter>
  </div>
</template>

<script>
import viewClock from '../annualSummary/view1/viewClock'
import viewTable from '../annualSummary/view1/viewTable'
import viewLetter from '../annualSummary/view1/viewLetter'
export default {
  name: 'view1',
  // props: ['music'],
  data: function () {
    return {
      view1Style: {
        height: ''
      }
    }
  },
  components: {
    viewClock,
    viewTable,
    viewLetter
  },
  methods: {

  },
  mounted: function () {
    // this.view1Style.height = window.innerHeight
  }
}
</script>

<style lang="stylus" scoped>
  .view1 {
    z-index: -1
    width: 100%
    height 100%
    background-image: url('../../../static/image/view1/view1.png')
    background-size: cover
    background-repeat: no-repeat
    background-position: center center
    transform-origin: center  100%
    transform: scale(1.0)
  }
</style>
