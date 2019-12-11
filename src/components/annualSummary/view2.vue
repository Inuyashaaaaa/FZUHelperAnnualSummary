<template>
  <div class="view2">
    <view-content></view-content>
    <view-flower></view-flower>
    <view-bottom></view-bottom>
  </div>
</template>

<script>
import viewFlower from '../annualSummary/view2/viewFlower'
import viewBottom from '../annualSummary/view2/viewBottom'
import viewContent from '../annualSummary/view2/viewContent'
export default {
  name: 'view2',
  components: {
    viewFlower,
    viewBottom,
    viewContent
  }
}
</script>

<style lang="stylus" scoped>
  .view2 {
    z-index: -1
    width: 100%
    height: 100%
    background-image: url('../../../static/image/view2/view2-0.png')
    background-size: cover
    background-repeat: no-repeat
    background-position: center center
    transform-origin: center center
    transform: scale(1.05)
  }
</style>
