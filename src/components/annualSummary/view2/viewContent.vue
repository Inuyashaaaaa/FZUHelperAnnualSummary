<template>
  <div class="content">
    <p class="head" v-bind:style="headStyle">今天</p>
    <div v-bind:style="fontStyle">
      <p class="dayCount">是
        <span v-if="!this.$store.state.showInApp">TA</span>
        <span v-else>你</span>
        来到福大的第<span class="strong"> {{dayCount}} </span>天</p>
      <br>
      <p class="letter">
        <span class="strong">{{year}}年{{month}}月{{date}}日</span><br>
        大概是很特别的一天<br>
        这天夜里<br>
        梦格外的美
      </p>
    </div>
  </div>
</template>

<script>
import querystring from 'querystring'
export default {
  name: 'viewContent',
  data: function () {
    return {
      dayCount: '333',
      year: 2020,
      month: 1,
      date: 17,
      headStyle: {
        fontSize: '',
        marginBottom: ''
      },
      fontStyle: {
        fontSize: ''
      },
      graduate: 0
    }
  },
  methods: {
    getToNum(val) {
      if(val < 10)
        return '0' + val
      return val
    },
    getDate: function(sDate1, sDate2) {
      let dateSpan,
          tempDate,
          iDays
      sDate1 = Date.parse(sDate1)
      sDate2 = Date.parse(sDate2)
      dateSpan = sDate2 - sDate1
      dateSpan = Math.abs(dateSpan)
      iDays = Math.floor(dateSpan / (24 * 3600 * 1000))
      return iDays
    },
    getDay: function() {
      let date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      let sDate1 = year + '-' + this.getToNum(month) + '-' + this.getToNum(day)
      let studentId = this.studentId
      let index
      if(this.graduate === 1)
        index = 19 - parseInt(studentId.slice(2, 4))
      else
        index = 19 - parseInt(studentId.slice(0, 2))
      if(index < 0 || index > 6) {
        index = 0
      }
      let year1 = '20' + studentId.slice(2, 4)
      let dayArr = ['05', '06', '14', '05', '07', '04', '05']
      let sDate2 = year1 + '-' + '09-' + dayArr[index]
      return this.dayCount = this.getDate(sDate1, sDate2)
    }
  },
  computed: {
    studentId2() {
      return this.$store.state.studentId
    }
  },
  watch: {
    studentId2: {
      immediate: true,
      handler(val) {
        this.studentId = val
        this.getDay()
      }
    } 
  },
  mounted: function () {
    let href = location.href
    let graduateString = href.split('?')[1]
    let { graduate } = querystring.parse(graduateString)
    this.graduate = graduate
    let w = document.documentElement.clientWidth
    let h = document.documentElement.clientHeight
    let e1 = (h * 608 / w - 883) / 883 / 1.2 + 1
    let e = w / 608
    this.headStyle.fontSize = 26 * e * e1 + 'px'
    this.fontStyle.fontSize = 20 * e * e1 + 'px'
  }
}
</script>

<style lang="stylus" scoped>

.swiper-slide-active .head {
  animation: creep 1s
  animation-fill-mode: forwards
}

.swiper-slide-active .dayCount {
  animation: creep 1s
  animation-fill-mode: forwards
}

.swiper-slide-active .letter {
  animation: creep 1s
  animation-fill-mode: forwards
}

.content {
  font-family: "viewFont"
  letter-spacing: 2px;
  width: 100%
  height: 100%
  top: 13%
  left: 13%
  position: absolute
  color: #242864
  font-weight: 500
  .strong {
    color: #d13491
  }
  .head {
    opacity: 0
  }
  .dayCount {
    animation-delay: 0.2s
    opacity: 0
  }
  .letter {
    animation-delay: 0.4s
    opacity: 0
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
