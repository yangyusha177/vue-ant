import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//constantRoutes:代表不需要动态判断权限的路由
export const constantRoutes = [
  {
    path: '/',
    name: 'login',
    meta: {
      title: '登录',
      isLogin: true
    },
    component: () => import('./views/Login.vue')
  },
  {
    path: '/home',
    name: 'Dashaboard',
    meta: {
      title: 'Dashaboard',
      icon: 'home'
    },
    component: () => import('./views/Home.vue')
  },
  {
    path: '/documentation',
    name: 'documentation',
    meta: {
      title: '增值业务',
      icon: 'inbox'
    },
    component: () => import(/* webpackChunkName: "about" */ './views/Documentation.vue')
  },
  {
    path: '/guide',
    name: 'guide',
    meta: {
      title: 'Guide',
      icon: 'notification'
    },
    component: () => import('./views/Guide.vue')
  },
  {
    path: '/permission',
    name: 'permission',
    meta: {
      title: 'Permission',
      icon: 'setting'
    },
    component: () => import('./views/Permission.vue')
  },
  {
    path: '/icons',
    name: 'icons',
    meta: {
      title: 'Icons',
      icon: 'smile'
    },
    component: () => import('./views/Icons.vue')
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      title: 'Components',
      icon: 'share-alt'
    },
    component: () => import('./views/Components.vue')
  },
  {
    path: '/chart',
    name: 'chart',
    meta: {
      title: 'Chart',
      icon: 'star'
    },
    component: () => import('./views/Chart.vue')
  },
  {
    path: '/table',
    name: 'table',
    meta: {
      title: 'Table',
      icon: 'inbox'
    },
    component: () => import('./views/Table.vue')
  },
  {
    path: '/example',
    name: 'example',
    meta: {
      title: 'example',
      icon: 'hdd'
    },
    component: () => import('./views/Example.vue')
  },
  {
    path: '/tab',
    name: 'tab',
    meta: {
      title: 'Tab',
      icon: 'tags'
    },
    component: () => import('./views/Tab.vue')
  },
  {
    path: '/error',
    name: 'errpr',
    meta: {
      title: 'Errpr Page',
      icon: 'link'
    },
    component: () => import('./views/Error.vue')
  },
  {
    path: '/enterNumber',
    name: 'enternumber',
    meta: {
      title: 'EnterNumber',
      icon: 'link'
    },
    component: () => import('./views/documentation/EnterNumber.vue')
  }
]

// export const carInsurance = [
//   {
//     path: '/enterNumber',
//     name: 'enternumber',
//     component: () => import('./views/documentation/EnterNumber.vue')
//   }
// ]

export default new Router({
  routes: constantRoutes
})
