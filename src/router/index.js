import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from '@/firebaseinit.js'

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
      },
      {
        name: 'Explorepage',
        path: '/explore',
        component: () => import('../views/ExploreSlots.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        name: 'Settingspage',
        path: '/settings',
        component: () => import('../views/ExploreSlots.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/',
    name: 'OtherPages',
    component: () => import('../layouts/Others.vue'),
    children: [
      {
        name: 'NewEntry',
        path: '/new',
        component: () => import('../views/NewEntry.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        name: 'Editslot',
        path: '/edit',
        component: () => import('../views/EditSlot.vue'),
        meta: {
          requiresAuth: true
        }
      },
    ]
  },
  {
    path: '/profile',
    name: 'profilePages',
    component: () => import('../views/ProfilePage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/view/:author/:sid',
    name: 'ViewPage',
    component: () => import('../views/ViewSlot.vue'),
    meta: {
      requiresAuth: true
    }
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
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0, behavior: 'smooth' };
  }
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()) {
    next('signin');
  } else {
    next()
  }
})

export default router
