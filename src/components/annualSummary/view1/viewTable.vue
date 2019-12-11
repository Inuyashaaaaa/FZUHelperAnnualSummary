<template>
  <div class="container" v-bind:style="viewStyle">
    <div class="viewTable" v-bind:style="tableStyle">

    </div>
    <div class="leaf1" v-bind:style="leaf1Style">

    </div>
    <div class="leaf2" v-bind:style="leaf2Style">

    </div>
    <div class="rattan1" v-bind:style="rattan1Style">

    </div>
    <div class="rattan2" v-bind:style="rattan2Style">

    </div>
    <div class="flower1" v-bind:style="flower1Style">

    </div>
    <div class="flower2" v-bind:style="flower2Style">

    </div>
    <div class="flower3" v-bind:style="flower3Style">

    </div>
    <div class="flower4" v-bind:style="flower4Style">

    </div>
    <div class="flower5" v-bind:style="flower5Style">

    </div>
    <div class="rabbit" v-bind:style="rabbitStyle">

    </div>
  </div>
</template>

<script>
export default {
  name: 'viewTable',
  data: function () {
    return {
      viewStyle: {
        transform: ''
      },
      tableStyle: {
        bottom: '',
        width: '',
        height: ''
      },
      leaf1Style: {
        top: '',
        left: '',
        width: '',
        height: ''
      },
      leaf2Style: {
        width: '',
        height: '',
        left: '',
        top: ''
      },
      rattan1Style: {
        top: '',
        left: '',
        width: '',
        height: ''
      },
      rattan2Style: {
        top: '',
        left: '',
        width: '',
        height: ''
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
      flower3Style: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      flower4Style: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      flower5Style: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      rabbitStyle: {

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
    let e = (h * 2 / w - 3) / 3 + 1
    w *= e
    this.viewStyle.transform = 'translateX(-' + (e - 1) * w / 2 + 'px)'
    this.tableStyle.bottom = -0.25 * h + 'px'
    this.tableStyle.width = 0.9 * w + 'px'
    this.tableStyle.height = h * 0.9 + 'px'
    //     width: 7%
    // height: 7%
    // top: 53%
    // left: 23%
    this.renderDivStyle(this.leaf1Style, [0.5, 0.5, 0.7, 0.405], h, w)
    this.renderDivStyle(this.leaf2Style, [0.22, 0.22, 0.57, 0.55], h, w)
    this.renderDivStyle(this.rattan1Style, [0.26, 0.26, 0.69, 0.55], h, w)
    this.renderDivStyle(this.rattan2Style, [0.08, 0.08, 0.54, 0.56], h, w)
    this.renderDivStyle(this.flower1Style, [0.10, 0.10, 0.65, 0.735], h, w)
    this.renderDivStyle(this.flower2Style, [0.11, 0.11, 0.687, 0.60], h, w)
    this.renderDivStyle(this.flower3Style, [0.08, 0.08, 0.615, 0.61], h, w)
    this.renderDivStyle(this.flower4Style, [0.08, 0.08, 0.75, 0.63], h, w)
    this.renderDivStyle(this.flower5Style, [0.09, 0.09, 0.83, 0.665], h, w)
    this.renderDivStyle(this.rabbitStyle, [0.07, 0.07, 0.53, 0.23], h, w)
  }
}
</script>

<style lang="stylus" scoped>
 .leaf1{
   animation: jiggle 8s infinite
}

 .leaf2 {
  animation: jiggle 8s infinite
}

 .rattan1{
   animation: jiggle 8s infinite
}

 .rattan2{
   animation: jiggle 8s infinite
}

 .flower1 {
  animation: flowerTopAndBot 8s infinite
}

 .flower2 {
  animation: flowerRatete2 8s infinite
}

 .flower3 {
  animation: jiggle 8s infinite
}

 .flower4{
  animation: jiggle 8s infinite
}

 .flower5 {
  animation: flowerRatete1 8s infinite
}

 .rabbit {
  animation: slideInAndOut 16s infinite
}

.container {
  width: 100%
  height: 100%
  .viewTable {
    z-index: 1
    position: absolute
    background-image: url('../../../../static/image/view1/table.png')
    background-size: contain
    background-repeat: no-repeat
  }
  .leaf1 {
    z-index: -1
    position: absolute
    background-image: url('../../../../static/image/view1/leaf1.png')
    background-size: contain
    background-repeat: no-repeat
    transform-origin: 0 0
  }
  .leaf2 {
    z-index: -1
    position: absolute
    background-image: url('../../../../static/image/view1/leaf2.png')
    background-size: contain
    background-repeat: no-repeat
    transform-origin: 0 0
  }
  .rattan1 {
    z-index: 3
    position: absolute
    background-image: url('../../../../static/image/view1/rattan1.png')
    background-size: contain
    background-repeat: no-repeat
    transform-origin: 0 0
  }
  .rattan2 {
    z-index: 3
    position: absolute
    background-image: url('../../../../static/image/view1/rattan2.png')
    background-size: contain
    background-repeat: no-repeat
    transform-origin: 0 0
  }
  .flower1 {
    z-index: 2
    position: absolute
    background-image: url('../../../../static/image/view1/flower1.png')
    background-size: contain
    background-repeat: no-repeat
  }
  .flower2 {
    z-index: 2
    position: absolute
    background-image: url('../../../../static/image/view1/flower2.png')
    background-size: contain
    background-repeat: no-repeat
    transform-origin: -10% 100%
  }
  .flower3 {
    z-index: 2
    position: absolute
    background-image: url('../../../../static/image/view1/flower3.png')
    background-size: contain
    background-repeat: no-repeat
    transform-origin: 0 0
  }
  .flower4 {
    z-index: 2
    position: absolute
    background-image: url('../../../../static/image/view1/flower4.png')
    background-size: contain
    background-repeat: no-repeat
    transform-origin: 0 0
  }
  .flower5 {
    z-index: 2
    position: absolute
    background-image: url('../../../../static/image/view1/flower5.png')
    background-size: contain
    background-repeat: no-repeat
    transform-origin: 0 100%
  }

  .rabbit{
    z-index: 2
    position: absolute
    background-image: url('../../../../static/image/view1/rabbit.png')
    background-size: contain
    background-repeat: no-repeat
  }
  @keyframes jiggle {
    0% {
      transform: rotateZ(0deg)
    }
    50% {
      transform: rotateZ(2deg)
    }
    100% {
      transform: rotateZ(0deg)
    }
  }
  @keyframes flowerRatete1 {
    0% {
      transform: rotate(10deg)
    }
    25% {
      transform: ratate(0deg)
    }
    50% {
      transform: rotate(-15deg)
    }
    75% {
      transform: ratate(0deg)
    }
    100% {
      transform: rotate(10deg)
    }
  }
  @keyframes flowerRatete2 {
    0% {
      transform: rotate(10deg)
    }
    25% {
      transform: ratate(0deg)
    }
    50% {
      transform: rotate(-10deg)
    }
    75% {
      transform: ratate(0deg)
    }
    100% {
      transform: rotate(10deg)
    }
  }
  @keyframes flowerTopAndBot {
    0% {
      transform: translateY(0)
    }
    50% {
      transform: translateY(10%)
    }
    100% {
      transform: translateY(0)
    }
  }
  @keyframes slideInAndOut {
    0% {
      transform: translateX(0) translateY(0) rotate(0)
    }
    30% {
      transform: translateX(100%) translateY(100%) rotate(0)
    }
    50% {
      transform: translateX(100%) translateY(100%) rotate(180deg)
    }
    80% {
      transform: translateX(0) translateY(0) rotate(180deg)
    }
    100% {
      transform: translateX(0) translateY(0) rotate(0)
    }
  }
}

</style>
