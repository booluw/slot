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
    signIn({ commit }, payload) {
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
    recoverPassword({ commit }, payload) {
      return new Promise((resolve, reject) => {
        firebase.auth().sendPasswordResetEmail(payload.mail)
          .then(() => {
            resolve()
          })
          .catch((error) => {
            reject(error)
          });
      })
    },
    // Adding new entry
    addNewSlot({ commit }, payload) {
      return new Promise((resolve, reject) => {
        let id = (Math.random() + 1).toString(36).substring(2);
        db.collection('slots').add({
          date: new Date(),
          author: firebase.auth().currentUser.uid,
          title: payload.title,
          text: payload.text,
          location: 'Earth',
          sid: id
        }).then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
})
