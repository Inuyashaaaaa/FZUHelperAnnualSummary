import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    'fdzs': 0,
    'dwsy': 0,
    'kjs': 0,
    'cjcx': 0,
    'showSwiper': false
  },
  actions: {
    changefdzs (ctx, fdzs) {
      ctx.commit('changefdzs', fdzs)
    },
    changedwsy (ctx, dwsy) {
      ctx.commit('changedwsy', dwsy)
    },
    changekjs (ctx, kjs) {
      ctx.commit('changekjs', kjs)
    },
    changecjcx (ctx, cjcx) {
      ctx.commit('changecjcx', cjcx)
    },
    changeShow (ctx, showSwiper) {
      ctx.commit('changeShow', showSwiper)
    }
  },
  mutations: {
    changefdzs (state, fdzs) {
      state.fdzs = fdzs
    },
    changedwsy (state, dwsy) {
      state.dwsy = dwsy
    },
    changekjs (state, kjs) {
      state.kjs = kjs
    },
    changecjcx (state, cjcx) {
      state.cjcx = cjcx
    },
    changeShow (state, showSwiper) {
      state.showSwiper = showSwiper
    }
  }
})
