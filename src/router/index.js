import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Portfolio from '@/components/portfolio'
import Personal from '@/components/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    }
  ],
  mode: 'history'
})
