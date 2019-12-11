<template>
  <div class="container">
    <div class="flower">

    </div>
  </div>
</template>

<script>
export default {
  name: 'viewFlower'
}
</script>

<style lang="stylus" scoped>

//  .flower {
//   animation: windFlower 100s linear
//   animation-fill-mode: forwards;
// }

  .container {
    position: relative
    width: 100%
    height: 100%
      .flower {
        position: absolute
        width: 100%
        height: 100%
        background-image: url('../../../../static/image/view2/view2-1.png')
        background-size: contain
      }
  }

  @keyframes windFlower {
      0% {
          transform: translateY(-30%)
      }
      100% {
          transform: translateY(100%)
      }
  }
</style>
