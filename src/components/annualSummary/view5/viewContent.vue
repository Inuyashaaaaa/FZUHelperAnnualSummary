<template>
  <div class="content" :style="fontContent">
    <p class="p1">
      这个学期
      <br><span v-if="!this.$store.state.showInApp">TA</span><span v-else>你</span>的秃头值是
      <span class="strong"> {{this.$store.state.tt}}ti</span>
    </p>
    <p class="p2"><br>打败了<span class="strong"> {{(this.$store.state.ttPerc * 100).toFixed(2)}}% </span>的人</p>
    <p class="p3" v-if="this.$store.state.ttPerc < 0.3"><br>秃头与<span v-if="!this.$store.state.showInApp">TA</span><span v-else>你</span>无缘</p>
    <p class="p3" v-else-if="this.$store.state.ttPerc < 0.7"><br>小心秃头,注意保养</p>
    <p class="p3" v-else><br>在秃头的道路上越走越远</p>
  </div>
</template>

<script>
export default {
  name: 'viewContent',
  data: function () {
    return {
      fontContent: {
        fontSize: '',
        lineHeight: ''
      }
    }
  },
  methods: {
  
  },
  mounted: function () {
    let w = document.documentElement.clientWidth
    let h = document.documentElement.clientHeight
    let e1 = (h * 2000 / w - 3000) / 3000 / 1.2 + 1
    let e = w / 2000
    this.fontContent.fontSize = 70 * e1 * e + 'px'
    this.fontContent.lineHeight = 70 * e1 * e * 1.3 + 'px'
  }
}
</script>

<style lang="stylus" scoped>

.swiper-slide-active .p1 {
  animation: creep 1s
  animation-fill-mode: forwards
}

.swiper-slide-active .p2 {
  animation: creep 1s
  animation-fill-mode: forwards
}

.swiper-slide-active .p3 {
  animation: creep 1s
  animation-fill-mode: forwards
}

.content {
  z-index: 100
  font-family: "viewFont"
  letter-spacing: 1px;
  width: 100%
  height: 40%
  top: 13%
  left: 10%
  position: absolute
  color: #242864
  .strong {
    color: #d13491
  }
  .blue {
    color: #55b6e8
  }
  .p1 {
    opacity : 0
  }
  .p2 {
    opacity : 0
    animation-delay: 0.2s
  }
  .p3 {
    opacity : 0
    animation-delay: 0.4s
  }
}

@keyframes creep {
  0% {
    opacity: 0
    transform: translateX(-50px)
  }
  100% {
    opacity: 1
    transform: translateX(0px)
  }
}

</style>
