import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import Home from '@/views/Home.vue'
import Favs from '@/views/Favs.vue'
import Map from '@/views/Map.vue'
import Info from '@/views/Info.vue'
import Config from '@/views/Config.vue'
import Event from '@/views/Event.vue'
import DayDetailed from '@/views/DayDetailed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/favourites',
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
  },
  {
    path: '/event',
    name: 'event',
    component: Event
  },
  {
    path: '/day-detailed',
    name: 'dayDetailed',
    component: DayDetailed
  }
]

const router = new VueRouter({
  routes
})

export default router
