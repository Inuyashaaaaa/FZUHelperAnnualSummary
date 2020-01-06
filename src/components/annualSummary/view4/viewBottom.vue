<template>
  <div class="view-bottom" :style="viewStyle">
    <div class="course" :style="course1Style"></div>
    <div class="person" :style="personStyle"></div>
    <div class="feet1" :style="feet1Style"></div>
    <div class="feet2" :style="feet2Style"></div>
    <div class="leaf1" :style="leaf1Style"></div>
    <div class="leaf2" :style="leaf2Style"></div>
    <div class="rattan" :style="rattanStyle"></div>
    <div class="flower1" :style="flower1Style"></div>
    <div class="flower2" :style="flower2Style"></div>
    <div class="course2" :style="course2Style"></div>
  </div>
</template>

<script>
export default {
  name: 'viewBottom',
  data: function () {
    return {
      viewStyle: {
        transfrom: ''
      },
      course1Style: {
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
      rattanStyle: {
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
      course2Style: {
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
    let e = (h * 2000 / w - 3000) / 3000 + 1
    w *= e
    this.viewStyle.transform = 'translateX(' + (e - 1) * w / 4 * (-1) + 'px)'
    this.renderDivStyle(this.course1Style, [1.7, 1.7, 0.45, -0.35], h, w)
    this.renderDivStyle(this.feet1Style, [0.10, 0.10, 0.60, 0.80], h, w)
    this.renderDivStyle(this.feet2Style, [0.10, 0.10, 0.62, 0.80], h, w)
    this.renderDivStyle(this.leaf1Style, [0.57, 0.57, 0.57, -0.25], h, w)
    this.renderDivStyle(this.leaf2Style, [0.3, 0.3, 0.83, -0.05], h, w)
    this.renderDivStyle(this.rattanStyle, [0.3, 0.3, 0.82, 0.48], h, w)
    this.renderDivStyle(this.flower1Style, [0.12, 0.12, 0.95, 0.67], h, w)
    this.renderDivStyle(this.flower2Style, [0.25, 0.25, 0.67, -0.09], h, w)
    this.renderDivStyle(this.course2Style, [0.52, 0.52, 0.82, -0.09], h, w)
    this.renderDivStyle(this.personStyle, [0.40, 0.40, 0.61, 0.43], h, w)
  }
}
</script>

<style lang="stylus" scoped>

.swiper-slide-active .feet1 {
  animation feet1Swing 8s infinite
}

.swiper-slide-active .feet2 {
  animation feet2Swing 8s infinite
}

.swiper-slide-active .leaf1 {
  animation jiggle2 8s infinite
}

.swiper-slide-active .leaf2 {
  animation jiggle 8s infinite
}

.swiper-slide-active .flower2 {
  animation jiggle2 8s infinite
}

.swiper-slide-active .rattan {
  animation jiggle 8s infinite
}

@keyframes feet1Swing {
  0% {
    transform: rotateZ(10deg)
  }
  50% {
    transform: rotateZ(-10deg)
  }
  100% {
    transform: rotateZ(10deg)
  }
}

@keyframes feet2Swing {
  0% {
    transform: rotateZ(0deg)
  }
  50% {
    transform: rotateZ(20deg)
  }
  100% {
    transform: rotateZ(0deg)
  }
}

@keyframes jiggle {
  0% {
    transform: rotateZ(0deg)
  }
  50% {
    transform: rotateZ(4deg)
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

  .view-bottom {
    width: 100%
    height: 100%
    top: 0%
    left: 0%
    position: absolute
    .course {
      z-index: 1
      position: absolute
      background-image: url('../../../../static/image/view4/course-1.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .person {
      z-index: 1
      position: absolute
      background-image: url('../../../../static/image/view4/person.png')
      background-size: contain
      background-repeat: no-repeat
    }
    .feet1 {
      z-index: 7
      position: absolute
      background-image: url('../../../../static/image/view4/feet-7.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin: 30% 100%
    }
    .feet2 {
      z-index: 8
      position: absolute
      background-image: url('../../../../static/image/view4/feet-8.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin: 10% 80%
    }
    .leaf1 {
      z-index: 4
      position: absolute
      background-image: url('../../../../static/image/view4/leaf-4.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin 0% 100%
    }
    .leaf2 {
      z-index: 6
      position: absolute
      background-image: url('../../../../static/image/view4/leaf-6.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin 0% 100%
    }
    .rattan {
      z-index: 2
      position: absolute
      background-image: url('../../../../static/image/view4/rattan-2.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin 100% 100%
    }
    .flower1 {
      z-index: 3
      position: absolute
      background-image: url('../../../../static/image/view4/flower-3.png')
      background-size: contain
      background-repeat: no-repeat

    }
    .flower2 {
      z-index: 5
      position: absolute
      background-image: url('../../../../static/image/view4/flower-5.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin 0% 100%
    }
    .course2 {
      z-index: 5
      position: absolute
      background-image: url('../../../../static/image/view4/course-9.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin 0% 100%
    }
  }

</style>
