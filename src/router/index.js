import Vue from 'vue'
import Router from 'vue-router'
import MusicCollection from '@/components/MusicCollection'
import MusicStatistic from '@/components/MusicStatistic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MusicCollection',
      component: MusicCollection
    },
    {
      path: '/statistic',
      name: 'MusicStatistic',
      component: MusicStatistic
    }
  ]
})
