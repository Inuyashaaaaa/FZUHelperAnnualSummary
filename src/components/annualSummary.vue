<template>
  <div v-show='show'>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><view1></view1></swiper-slide>
      <swiper-slide><view2></view2></swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
    </swiper>
  </div>
</template>

<script>
import view1 from '@/components/annualSummary/view1'
import view2 from '@/components/annualSummary/view2'
export default {
  name: 'annualSummary',
  components: {
    view1,
    view2
  },
  data () {
    return {
      swiperOption: {
        'direction': 'vertical',
        'effect': 'fade',
        'height': window.innerHeight,
        'freeMode': false,
        'touchRatio': 0.5,
        'longSwipesRatio': 0.1,
        'threshold': 50,
        'observer': true, // 修改swiper自己或子元素时，自动初始化swiper
        'observeParents': true, // 修改swiper的父元素时，自动初始化swiper
        'virtual': true,
        'lazy': {
          'loadPrevNext': true
        }
      },
      show: false,
      timer: null
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted: function () {
    const that = this
    that.timer = setInterval(function () {
      console.log(document.readyState)
      if (document.readyState === 'complete') {
        that.show = true
        clearInterval(that.timer)
      }
    }, 1000)
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-slide {
    overflow: hidden
    -webkit-overflow-scrolling: touch
    -webkit-backface-visibility: hidden;
    -webkit-backface-visibility: hidden; /*元素旋转时隐藏背面*/
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000;
    //-webkit-transform-style: preserve-3d; /*保留3D空间*/

  }
</style>
