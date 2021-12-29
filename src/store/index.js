import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/firebaseinit.js'

var db = firebase.firestore()
window.db = db

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    SAVE_USER_DATA (state, payload) {
      state.user = payload
    },
    MULTATION_DUMP (state, payload) {
      console.log(state)
      console.log(payload)
    }
  },
  actions: {
    registerUser({ commit }, payload) {
      console.log(payload.mail)
      return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(payload.mail, payload.password)
          .then((userCredential) => {
           var user = userCredential.user;
           db.collection('users').add({
             fullname: payload.name,
             uid: user.uid
           }).then(() => {
            commit('SAVE_USER_DATA', user)
            resolve(user)
           })
          })
          .catch((error) => {
            reject(error)
          });
      })
    },
    signIn({commit}, payload) {
      return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(payload.mail, payload.password)
          .then((userCredential) => {
            var user = userCredential.user;
            commit('SAVE_USER_DATA', user)
            resolve()
          })
          .catch((error) => {
            reject(error)
          });
      })
    },
    recoverPassword(payload) {
      return new Promise((resolve, reject) => {
        firebase.auth().sendPasswordResetEmail(email)
          .then(() => {
            resolve()
          })
          .catch((error) => {
            reject(error)
          });
      })
    }
  }
})
