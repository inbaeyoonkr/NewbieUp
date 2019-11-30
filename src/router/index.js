import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage'
import RoadMap from '../pages/RoadMap'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'MainPage', component: MainPage },
    { path: '/roadmap', name: 'RoadMap', component: RoadMap }
  ]
})
