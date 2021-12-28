import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from '@/firebaseinit.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Base',
    component: () => import('../layouts/Base.vue'),
    children: [
      {
        name: 'Homepage',
        path: '',
        component: () => import('../views/Home.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "auth" */ '../views/SignIn.vue')
  },
  {
    path: '/register',
    name: 'RegisterUser',
    component: () => import(/* webpackChunkName: "auth" */ '../views/RegisterUser.vue')
  },
  {
    path: '/recover-password',
    name: 'RecoverPassword',
    component: () => import(/* webpackChunkName: "auth" */ '../views/RecoverPassword.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()) {
    next('signin');
  } else {
    next()
  }
})*/

export default router
