import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'registro',
    component: () => import(/* webpackChunkName: "registro" */ '../views/Registro.vue')
  },
  {
    path: '/proceso',
    name: 'proceso',
    component: () => import(/* webpackChunkName: "proceso" */ '../views/Proceso.vue')
  },
  {
    path: '/proceso2',
    name: 'proceso2',
    component: () => import(/* webpackChunkName: "proceso2" */ '../views/Proceso2.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
