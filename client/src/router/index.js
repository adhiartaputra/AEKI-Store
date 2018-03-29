import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Login from '@/components/Login'
import Admin from '@/components/AdminDashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        const user = localStorage.token
        if (user === undefined) {
          next()
        } else {
          next('/home')
        }
      }
    }, {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      props: true
    }, {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
