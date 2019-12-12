<template>
  <div class="viewSwing">
    <div class="person">
      <div class="feet1"></div>
      <div class="feet2"></div>
      <div class="head"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'viewSwing',
  data: function () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
// .swiper-slide-active .person{
//   animation: personSwing 8s infinite cubic-bezier(.455,.03,.515,.955)
// }

// .swiper-slide-active .feet1 {
//   animation: legSwing1 8s infinite ease-in-out
// }

// .swiper-slide-active .feet2 {
//   animation: legSwing2 8s infinite ease
// }

.viewSwing {
  position: absolute
  top: 0%
  left: 0%
  width: 100%
  height: 100%
  .person {
    z-index: 10
    position: absolute
    width: 22%
    height: 44%
    left: 40%
    top: -1%
    background-image: url('../../../../static/image/view3/person-0.png')
    background-size: contain
    background-repeat: no-repeat
    transform-origin: 30% -20%
    .feet1 {
      z-index: 5
      position: absolute
      width: 100%
      height: 10%
      left: -84%
      top: 86.1%
      background-image: url('../../../../static/image/view3/feet-5.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin: 95% 10%
    }
    .feet2 {
      z-index: 6
      position: absolute
      width: 63%
      height: 25%
      left: -39%
      top: 86.5%
      background-image: url('../../../../static/image/view3/feet-6.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin: 80% 12.5%
    }
    .head {
      z-index: 0
      position: absolute
      width: 63%
      height: 25%
      left: 33%
      top: 48%
      background-image: url('../../../../static/image/view3/head-7.png')
      background-size: contain
      background-repeat: no-repeat
      transform-origin: 80% 12.5%
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
      transform: rotate(52.2deg);
  }
  50% {
      transform: rotate(-34.8deg);
  }
  75% {
      transform: rotate(52.2deg);
  }
  100% {
      transform: rotate(-34.8deg);
}
}

@keyframes legSwing2 {
  0% {
    transform: rotate(64.8deg);
  }
  25% {
      transform: rotate(-43.2deg);
  }
  50% {
      transform: rotate(64.8deg);
  }
  75% {
      transform: rotate(-43.2deg);
  }
  100% {
      transform: rotate(64.8deg);
  }
}
</style>
