import Vue from 'vue'
import Router from 'vue-router'
import annualSummary from '@/components/annualSummary'
import loading from '@/components/annualSummary/loading'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
