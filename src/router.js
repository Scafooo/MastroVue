import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Index.vue'
import About from './views/About/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
