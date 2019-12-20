<template>
  <div class="view4">
    <view-content></view-content>
    <view-bottom></view-bottom>
  </div>
</template>

<script>
import viewBottom from './view4/viewBottom'
import viewContent from './view4/viewContent'
export default {
  name: 'view4',
  components: {
    viewBottom,
    viewContent
  }
}
</script>

<style lang="stylus" scoped>
  .view4 {
    z-index: -1
    width: 100%
    height: 100%
    background-image: url('../../../static/image/view4/view4.png')
    background-size: cover
    background-repeat: no-repeat
    background-position: center center
    transform-origin: center center
    transform: scale(1.0)
  }
</style>
