<template>
  <div class="content" :style="fontContent">
    <p class="p1">Wow<span class="blue"> You can really dance</span><br>你这个学期拥有<span class="strong"> 13 </span>门课程</p>
    <p class="p2"><br>超过了<span class="strong"> 80% </span>的福大学子</p>
    <p class="p3"><br>中午的西三<br>是不是有你</p>
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
    let e1 = (h * 2000 / w - 3000) / 3000 / 1.2 + 1
    let e = w / 2000
    this.fontContent.fontSize = 70 * e1 * e + 'px'
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
  font-family: "viewFont"
  letter-spacing: 1px;
  width: 100%
  height: 100%
  top: 10%
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
