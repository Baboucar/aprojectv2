import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Homepage from './components/Homepage';
import Functionalities from './components/Functionalities';
import Tarif from './components/Tarif';
import Metires from './components/Metires';
import Api from  './components/Api';
import { from } from 'core-js/fn/array';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
    path:'/functionalities',
    name:'functionalities',
    component:Functionalities
    },
    {
    path:'/metires',
    name:'metires',
    component:Metires
    },
    {
     path:'/tarif',
     name:'tarif',
     component:Tarif
    },
    {
    path:'/api',
    name:'api',
    component:Api
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
