import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    'fdzs': 0,
    'dwsy': 0,
    'kjs': 0,
    'cjcx': 0,
    'showSwiper': false,
    'showInApp': false,
    'kc': 0,
    'kcPerc': 0,
    'tt': 0,
    'ttPerc': 0,
    'studentId': null,
    'token': null
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
    },
    changeInApp (ctx, showInApp) {
      ctx.commit('changeInApp', showInApp)
    },
    changeKc (ctx, kc) {
      ctx.commit('changeKc', kc)
    },
    changeKcPerc (ctx, kcPerc) {
      ctx.commit('changeKcPerc', kcPerc)
    },
    changeTt (ctx, tt) {
      ctx.commit('changeTt', tt)
    },
    changeTtPerc (ctx, ttPerc) {
      ctx.commit('changeTtPerc', ttPerc)
    },
    changeStudentId (ctx, studentId) {
      ctx.commit('changeStudentId', studentId)
    },
    changeToken (ctx, token) {
      ctx.commit('changeToken', token)
    },
    changeGraduate (ctx, graduate) {
      ctx.commit('changeGraduate', graduate)
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
    },
    changeInApp (state, showInApp) {
      state.showInApp = showInApp
    },
    changeKc (state, kc) {
      state.kc = kc
    },
    changeKcPerc (state, kcPerc) {
      state.kcPerc = kcPerc
    },
    changeTt (state, tt) {
      state.tt = tt
    },
    changeTtPerc (state, ttPerc) {
      state.ttPerc = ttPerc
    },
    changeStudentId (state, studentId) {
      state.studentId = studentId
    },
    changeToken (state, token) {
      state.token = token
    },
    changeGraduate (state, graduate) {
      state.graduate = graduate
    }
  }
})
