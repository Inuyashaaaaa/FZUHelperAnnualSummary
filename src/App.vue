<template>
  <div id="app" ref="annual">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    
  },
  mounted: function() {
//     this.$refs.annual.addEventListener('touchstart', function(e) {
//     switch (e.touches.length) {
//      case 1: alert('haha'); break;
//      case 2: alert('two'); break;
//      default: console.log("Not supported"); break;
//    }   
//  }, false);
  }
}
</script>

<style lang="stylus">
* {
  margin: 0;
  padding: 0;
  #app {

    overflow: hidden
  }
}



</style>
