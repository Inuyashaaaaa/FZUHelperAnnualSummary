<template>
  <div class="viewLetter" v-bind:style="letterStyle">

  </div>
</template>

<script>
export default {
  name: 'viewLetter',
  data: function () {
    return {
      letterStyle: {
        top: '',
        right: '',
        width: '',
        height: ''
      }
    }
  },
  mounted: function () {
    let w = document.documentElement.clientWidth
    let h = document.documentElement.clientHeight
    let e = (h * 2 / w - 3) / 3 + 1
    w *= e
    this.letterStyle.top = 0.2 * h + 'px'
    this.letterStyle.width = 0.20 * w + 'px'
    this.letterStyle.height = 0.20 * h + 'px'
    this.letterStyle.right = 0.10 * w + 'px'
  }
}
</script>

<style lang="stylus" scoped>

// .swiper-slide-active .viewLetter {
//   animation: creep 2s
//   animation-fill-mode: forwards
// }

.viewLetter {
  z-index: 1
  position: absolute
  background-image: url('../../../../static/image/view1/view1Letter.png')
  background-size: contain
  background-repeat: no-repeat
}

@keyframes creep {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}
</style>
