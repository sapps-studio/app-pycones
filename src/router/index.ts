import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Home from '../views/Home.vue'
import Favs from '../views/Favs.vue'
import Config from '../views/Config.vue'
import Map from '../views/Map.vue'
import Info from '../views/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/favorites',
    name: 'favs',
    component: Favs
  },
  {
    path: '/configuration',
    name: 'config',
    component: Config
  },
  {
    path: '/map',
    name: 'map',
    component: Map
  },
  {
    path: '/information',
    name: 'info',
    component: Info
  }
]

const router = new VueRouter({
  routes
})

export default router
