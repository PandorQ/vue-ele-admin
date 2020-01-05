import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/pages/Login'





Vue.use(VueRouter)

/** 路由规则 */
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const Router = new VueRouter({
  mode: 'history',
  routes
})

export default Router