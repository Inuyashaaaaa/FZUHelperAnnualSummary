<template>
  <div class="container" v-bind:style="viewStyle">
      <div class="rabbit" v-bind:style="rabbitStyle"></div>
      <div class="leaf" v-bind:style="leafStyle"></div>
      <div class="vegtation" v-bind:style="vegtationStyle"></div>
      <div class="flower1" v-bind:style="flower1Style"></div>
      <div class="flower2" v-bind:style="flower2Style"></div>
      <div class="rattan1" v-bind:style="rattan1Style"></div>
      <div class="rattan2" v-bind:style="rattan2Style"></div>
      <div class="person" v-bind:style="personStyle"></div>
      <div class="arm" v-bind:style="armStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'viewBottom',
  data: function () {
    return {
      viewStyle: {
        transform: '',
        transformOrigin: ''
      },
      rabbitStyle: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      leafStyle: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      vegtationStyle: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      flower1Style: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      flower2Style: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      rattan1Style: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      rattan2Style: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      personStyle: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      armStyle: {
        width: '',
        height: '',
        top: '',
        left: ''
      }
    }
  },
  methods: {
    renderDivStyle: function (dom, array, h, w) {
      dom.width = w * array[0] + 'px'
      dom.height = h * array[1] + 'px'
      dom.top = h * array[2] + 'px'
      dom.left = w * array[3] + 'px'
    }
  },
  mounted: function () {
    let w = document.documentElement.clientWidth
    let h = document.documentElement.clientHeight
    let e = (h * 608 / w - 883) / 883 + 1
    w *= e
    if (e < 1.2) {
      this.viewStyle.transformOrigin = 'center 100%'
      this.viewStyle.transform = 'translateX(' + (e - 1) * w / 2 * (-1) + 'px) ' +
      'scale(' + 1.2 / e + ')'
    } else {
      this.viewStyle.transform = 'translateX(' + (e - 1) * w / 2 * (-1) + 'px)'
    }
    this.renderDivStyle(this.rabbitStyle, [0.16, 0.16, 0.74, 0.335], h, w)
    this.renderDivStyle(this.leafStyle, [0.36, 0.36, 0.76, 0.014], h, w)
    this.renderDivStyle(this.vegtationStyle, [0.67, 0.67, 0.64, 0.12], h, w)
    this.renderDivStyle(this.flower1Style, [0.155, 0.155, 0.862, 0.31], h, w)
    this.renderDivStyle(this.flower2Style, [0.27, 0.27, 0.855, 0.11], h, w)
    this.renderDivStyle(this.rattan1Style, [0.45, 0.45, 0.66, 0.09], h, w)
    this.renderDivStyle(this.rattan2Style, [0.285, 0.285, 0.61, 0.435], h, w)
    this.renderDivStyle(this.personStyle, [0.72, 0.72, 0.475, 0.53], h, w)
    this.renderDivStyle(this.armStyle, [0.36, 0.262, 0.585, 0.69], h, w)
  }
}
</script>

<style lang="stylus" scoped>
  .container {
    width: 100%
    height: 100%
    top: 0%
    left: 0%
    position: absolute
    .rabbit {
      z-index: 1
      position: absolute
      background-image: url('../../../../static/image/view2/rabbit-1.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin: 0 100%
    }
    .leaf {
      z-index: 2
      position: absolute
      background-image: url('../../../../static/image/view2/leaf-2.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin: 0 100%
    }
    .vegtation {
      z-index: 3
      position: absolute
      background-image: url('../../../../static/image/view2/vegtation-3.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .flower1 {
      z-index: 4
      position: absolute
      background-image: url('../../../../static/image/view2/flower-4.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .flower2 {
      z-index: 5
      position: absolute
      background-image: url('../../../../static/image/view2/flower-5.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .rattan1 {
      z-index: 6
      position: absolute
      background-image: url('../../../../static/image/view2/rattan-6.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin: 10% 100%
    }
    .rattan2 {
      z-index: 7
      position: absolute
      background-image: url('../../../../static/image/view2/rattan-7.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin: 90% 100%
    }
    .person {
      z-index: 8
      position: absolute
      background-image: url('../../../../static/image/view2/person-8.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .arm {
      z-index: 9
      position: absolute
      background-image: url('../../../../static/image/view2/arm-9.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin: 100% 100%
    }
  }

.swiper-slide-active .rabbit{
  animation: scaleBgAndSm2 4s infinite
}

.swiper-slide-active .leaf {
  animation: jiggle 8s infinite
}

.swiper-slide-active .vegtation {
  animation: scaleBgAndSm1 4s infinite
}

.swiper-slide-active .flower1 {
  animation: scaleBgAndSm2 4s infinite linear
}

.swiper-slide-active .rattan1 {
  animation: jiggle2 8s infinite
}

.swiper-slide-active .rattan2 {
  animation: jiggle2 8s infinite
}

.swiper-slide-active .arm {
  animation: slideOut 2s ease-out
  animation-fill-mode: forwards
}

@keyframes jiggle {
    0% {
      transform: rotateZ(0deg)
    }
    50% {
      transform: rotateZ(5deg)
    }
    100% {
      transform: rotateZ(0deg)
    }
}

@keyframes jiggle2 {
    0% {
      transform: rotateZ(0deg)
    }
    50% {
      transform: rotateZ(1deg)
    }
    100% {
      transform: rotateZ(0deg)
    }
}

@keyframes scaleBgAndSm1 {
    0% {
      transform: scale(1)
    }
    50% {
      transform: scale(1.01)
    }
    100% {
      transform: scale(1)
    }
}

@keyframes scaleBgAndSm2 {
    0% {
      transform: scale(1)
    }
    50% {
      transform: scale(1.05)
    }
    100% {
      transform: scale(1)
    }
}

@keyframes slideOut {
    0% {
      transform: translate(0, 0)
    }
    100% {
      transform: translate(10%, 5%)
    }
}

</style>
