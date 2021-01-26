import Vue from 'vue'
import VueRouter from 'vue-router'

import page1 from '../sites/page1.vue'
import Yesorno from '../sites/page2.vue'

Vue.use(VueRouter)

const routes = [
  {
    component: page1,
    name: 'whatever',
    path: '/'
  },
  {
    component: Yesorno,
    name: 'whaateääver',
    path: '/page2'
   
  }

]

const router = new VueRouter({
  routes
})

export default router