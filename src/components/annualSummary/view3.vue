<template>
  <div class="view3">
    <view-swing></view-swing>
    <view-content></view-content>
  </div>
</template>

<script>
import viewSwing from './view3/viewSwing'
import viewContent from './view3/viewContent'
export default {
  name: 'view3',
  components: {
    viewSwing,
    viewContent
  }
}
</script>

<style lang="stylus" scoped>
  .view3 {
    z-index: -1
    width: 100%
    height: 100%
    background-image: url('../../../static/image/view3/view3.png')
    background-size: cover
    background-repeat: no-repeat
    background-position: center center
    transform-origin: center center
    transform: scale(1.0)
  }
</style>
