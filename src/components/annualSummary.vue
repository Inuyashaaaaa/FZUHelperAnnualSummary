<template>
  <div class="view" @touchstart='handleTouchStart' ref='view'>
    <audio src="../static/music/audio.mp3" ref="music"></audio>
    <div class="return" @click="handleClick"></div>
    <div class="content" v-show="show1">点击探索</div>
    <view1 :style="viewShow" v-show="show2"></view1>
    <swiper :options="swiperOption"
    :style="swiperStyle" ref="mySwiper" v-show='!show2'>
      <swiper-slide><view2></view2></swiper-slide>
      <swiper-slide><view3></view3></swiper-slide>
      <swiper-slide><view4></view4></swiper-slide>
      <swiper-slide><view5></view5></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import view1 from '@/components/annualSummary/view1'
import view2 from '@/components/annualSummary/view2'
import view3 from '@/components/annualSummary/view3'
import view4 from '@/components/annualSummary/view4'
import view5 from '@/components/annualSummary/view5'
export default {
  name: 'annualSummary',
  components: {
    view1,
    view2,
    view3,
    view4,
    view5
  },
  data () {
    return {

      swiperOption: {
        'direction': 'vertical',
        'effect': 'fade',
        'height': window.innerHeight,
        'freeMode': false,
        'touchRatio': 0.7,
        'longSwipesRatio': 0.1,
        'threshold': 50,
        'followFinger': true,
        'autoHeight': true,
        // 'loop': true
        // 'observer': true,       // 修改swiper自己或子元素时，自动初始化swiper
        // 'observeParents': true  // 修改swiper的父元素时，自动初始化swiper
      },
      timer: null,
      viewShow: {
        height: '',
        transfromOrigin: 'center center',
        transfrom: ''
      },
      jsObj: null,
      swiperStyle: {
        height: ''
      },
      show1: true,
      show2: true
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    handleClick: function() {
      jsInterface.exit()
    },
    handleTouchStart: function() {
      if(this.show1 = true) {
        this.show1 = false
        console.log(this.$refs.view)
        // this.swiper.slideTo(3)
        this.$refs.view.classList.add('scaleBigger')
        setTimeout(() => {
          this.show2 = false
          this.$refs.music.play()
          // this.swiper.slideTo(0, 2000)
        }, 2000)

      }
    }
  },
  mounted: function () {
    this.viewShow.height = document.documentElement.clientHeight + 'px'
    // this.music = this.$refs.music
    // this.$refs.music.play()
    // this.swiperStyle.height = document.documentElement.clientHeight + 'px'
  },
  watch: {

  }
}
</script>

<style lang="stylus" scoped>


  .scaleBigger .view1 {
    animation: scaleBig1 2s forwards
  }
   @keyframes scaleBig1 {
    0% {
      transform scale(1)
      opacity 1
    }
    100% {
      transform scale(10)
      opacity 0.4
    }
  }
  .disappear {
    display : none
  }
  .content {
    font-family viewFont
    z-index 99
    position absolute
    text-align center
    top: 95%
    color #c67352
    width 100%
  }
  .swiper-slide {
    overflow: hidden
    // -webkit-overflow-scrolling: touch
    -webkit-backface-visibility: hidden;
    -webkit-backface-visibility: hidden; /*元素旋转时隐藏背面*/
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    // -webkit-perspective: 1000;
    // -moz-perspective: 1000;
    // -ms-perspective: 1000;
    // perspective: 1000;
    //-webkit-transform-style: preserve-3d; /*保留3D空间*/
  }
  .view {
    overflow:hidden
    transform: scale(1.0)
  }
  .return {
    background none
    z-index: 10
    top: 5%
    width: 7%
    height: 7%
    left: 5%
    position: fixed
    background-image: url('../../static/image/public/return.png')
    background-size: contain
    background-repeat: no-repeat
  }

</style>
