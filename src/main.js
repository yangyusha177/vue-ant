import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from  'echarts'
import './assets/css/reset.css'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(localStorage.getItem('username'))
  if (localStorage.getItem('username') === null) {
    if (to.name === 'login') {
      next()
    } else {
      next('/')
    }
  } else {
    //权限设置
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
