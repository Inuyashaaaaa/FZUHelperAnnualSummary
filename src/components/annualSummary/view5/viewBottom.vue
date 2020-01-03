<template>
  <div class="view-bottom" :style="viewStyle">
    <div class="cactus1" :style="cactus1Style"></div>
    <div class="cactus2" :style="cactus2Style"></div>
    <div class="leaf1" :style="leaf1Style"></div>
    <div class="leaf2" :style="leaf2Style"></div>
    <div class="leaf3" :style="leaf3Style"></div>
    <div class="person" :style="personStyle"></div>
    <div class="balloon1" :style="balloon1Style"></div>
    <div class="balloon2" :style="balloon2Style"></div>
    <div class="balloon3" :style="balloon3Style"></div>
    <div class="button" @click="handleClick" :style="buttonStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'viewBottom',
  data: function () {
    return {
      viewStyle: {
        transformOrigin: '',
        transform: ''
      },
      cactus1Style: {
        width: '',
        height: '',
        leaf: '',
        top: ''
      },
      cactus2Style: {
        width: '',
        height: '',
        leaf: '',
        top: ''
      },
      leaf1Style: {
        width: '',
        height: '',
        leaf: '',
        top: ''
      },
      leaf2Style: {
        width: '',
        height: '',
        leaf: '',
        top: ''
      },
      leaf3Style: {
        width: '',
        height: '',
        leaf: '',
        top: ''
      },
      personStyle: {
        width: '',
        height: '',
        leaf: '',
        top: ''
      },
      balloon1Style: {
        width: '',
        height: '',
        leaf: '',
        top: ''
      },
      balloon2Style: {
        width: '',
        height: '',
        leaf: '',
        top: ''
      },
      balloon3Style: {
        width: '',
        height: '',
        leaf: '',
        top: ''
      },
      buttonStyle: {
        width: '',
        height: '',
        leaf: '',
        top: ''
      }
    }
  },
  methods: {
    renderDivStyle: function (dom, array, h, w) {
      dom.width = w * array[0] + 'px'
      dom.height = h * array[1] + 'px'
      dom.top = h * array[2] + 'px'
      dom.left = w * array[3] + 'px'
    },
    handleClick: function() {
      jsInterface.share()
    }
  },
  mounted: function () {
    let w = document.documentElement.clientWidth
    let h = document.documentElement.clientHeight
    let w1 = w
    let e = (h * 402 / w - 739) / 739 + 1
    w *= e

    this.viewStyle.transform = 'translateX(' + (e - 1) * w / 2 * (-1) + 'px)'
    this.renderDivStyle(this.cactus1Style, [0.33, 0.33, 0.75, -0.13], h, w)
    this.renderDivStyle(this.cactus2Style, [0.30, 0.30, 0.87, 0.77], h, w)
    this.renderDivStyle(this.leaf1Style, [0.23, 0.23, 0.90, -0.02], h, w)
    this.renderDivStyle(this.leaf2Style, [0.27, 0.27, 0.948, 0.12], h, w)
    this.renderDivStyle(this.leaf3Style, [0.40, 0.40, 0.86, 0.58], h, w)
    this.renderDivStyle(this.personStyle, [0.55, 0.55, 0.15, 0.35], h, w)
    this.renderDivStyle(this.balloon1Style, [0.10, 0.10, 0.17, 0.85], h, w)
    this.renderDivStyle(this.balloon2Style, [0.18, 0.18, 0.57, 0.82], h, w)
    this.renderDivStyle(this.balloon3Style, [0.25, 0.25, 0.42, 0.14], h, w)
    this.renderDivStyle(this.buttonStyle, [0.45, 0.45, 0.81, 0.30], h, w)
    let w2 = this.buttonStyle.width
    let w3 = (w1 - parseFloat(w2)) / 2
    console.log(w1, w2)
    console.log(w3)
    this.buttonStyle.left = (w3 - (e - 1) * w / 2 * (-1)) + 'px'
  }
}
</script>

<style lang="stylus" scoped>

.swiper-slide-active .person {
  animation personJiggle1 4s infinite ease-out
}

.swiper-slide-active .leaf1 {
  animation jiggle 8s infinite
}

.swiper-slide-active .leaf2 {
  animation jiggle 8s infinite
}

.swiper-slide-active .leaf3 {
  animation jiggle 8s infinite
}

.swiper-slide-active .cactus1 {
  animation jiggle 8s infinite
}

.swiper-slide-active .cactus2 {
  animation jiggle 8s infinite
}


// .swiper-slide-active .balloon1, .balloon2, .balloon3  {
//   animation personJiggle2 4s infinite
// }

@keyframes personJiggle1 {
  0% {
    transform: translate(0px, 0px)
  }
  60% {
    transform: translate(-4px, 10px)
  }
  100% {
    transform: translate(0px, 0px)
  }
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

@keyframes personJiggle2 {
  0% {
    transform: translate(0px, 0px)
  }
  10% {
    transform: translate(0px, -6px)
  }
  60% {
    transform: translate(-4px, 10px)
  }
  100% {
    transform: translate(0px, 0px)
  }
}

  .view-bottom {
    z-index 1
    width: 100%
    height: 100%
    top: 0%
    left: 0%
    position: absolute
    .cactus1 {
      z-index: 2
      position: absolute
      background-image: url('../../../../static/image/view5/cactus-2.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .cactus2 {
      z-index: 4
      position: absolute
      background-image: url('../../../../static/image/view5/cactus-4.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .leaf1 {
      z-index: 1
      position: absolute
      background-image: url('../../../../static/image/view5/leaf-1.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin 50% 100%
    }
    .leaf2 {
      z-index: 1
      position: absolute
      background-image: url('../../../../static/image/view5/leaf-2.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .leaf3 {
      z-index: 3
      position: absolute
      background-image: url('../../../../static/image/view5/leaf-3.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .person {
      z-index: 3
      position: absolute
      background-image: url('../../../../static/image/view5/person.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .balloon1 {
      z-index: 3
      position: absolute
      background-image: url('../../../../static/image/view5/balloon.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .balloon2 {
      z-index: 3
      position: absolute
      background-image: url('../../../../static/image/view5/balloon-2.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .balloon3 {
      z-index: 3
      position: absolute
      background-image: url('../../../../static/image/view5/balloon-3.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .button {
      z-index: 3
      position: absolute
      background-image: url('../../../../static/image/view5/button.png')
      background-size: contain
      background-repeat: no-repeat
    }
  }
</style>
