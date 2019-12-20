<template>
  <div class="viewSwing">
    <div class="person" :style="personStyle">
      <div class="feet1" :style="feet1Style"></div>
      <div class="feet2" :style="feet2Style"></div>
      <div class="head" :style="headStyle"></div>
      <div class="flower" :style="flowerStyle"></div>
      <div class="leaf1" :style="leaf1Style"></div>
      <div class="leaf2" :style="leaf2Style"></div>
      <div class="rattan" :style="rattanStyle"></div>
      <div class="neck" :style="neckStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'viewSwing',
  data: function () {
    return {
      personStyle: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      feet1Style: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      feet2Style: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      headStyle: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      neckStyle: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      leaf1Style: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      leaf2Style: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      flowerStyle: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      rattanStyle: {
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
    let e = (h * 439 / w - 796) / 796 + 1
    w *= e
    this.renderDivStyle(this.personStyle, [0.22, 0.44, -0.01, 0.50], h, w)
    h *= 0.44
    w *= 0.22
    this.renderDivStyle(this.feet1Style, [0.95, 0.10, 0.77, -0.84], h, w)
    this.renderDivStyle(this.feet2Style, [0.63, 0.25, 0.78, -0.42], h, w)
    this.renderDivStyle(this.headStyle, [0.75, 0.25, 0.538, 0.795], h, w)
    this.renderDivStyle(this.neckStyle, [0.16, 0.10, 0.64, 0.83], h, w)
    this.renderDivStyle(this.leaf1Style, [0.63, 0.25, 0.00, 0.33], h, w)
    this.renderDivStyle(this.leaf2Style, [0.63, 0.25, 0.00, 0.00], h, w)
    this.renderDivStyle(this.flowerStyle, [0.4, 0.25, 0.00, 0.33], h, w)
    this.renderDivStyle(this.rattanStyle, [0.4, 0.3, 0.62, 0.38], h, w)
  }
}
</script>

<style lang="stylus" scoped>
.swiper-slide-active .person{
  animation: personSwing 8s infinite cubic-bezier(.455,.03,.515,.955)
}

.swiper-slide-active .feet1 {
  animation: legSwing1 8s infinite ease-in-out
}

.swiper-slide-active .feet2 {
  animation: legSwing2 8s infinite ease
}

.swiper-slide-active .head {
  animation: headSwing 8s infinite ease
}

.viewSwing {
  position: absolute
  top: 0%
  left: 0%
  width: 100%
  height: 100%
  .person {
    z-index: 10
    position: absolute
    background-image: url('../../../../static/image/view3/person-0.png')
    background-size: contain
    background-repeat: no-repeat
    transform-origin: 30% -20%
    .neck {
      z-index: 0
      position: absolute
      background-image: url('../../../../static/image/view3/neck.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin: 95% 10%
    }
    .feet1 {
      z-index: 5
      position: absolute
      background-image: url('../../../../static/image/view3/feet-5.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin: 95% 10%
    }
    .feet2 {
      z-index: 6
      position: absolute
      background-image: url('../../../../static/image/view3/feet-6.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin: 80% 12.5%
    }
    .head {
      z-index: 0
      position: absolute
      background-image: url('../../../../static/image/view3/head-7.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin: 15% 50%
    }
    .leaf1 {
      z-index: 2
      position: absolute
      background-image: url('../../../../static/image/view3/leaf-2.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .leaf2 {
      z-index: 3
      position: absolute
      background-image: url('../../../../static/image/view3/leaf-3.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .flower {
      z-index: 4
      position: absolute
      background-image: url('../../../../static/image/view3/flower-4.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .rattan {
      z-index: 1
      position: absolute
      background-image: url('../../../../static/image/view3/rattan-1.png')
      background-size: contain
      background-repeat: no-repeat
    }
  }
}

@keyframes personSwing {
  0% {
    transform: rotate(-30deg)
  }
  50% {
    transform: rotate(40deg)
  }
  100% {
    transform: rotate(-30deg)
  }
}

@keyframes legSwing1 {
  0% {
      transform: rotate(-34.8deg);
  }
  25% {
      transform: rotate(30deg);
  }
  50% {
      transform: rotate(-34.8deg);
  }
  75% {
      transform: rotate(30deg);
  }
  100% {
      transform: rotate(-34.8deg);
  }
}

@keyframes legSwing2 {
  0% {
    transform: rotate(50deg);
  }
  25% {
      transform: rotate(-30deg);
  }
  50% {
      transform: rotate(50deg);
  }
  75% {
      transform: rotate(-30deg);
  }
  100% {
      transform: rotate(50deg);
  }
}

@keyframes headSwing {
  0% {
    transform: rotate(0deg);
  }
  25% {
      transform: rotate(-33deg);
  }
  62.5% {
      transform: rotate(-33deg);
  }
  87.92% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(0deg);
  }
}
</style>
