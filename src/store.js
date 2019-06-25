import Vue from 'vue'
import Vuex from 'vuex'
import { constantRoutes } from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: []
  },
  getters: {
    getHandleCount: function (state) {
      return state.routes
    }
  },
  mutations: {
    getRoute (state) {
      state.routes = constantRoutes
    }
  },
  actions: {
    handRoute (context) {
      context.commit('getRoute')
    }
  }
})
