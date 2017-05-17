import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import ShowGmap from '@/components/ShowGmap'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: Main
    }
  ]
})
