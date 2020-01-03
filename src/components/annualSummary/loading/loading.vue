<template>
  <div class='container'>
    <div class="return"></div>
    <div class="rotate"></div>
    <div class="box"></div>
    <div class="rattan"></div>
    <div class="loading"></div>
    <div class="point1"></div>
    <div class="point2"></div>
    <div class="point3"></div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data: function() {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  width 100%
  height 100%
  .box {
    z-index: 1
    width  20%
    height 20%
    left 40%
    top: 43%
    position: absolute
    background-image: url('../../../../static/image/loading/box.png')
    background-size: contain
    background-repeat: no-repeat
  }
  .rattan {
    z-index: 0
    width  20%
    height 20%
    left 45%
    top: 25%
    position: absolute
    background-image: url('../../../../static/image/loading/rattan.png')
    background-size: contain
    background-repeat: no-repeat
  }
  .loading {
    z-index: 0
    width  25%
    height 25%
    left 35%
    top: 60%
    position: absolute
    background-image: url('../../../../static/image/loading/loading.png')
    background-size: contain
    background-repeat: no-repeat
  }
  .point1 {
    z-index: 0
    width  1.3%
    height 1.3%
    left 59%
    top: 62%
    position: absolute
    background-image: url('../../../../static/image/loading/point.png')
    background-size: contain
    background-repeat: no-repeat
  }
  .point2 {
    z-index: 0
    width  1.3%
    height 1.3%
    left 61%
    top: 62%
    position: absolute
    background-image: url('../../../../static/image/loading/point.png')
    background-size: contain
    background-repeat: no-repeat
  }
  .point3 {
    z-index: 0
    width  1.3%
    height 1.3%
    left 63%
    top: 62%
    position: absolute
    background-image: url('../../../../static/image/loading/point.png')
    background-size: contain
    background-repeat: no-repeat
  }
  .rotate {
    z-index: 0
    width  35%
    height 35%
    left 33%
    top: 39%
    position: absolute
    background-image: url('../../../../static/image/loading/rotate.png')
    background-size: contain
    background-repeat: no-repeat
    transform-origin center 25%
  }
}

.box {
  animation scaleBigAndGoUpAndDown 2.5s infinite
}

.rattan {
  animation UpAndDown 2.5s infinite
}

.point1 {
  animation point1Animation 2s infinite
}

.point2 {
  animation point2Animation 2s infinite
}

.point3 {
  animation point3Animation 2s infinite
}

.rotate {
  animation rotateFlower 2.5s infinite
}

@keyframes rotateFlower {
  0% {
    transform rotate(0deg)
  }
  100% {
    transform rotate(360deg)
  }
}

@keyframes point1Animation {
  0% {
    opacity 0
  }
  33% {
    opacity 1
  }
  100% {
    opacity 1
  }
}

@keyframes point2Animation {
  0% {
    opacity 0
  }
  66% {
    opacity 1
  }
  100% {
    opacity 1
  }
}

@keyframes point3Animation {
  0% {
    opacity 0
  }
  100% {
    opacity 1
  }
}



@keyframes UpAndDown {
  0% {
    transform scale(1.00) translateY(1px)
  }
  50% {
    transform scale(1.00) translateY(-1px)
  }
  100% {
    transform scale(1.00) translateY(1px)
  }
}

@keyframes scaleBigAndGoUpAndDown {
  0% {
    transform scale(1.00) translateY(1px)
  }
  50% {
    transform scale(1.02) translateY(-1px)
  }
  100% {
    transform scale(1.00) translateY(1px)
  }
}

</style>
