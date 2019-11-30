import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage'
import FrontEnd from '../pages/FrontEnd'
import BackEnd from '../pages/BackEnd'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'MainPage', component: MainPage },
    { path: '/front', name: 'FrontEnd', component: FrontEnd },
    { path: '/back', name: 'BackEnd', component: BackEnd }
  ]
})
