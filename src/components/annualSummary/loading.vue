<template>
  <div class="container" :style="loadingStyle">
    <loading></loading>
  </div>
</template>

<script>
import loading from './loading/loading.vue'
export default {
  data () {
    return {
      count: 0,
      total: -1,
      loadingStyle: {
        height: ''
      }
    }
  },
  components: {
    loading
  },
  mounted: function () {
    this.loadingStyle.height = window.innerHeight + 'px'
    // console.log(window.innerHeight)
    window.onGetData = this.onGetData
    jsInterface.getData()
    this.preload()
  },
  methods: {
    onGetData: function (userInfo) {
      // alert(userInfo)
      alert('傻逼')
      this.count++
      return '123'
    },
    waitData: function () {
      // alert('123')
    },
    loadImg: function () {
      let imgs = [
        'static/image/view1/clock.png',
        'static/image/view1/flower1.png',
        'static/image/view1/flower2.png',
        'static/image/view1/flower3.png',
        'static/image/view1/flower4.png',
        'static/image/view1/flower5.png',
        'static/image/view1/hour-point.png',
        'static/image/view1/leaf1.png',
        'static/image/view1/leaf2.png',
        'static/image/view1/min-point.png',
        'static/image/view1/rabbit.png',
        'static/image/view1/rattan1.png',
        'static/image/view1/rattan2.png',
        'static/image/view1/table.png',
        'static/image/view1/view1.png',
        'static/image/view1/view1Letter.png',
        'static/image/view2/arm-9.png',
        'static/image/view2/flower-4.png',
        'static/image/view2/flower-5.png',
        'static/image/view2/leaf-2.png',
        'static/image/view2/person-8.png',
        'static/image/view2/rabbit-1.png',
        'static/image/view2/rattan-6.png',
        'static/image/view2/rattan-7.png',
        'static/image/view2/vegtation-3.png',
        'static/image/view2/view2-0.png',
        'static/image/view2/view2-1.png'
      ]
      this.total = imgs.length + 1
      for (let img of imgs) {
        let image = new Image()
        image.src = img
        image.onerror = () => {
          console.log('error')
        }
        image.onload = () => {
          this.count++

        }
      }
    },
    preload: function () {
      this.loadImg()
      this.waitData()
    }
  },

  watch: {
    count: function (val) {
      // console.log(val)
      if (val === this.total) {
        // 图片加载完成后跳转页面
        setTimeout(() => {
          this.$router.push({path: 'cover'})
        }, 500)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container {
    width: 100%
    background-image: url('../../../static/image/view1/view1.png')
    background-size cover
    position relative
  }
</style>
