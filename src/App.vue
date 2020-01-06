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
