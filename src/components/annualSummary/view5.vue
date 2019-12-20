<template>
  <div class="view5">
    <view-bottom></view-bottom>
    <view-content></view-content>
  </div>
</template>

<script>
import viewBottom from './view5/viewBottom'
import viewContent from './view5/viewContent'
export default {
  name: 'view5',
  components: {
    viewBottom,
    viewContent
  }
}
</script>

<style lang="stylus" scoped>
  .view5 {
    z-index: -1
    width: 100%
    height: 100%
    background-image: url('../../../static/image/view5/view5.png')
    background-size: cover
    background-repeat: no-repeat
    background-position: center center
    transform-origin: center center
    transform: scale(1.0)
  }
</style>
