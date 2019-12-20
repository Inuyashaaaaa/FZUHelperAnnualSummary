<template>
  <div class="content" :style="fontContent">
    <p class="p1">这学期里<br>你一共使用了<span class="strong"> {{this.$store.state.fdzs}} </span>次福大助手</p>
    <p class="p2"><br>你专注于学习<br>查询了<span class="strong"> {{this.$store.state.kjs}} </span>次空教室</p>
    <p class="p3"><br>你打开了<span class="strong"> {{this.$store.state.dwsy}} </span>次大物实验<br>在实验的海洋里游玩</p>
    <p class="p4" v-if="islearningman"><br>你时刻关心着你的学业情况<br>查询了<span class="strong"> {{this.$store.state.cjcx}} </span>次成绩</p>
    <p class="p4" v-else-if="isbuddle"><br>你是一个佛系淡然的人</p>
    <p class="p4" v-else><br>你是一个神秘的人</p>
  </div>
</template>

<script>
export default {
  name: 'viewContent',
  data: function () {
    return {
      fontContent: {
        fontSize: ''
      }
    }
  },
  mounted: function () {
    let w = document.documentElement.clientWidth
    let h = document.documentElement.clientHeight
    let e1 = (h * 439 / w - 796) / 796 / 1.2 + 1
    let e = w / 439
    this.fontContent.fontSize = 16 * e1 * e + 'px'
  },
  computed: {
    islearningman: function () {
      return this.$store.state.cjcx > 10 && this.$store.state.kjs > 5
    },
    isbuddle: function () {
      return this.$store.state.kjs <= 5 && this.$store.state.cjcx <= 10
    }
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

.swiper-slide-active .p4 {
  animation: creep 1s
  animation-fill-mode: forwards
}

.swiper-slide-active .p5 {
  animation: creep 1s
  animation-fill-mode: forwards
}

.content {
  font-family: "viewFont"
  letter-spacing: 1px;
  width: 100%
  height: 100%
  top: 60%
  left: 10%
  position: absolute
  color: #242864
  .strong {
    color: #d13491
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
  .p4 {
    opacity : 0
    animation-delay: 0.6s
  }
  .p5 {
    opacity : 0
    animation-delay: 0.8s
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
