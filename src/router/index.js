import Vue from 'vue'
import Router from 'vue-router'
import annualSummary from '@/components/annualSummary'
import loading from '@/components/annualSummary/loading'
import guidance from '@/components/annualSummary/guidance'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.baseUrl,
  routes: [
    {
      path: '/cover',
      name: 'annualSummary',
      component: annualSummary
    },
    {
      path: '/',
      name: 'loading',
      component: loading
    },
    {
      path: '/guidance',
      name: 'guidance',
      component: guidance
    }
  ]
})
// router.beforeEach((to, from, next) =>{
//       if (to.path !== global.location.pathname) {
//           location.assign(to.fullPath)
//       }
//       next() 
// }) 


export default router
