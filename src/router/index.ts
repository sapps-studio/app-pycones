import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Favs from '../views/Favs.vue'
import Config from '../views/Config.vue'
import Map from '../views/Map.vue'
import Info from '../views/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/favorites',
    name: 'favs'
  },
  {
    path: '/configuration',
    name: 'config'
  },
  {
    path: '/map',
    name: 'map'
  },
  {
    path: '/information',
    name: 'info'
  }
]

const router = new VueRouter({
  routes
})

export default router
