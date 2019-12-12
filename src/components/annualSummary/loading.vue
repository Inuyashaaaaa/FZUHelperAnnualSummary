<template>
  <div class="page-container" style="text-align: center;">
    <div id="loading-panel">
      <h1><strong>Loading...</strong></h1>
      <h2><strong>{{percent}}</strong></h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      count: 0,
      percent: '',
      total: -1
    }
  },
  mounted: function () {
    this.preload()
  },
  methods: {
    waitData: function () {
      const that = this
      axios.get('/api/user/221801107')
        .then((res) => {
          that.count++
          let data = res.data.message
          this.$store.dispatch('changefdzs', data.fdzs)
          this.$store.dispatch('changedwsy', data.dwsy)
          this.$store.dispatch('changekjs', data.kjs)
          this.$store.dispatch('changecjcx', data.cjcx)
        })
        .catch((err) => {
          console.log(err)
        })
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
        console.log('?')
        image.onerror = () => {
          console.log('error')
        }
        image.onload = () => {
          console.log('load')
          this.count++
          // 计算图片加载的百分数，绑定到percent变量
          let percentNum = Math.floor(this.count / this.total * 100)
          this.percent = `${percentNum}%`
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
        }, 1000)
      }
    }
  }
}
</script>
<style>

</style>
