<<<<<<< Updated upstream
import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage'
import FrontEnd from '../pages/FrontEnd'
import BackEnd from '../pages/BackEnd'
=======
import Vue from "vue";
import Router from "vue-router";
import MainPage from "../pages/MainPage";
>>>>>>> Stashed changes

Vue.use(Router);

export default new Router({
<<<<<<< Updated upstream
  routes: [
    { path: '/', name: 'MainPage', component: MainPage },
    { path: '/front', name: 'FrontEnd', component: FrontEnd },
    { path: '/back', name: 'BackEnd', component: BackEnd }
  ]
})
=======
  routes: [{ path: "/", name: "MainPage", component: MainPage }]
});
>>>>>>> Stashed changes
