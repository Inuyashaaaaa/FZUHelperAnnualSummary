<template>
  <div>
    <div class="content" v-if="!this.showInComputer">
        <div class="open">
          <span>如果没有自动打开链接，可以点击右上角在浏览器中打开</span>
        </div>
        <img src="static/image/guidance/arrows.png" width="30%" height="30%">
    </div>
    <div class="content" v-else>
      烦请在手机浏览器或福大助手打开此页面
    </div>
    <iframe src="https://fzuhelper.w2fzu.com/" scrolling="no" frameborder="0" :style="iframeStyle"></iframe>
  </div>
</template>

<script>
export default {
  name: 'guidance',
  data: function() {
    return {
      iframeStyle: {
        height: '',
        width: ''
      },
      showInComputer: false
    }
  },
  mounted: function() {
    let h = document.documentElement.clientHeight
    let w = document.documentElement.clientWidth
    this.iframeStyle.height = h + 'px'
    this.iframeStyle.width = w + 'px'
    if (/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)) {
      window.location.href = `fzuhelper://callback/annual`
    }
    else {
      this.showInComputer = true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content {
    background rgba(0, 0, 0, 0.1)
    display flex
    position absolute
    margin: 5% 0%
    padding: 10%
    word-break break-all
    justify-content space-between
  }
  .open {
    text-indent 2em
    width 100%
    padding 0% 5%
  }
</style>