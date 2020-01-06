<template>
  <div class="view" @touchstart='handleTouchStart' ref='view'>
    <audio src="static/music/audio.mp3" ref="music" loop></audio>
    <div class="return" v-show="this.$store.state.showInApp" :style="returnStyle" @click="handleClick"></div>
    <div class="content" :style="fontStyle" v-show="show1">点击探索</div>
    <view1 :style="viewShow" v-show="show2"></view1>
    <swiper :options="swiperOption"
    :style="swiperStyle" ref="mySwiper" v-show='!show2'>
      <div class="next-btn"></div>
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
import querystring from 'querystring'
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
        'autoHeight': true
        // 'loop': true
        // 'observer': true,       // 修改swiper自己或子元素时，自动初始化swiper
        // 'observeParents': true  // 修改swiper的父元素时，自动初始化swiper
      },
      timer: null,
      viewShow: {
        height: '',
        transformOrigin: '40% 60%',
        transfrom: ''
      },
      jsObj: null,
      swiperStyle: {
        height: ''
      },
      show1: true,
      show2: true,
      returnStyle: {
        width: '',
        height: '',
        top: '',
        left: ''
      },
      fontStyle: {
        fontSize: ''
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    handleClick: function () {
      jsInterface.exit()
    },
    renderDivStyle: function (dom, array, h, w) {
      dom.width = w * array[0] + 'px'
      dom.height = h * array[1] + 'px'
      dom.top = h * array[2] + 'px'
      dom.left = w * array[3] + 'px'
    },
    handleTouchStart: function () {
      if (this.show1 === true) {
        this.show1 = false
        // this.swiper.slideTo(3)
        this.$refs.view.classList.add('scaleBigger')
        setTimeout(() => {
          this.show2 = false
          this.$refs.music.play()
          // this.swiper.slideTo(0, 2000)
        }, 1500)
      }
    }
  },
  mounted: function () {
    if(this.$store.state.studentId == null) {
      let href = location.href
      let tokenString = href.split('?')[1]
      let { token, graduate } = querystring.parse(tokenString)
      this.$router.push({path: '/', query: {token, graduate}})
      //window.location.href = window.location.protocol + '//' + window.location.host + '/' + 
    }
      
    
    this.$refs.music.load()
    let w = document.documentElement.clientWidth
    let h = document.documentElement.clientHeight
    let e = (h * 2 / w - 3) / 3 + 1
    let e1 = (h * 2000 / w - 3000) / 3000 / 1.2 + 1
    let e2 = w / 2000
    w *= e
    this.viewShow.height = document.documentElement.clientHeight + 'px'
    this.renderDivStyle(this.returnStyle, [0.07, 0.07, 0.05, 0.05], h, w)
    this.fontStyle.fontSize = 70 * e1 * e2 + 'px'
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
    animation: scaleBig1 1.5s forwards ease-in
  }
   @keyframes scaleBig1 {
    0% {
      transform scale(1)
      opacity 1
    }
    100% {
      transform scale(10)
      opacity 0
    }
  }
  // .scaleBigger .swiper-container {
  //   animation: opacityChange 1.5s forwards ease-in
  // }
  //  @keyframes opacityChange {
  //   0% {
  //     opacity 0
  //   }
  //   100% {
  //     transform scale(10)
  //     opacity 1
  //   }
  // }
  .disappear {
    display : none
  }
  .content {
    font-family viewFont
    z-index 99
    position absolute
    text-align center
    top: 90%
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
    z-index: 1000
    position: fixed
    background-image: url('../../static/image/public/return.png')
    background-size: contain
    background-repeat: no-repeat
  }
  .next-btn {
    background none
    z-index: 10
    top: 92%
    width: 8%
    height: 8%
    left: 46%
    position: fixed
    background-image: url('../../static/image/public/next.png')
    background-size: contain
    background-repeat: no-repeat
  }
  .next-btn {
    animation btnShake 1.5s infinite
  }
  @keyframes btnShake {
    0% {
      transform translateY(0)
    }
    100% {
      transform translateY(30%)
    }
  }

  .content {
    font-size: 80px
  }

</style>
