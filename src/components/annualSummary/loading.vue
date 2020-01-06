<template>
  <div class="container" :style="loadingStyle">
    <loading></loading>
  </div>
</template>

<script>
import loading from './loading/loading.vue'
import querystring from 'querystring'
import axios from 'axios'
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
    
    if (/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)) {
      this.loadingStyle.height = window.innerHeight + 'px'
      try {
        jsInterface
        this.$store.dispatch('changeInApp', true)
      }
      catch(err) {
        
      }
      this.preload()
    } else {
      this.$router.push({path: 'guidance'})
      
    }

  },
  methods: {
    waitData: function () {
      let href = location.href
      let tokenString = href.split('?')[1]
      let { token, graduate } = querystring.parse(tokenString)
      this.$store.dispatch('changeToken', token)
      this.$store.dispatch('changeGraduate', graduate)
      let path = 'https://statistics.fzuhelper.w2fzu.com/api/user/' + token
      axios.get(path)
      .then(res=>{
        let data = res['data']['message']
        this.$store.dispatch('changefdzs', data['fdzs'])
        this.$store.dispatch('changekjs', data['kjs'])
        this.$store.dispatch('changedwsy', data['dwsy'])
        this.$store.dispatch('changecjcx', data['cjcx'])
        this.$store.dispatch('changeTt', data['tt'])
        this.$store.dispatch('changeTtPerc', data['tt_perc'])
        this.$store.dispatch('changeKcPerc', data['kc_perc'])
        this.$store.dispatch('changeKc', data['kc'])
        this.$store.dispatch('changeStudentId', data['student_id'])


        this.count++        
      }).catch(err => {
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
      this.total = imgs.length
      for (let img of imgs) {
        let image = new Image()
        image.src = img
        image.onerror = () => {
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
      if (val === this.total) {
        setTimeout(() => {
          this.$router.push({path: 'cover', query:{token: this.$store.state.token, graduate: this.$store.state.graduate }})
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
