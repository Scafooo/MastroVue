import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home/View/Index.vue'
import About from './pages/About/View/Index.vue'
import OntologyBrowsing from './pages/OntologyBrowsing/View/Index.vue';

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
    },
    {
      path: '/ontologyBrowsing',
      name: 'ontologyBrowsing',
      component: OntologyBrowsing
    }
  ]
})
