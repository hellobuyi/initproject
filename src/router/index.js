import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index.vue'
import zhyw from '../config/zhyw'

Vue.use(VueRouter)

const login = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }]
const home = [{
  path: '/',
  name: 'Index',
  component: Index,
  children: [
    {
      path: '',
      component: () => import('../views/home/index.vue')
    }
  ]
}

]
home[0].children = home[0].children.concat(zhyw)
const routes = [...login, ...home]
console.log(routes)
const router = new VueRouter({
  mode: 'history',
  routes
})
// 添加登录拦截
// router.beforeEach((to, from, next) => {
// })

export default router
