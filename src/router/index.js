import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home'
import City from'../components/city/City.vue'
import Detail from '../components/detail/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
  /* :id 动态路由 */
]

const router = new VueRouter({
  routes,
  /* 每次进入新页面，都会回到顶部 */
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
