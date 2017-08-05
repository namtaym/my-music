import Vue from 'vue'
import Router from 'vue-router'
import MusicCollection from '@/components/MusicCollection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MusicCollection',
      component: MusicCollection
    }
  ]
})
