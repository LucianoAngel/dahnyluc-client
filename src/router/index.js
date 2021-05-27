import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Principal',
    component: () => import(/* webpackChunkName: "about" */ '../components/Principal.vue')
  },
  {
    path: '/login',
    name: 'InicioSesion',
    component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue')
  },
  {
    path: '/agregar-cliente',
    name: 'AgregarCliente',
    component: () => import(/* webpackChunkName: "about" */ '../components/AgregarCliente.vue')
  },
  {
    path: '/transacciones',
    name: 'transacciones',
    component: () => import(/* webpackChunkName: "about" */ '../components/Transacciones.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
