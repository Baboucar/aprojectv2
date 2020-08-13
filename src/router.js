import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Homepage from './components/Homepage';
import Functionalities from './components/Functionalities';
import Tarif from './components/Tarif';
import Metires from './components/Metires';
import Api from  './components/Api';
import Blog from './components/Blog';
import  Details from './components/Details';
import Sommes from './components/Sommes';
import Marche from './components/Marche';
import Recruitment from './components/Recruitment';
import ProcessForm from './components/ProcessForm';

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
    path:'/form',
    name:'form',
    component:ProcessForm
    },
    {
     path:'/recruitment',
     name:'/recruitment',
     component:Recruitment
    },
    {
     path:'/marche',
     name:'marche',
     component:Marche
    },
    {
    path:'/metires',
    name:'metires',
    component:Metires
    },
    {
     path:'/blog',
     name:'blog',
     component:Blog
    },
    {
     path:'/tarif',
     name:'tarif',
     component:Tarif
    },
    {
      path:'/sommes',
      name:'sommes',
      component:Sommes
      },
    {
    path:'/api',
    name:'api',
    component:Api
    },
    {
      path:'/:id',
      name:'details',
      component:Details
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
