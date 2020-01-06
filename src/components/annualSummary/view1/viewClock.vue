<template>
  <div class="clock" v-bind:style="clockStyle">
    <div class="min-point" v-bind:style="minPointStyle">
    </div>
    <div class="hour-point" v-bind:style="hourPointStyle">
    </div>
  </div>
</template>

<script>
export default {
  name: 'viewClock',
  data: function () {
    return {
      clockStyle: {
        width: '',
        height: '',
        top: '',
        left: '',
        transform: ''
      },
      minPointStyle: {
        width: '',
        height: '',
        top: '',
        left: '',
        transformOrigin: ''
      },
      hourPointStyle: {
        width: '',
        height: '',
        top: '',
        left: '',
        transformOrigin: ''
      }
    }
  },
  mounted: function () {
    let w = document.documentElement.clientWidth
    let h = document.documentElement.clientHeight
    let e = (h * 2 / w - 3) / 3 + 1
    this.clockStyle.transform = 'translateX(-' + (e - 1) * w / 2 + 'px)'
    this.clockStyle.width = 0.38 * w * e + 'px'
    this.clockStyle.height = 0.41 * h + 'px'
    this.clockStyle.left = 0.1 * w * e + 'px'
    this.clockStyle.top = 0.02 * h + 'px'
    this.minPointStyle.width = 0.25 * parseFloat(this.clockStyle.width) + 'px'
    this.minPointStyle.height = 0.25 * parseFloat(this.clockStyle.height) + 'px'
    this.minPointStyle.top = 0.35 * parseFloat(this.clockStyle.height) + 'px'
    this.minPointStyle.left = 0.48 * parseFloat(this.clockStyle.width) + 'px'
    this.minPointStyle.transformOrigin = -0.15 * parseFloat(this.minPointStyle.width) + 'px 0px'
    this.hourPointStyle.width = 0.20 * parseFloat(this.clockStyle.width) + 'px'
    this.hourPointStyle.height = 0.17 * parseFloat(this.clockStyle.height) + 'px'
    this.hourPointStyle.top = 0.20 * parseFloat(this.clockStyle.height) + 'px'
    this.hourPointStyle.left = 0.43 * parseFloat(this.clockStyle.width) + 'px'
    this.hourPointStyle.transformOrigin = 0.11 * parseFloat(this.hourPointStyle.width) + 'px ' +
    0.85 * parseFloat(this.hourPointStyle.height) + 'px'
  }
}
</script>

<style lang="stylus" scoped>
/* 根据2000 * 3000 设置*/

.min-point {
  animation: pointRotate 15s infinite linear
}

.hour-point {
  animation: pointRotate 180s infinite linear
}
@keyframes pointRotate {
  0% {
  transform: rotate(0deg) scale(1)
  }
  100% {
  transform: rotate(360deg) scale(1)
  }
}

.clock {
    z-index: 1
    position: absolute
    background-image: url('../../../../static/image/view1/clock.png')
    background-size: contain
    background-repeat: no-repeat
    .min-point {
        z-index: 3
        position: absolute
        background-image: url('../../../../static/image/view1/min-point.png')
        background-size: contain
        background-repeat: no-repeat
    }
    .hour-point {
        z-index: 2
        position: absolute
        background-image: url('../../../../static/image/view1/hour-point.png')
        background-size: contain
        background-repeat: no-repeat
    }
}
</style>
