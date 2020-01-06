<template>
  <div class="view-bottom" :style="viewStyle">
    <div class="cactus1" :style="cactus1Style"></div>
    <div class="cactus2" :style="cactus2Style"></div>
    <div class="leaf1" :style="leaf1Style"></div>
    <div class="leaf2" :style="leaf2Style"></div>
    <div class="leaf3" :style="leaf3Style"></div>
    <div class="man" :style="manStyle">
      <div class="hair11" :style="hair11Style" v-if="this.$store.state.ttPerc < 0.8 && this.$store.state.ttPerc >= 0.6"></div>
      <div class="hair22" :style="hair22Style" v-else-if="this.$store.state.ttPerc < 0.6 && this.$store.state.ttPerc >= 0.4"></div>
      <div class="hair33" :style="hair33Style" v-else-if="this.$store.state.ttPerc < 0.4 && this.$store.state.ttPerc >= 0.2"></div>
      <div class="hair44" :style="hair44Style" v-else-if="this.$store.state.ttPerc < 0.2"></div>
    </div>
    <div class="women" :style="womenStyle">
      <div class="hair1" :style="hair1Style" v-if="this.$store.state.ttPerc < 0.8 && this.$store.state.ttPerc >= 0.6"></div>
      <div class="hair2" :style="hair2Style" v-else-if="this.$store.state.ttPerc < 0.6 && this.$store.state.ttPerc >= 0.4"></div>
      <div class="hair3" :style="hair3Style" v-else-if="this.$store.state.ttPerc < 0.4 && this.$store.state.ttPerc >= 0.2"></div>
      <div class="hair4" :style="hair4Style" v-else-if="this.$store.state.ttPerc < 0.2"></div>
    </div>
    <div class="balloon1" :style="balloon1Style"></div>
    <div class="balloon2" :style="balloon2Style"></div>
    <div class="balloon3" :style="balloon3Style"></div>
    <div v-if="this.$store.state.showInApp" class="button" @click="handleClick" :style="buttonStyle"></div>
    <div v-else class="button2" :style="buttonStyle" @click="handleClick2"></div>
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
      manStyle: {
        width: '',
        height: '',
        leaf: '',
        top: ''
      },
      womenStyle: {
        width: '',
        height: '',
        leaf: '',
        top: ''
      },
      hair11Style: {
        width: '',
        height: '',
        leaf: '',
        top: '',
      },
      hair22Style: {
        width: '',
        height: '',
        leaf: '',
        top: '',
      },
      hair33Style: {
        width: '',
        height: '',
        leaf: '',
        top: '',
      },
      hair44Style: {
        width: '',
        height: '',
        leaf: '',
        top: '',
      },
      hair1Style: {
        width: '',
        height: '',
        leaf: '',
        top: '',
      },
      hair2Style: {
        width: '',
        height: '',
        leaf: '',
        top: '',
      },
      hair3Style: {
        width: '',
        height: '',
        leaf: '',
        top: '',
      },
      hair4Style: {
        width: '',
        height: '',
        leaf: '',
        top: '',
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
    handleClick: function () {
      try {
        jsInterface.share()
      }
      catch(err) {
      }
    },
    handleClick2: function() {
      this.$router.push({path: 'guidance', query:{token: this.$store.state.token, graduate: this.$store.state.graduate}})
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
    this.renderDivStyle(this.manStyle, [0.45, 0.45, 0.10, 0.52], h, w)
    this.renderDivStyle(this.womenStyle, [0.30, 0.30, 0.465, 0.375], h, w)
    this.renderDivStyle(this.hair11Style, [0.13, 0.13, 0.485, 0.03], h * 0.45, w * 0.45)
    this.renderDivStyle(this.hair22Style, [0.13, 0.13, 0.485, 0.03], h * 0.45, w * 0.45)
    this.renderDivStyle(this.hair33Style, [0.13, 0.13, 0.485, 0.03], h * 0.45, w * 0.45)
    this.renderDivStyle(this.hair44Style, [0.13, 0.13, 0.485, 0.03], h * 0.45, w * 0.45)
    this.renderDivStyle(this.hair1Style, [0.089, 0.089, 0.05, 0.030], h, w)
    this.renderDivStyle(this.hair2Style, [0.089, 0.089, 0.05, 0.032], h, w)
    this.renderDivStyle(this.hair3Style, [0.12, 0.12, 0.05, -0.005], h, w)
    this.renderDivStyle(this.hair4Style, [0.14, 0.14, 0.051, -0.025], h, w)
    this.renderDivStyle(this.balloon1Style, [0.10, 0.10, 0.17, 0.85], h, w)
    this.renderDivStyle(this.balloon2Style, [0.18, 0.18, 0.57, 0.82], h, w)
    this.renderDivStyle(this.balloon3Style, [0.25, 0.25, 0.42, 0.14], h, w)
    this.renderDivStyle(this.buttonStyle, [0.45, 0.45, 0.81, 0.30], h, w)
    let w2 = this.buttonStyle.width
    let w3 = (w1 - parseFloat(w2)) / 2
    this.buttonStyle.left = (w3 - (e - 1) * w / 2 * (-1)) + 'px'
  },
  computed: {
    
  },
  watch:{
      
    }
}
</script>

<style lang="stylus" scoped>

.swiper-slide-active .man{
  animation personJiggle1 4s 8 ease-out, flyToSky 100s forwards ease-out 32s
}

.swiper-slide-active .women{
  animation personJiggle1 4s 8 ease-out, fallToDeath 100s forwards ease-out 32s
}

@keyframes flyToSky {
  0% {
    transform translateY(0px)
  }
  100% {
    transform translateY(-500%)
  }
}

@keyframes fallToDeath {
  0% {
    transform translateY(0px)
  }
  100% {
    transform translateY(500%)
  }
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
    .man {
      z-index: 3
      position: absolute
      background-image: url('../../../../static/image/view5/man.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .women {
      z-index: 3
      position: absolute
      background-image: url('../../../../static/image/view5/women.png')
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
    .button2 {
      z-index: 3
      position: absolute
      background-image: url('../../../../static/image/view5/button2.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .hair11 {
      z-index: 4
      position: absolute
      background-size: contain
      background-image: url('../../../../static/image/view5/manhair1.png')
      background-repeat: no-repeat
    }
    .hair22 {
      z-index: 4
      position: absolute
      background-size: contain
      background-image: url('../../../../static/image/view5/manhair2.png')
      background-repeat: no-repeat
    }
    .hair33 {
      z-index: 4
      position: absolute
      background-image: url('../../../../static/image/view5/manhair3.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .hair44 {
      z-index: 4
      position: absolute
      background-image: url('../../../../static/image/view5/manhair4.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .hair1 {
      z-index: 4
      position: absolute
      background-image: url('../../../../static/image/view5/womenhair1.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .hair2 {
      z-index: 4
      position: absolute
      background-image: url('../../../../static/image/view5/womenhair2.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .hair3 {
      z-index: 4
      position: absolute
      background-image: url('../../../../static/image/view5/womenhair3.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .hair4 {
      z-index: 4
      position: absolute
      background-image: url('../../../../static/image/view5/womenhair4.png')
      background-size: contain
      background-repeat: no-repeat
    }
  }
</style>
