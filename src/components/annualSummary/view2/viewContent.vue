<template>
  <div class="content">
    <p class="head" v-bind:style="headStyle">今天</p>
    <div v-bind:style="fontStyle">
      <p class="dayCount">是你来到福大的第<span class="strong"> {{dayCount}} </span>天</p>
      <br>
      <p class="letter">
        <span class="strong">{{year}}年{{month}}月{{date}}日</span><br>
        大概是很特别的一天<br>
        这天夜里<br>
        梦格外的美
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'viewContent',
  data: function () {
    return {
      dayCount: '333',
      year: 2020,
      month: 1,
      date: 17,
      headStyle: {
        fontSize: '',
        marginBottom: ''
      },
      fontStyle: {
        fontSize: ''
      }
    }
  },
  mounted: function () {
    let w = document.documentElement.clientWidth
    let h = document.documentElement.clientHeight
    let e1 = (h * 608 / w - 883) / 883 / 1.2 + 1
    let e = w / 608
    this.headStyle.fontSize = 26 * e * e1 + 'px'
    this.fontStyle.fontSize = 18 * e * e1 + 'px'
  }
}
</script>

<style lang="stylus" scoped>

.swiper-slide-active .head {
  animation: creep 1s
  animation-fill-mode: forwards
}

.swiper-slide-active .dayCount {
  animation: creep 1s
  animation-fill-mode: forwards
}

.swiper-slide-active .letter {
  animation: creep 1s
  animation-fill-mode: forwards
}

.content {
  font-family: "viewFont"
  letter-spacing: 2px;
  width: 100%
  height: 100%
  top: 13%
  left: 15%
  position: absolute
  color: #242864
  font-weight: 500
  .strong {
    color: #d13491
  }
  .head {
    opacity: 0
  }
  .dayCount {
    animation-delay: 0.2s
    opacity: 0
  }
  .letter {
    animation-delay: 0.4s
    opacity: 0
  }
}

@keyframes creep {
  0% {
    //filter: blur(1px)
    opacity: 0
    transform: translateX(-50px)
  }
  100% {
    //filter: blur()
    opacity: 1
    transform: translateX(0px)
  }
}

</style>
