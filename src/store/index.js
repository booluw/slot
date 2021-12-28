import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    registerUser(payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        resolve()
        reject()
      })
    },
    signIn(payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        resolve()
        reject()
      })
    },
    recoverPassword(payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        resolve()
        reject()
      })
    }
  },
  modules: {
  }
})
