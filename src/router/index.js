import Vue from 'vue'
import Router from 'vue-router'
import annualSummary from '@/components/annualSummary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'annualSummary',
      component: annualSummary
    }
  ]
})
