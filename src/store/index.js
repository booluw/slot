import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/firebaseinit.js'
import moment from 'moment'

var db = firebase.firestore()
window.db = db

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    toEditData: {},
    userRef: ''
  },
  mutations: {
    SAVE_USER_DATA (state, payload) {
      state.user = payload
    },
    MULTATION_DUMP (state, payload) {
      console.log(state)
      console.log(payload)
    },
    EDIT_SLOT (state, payload) {
      state.toEditData = payload
    },
    UPDATE_USER_REF(state, payload) {
      state.userRef = payload
    }
  },
  actions: {
    getUserLocationViaIP({ commit }) {
      return new Promise((resolve, reject) => {
        fetch('https://corsanywhere.herokuapp.com/https://geolocation-db.com/json')
        .then(response => response.json())
        .then(data => resolve(data));
      })
    },
    registerUser({ commit }, payload) {
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
    logOut({ commit }) {
      return new Promise((resolve, reject) => {
        firebase.auth().signOut().then(() => {
          resolve()
        }).catch((error) => {
          reject(error)
        });
      })
    },
    // Adding new entry
    addNewSlot({ commit, dispatch }, payload) {
      let city = "Slot City"

      dispatch('getUserLocationViaIP').then(response => {
        // Fallback for Chrome adblocker issues
        city = response.city == 'Not found' ? city : response.city 
      })

      return new Promise((resolve, reject) => {
        let id = (Math.random() + 1).toString(36).substring(2);
        db.collection('slots').add({
          date: moment().format(),
          author: firebase.auth().currentUser.uid,
          title: payload.title,
          text: payload.text,
          location: city,
          sid: id
        }).then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // Saving editted slots
    editSlot({ commit }, payload) {
      return new Promise((resolve, reject) => {
        // First we search for the docRef using the date of the slot
        let ref = ''
        db.collection('slots').where("date", "==", payload.date).get().then( querySnapshot => {
          querySnapshot.forEach( doc => {
            let dump = doc.data()
            if(dump.title === payload.title && dump.author === payload.author) {
              ref = doc.id
              // Verified that the payload is same as fetched slot.
              db.collection('slots').doc(ref).update({
                text: payload.text
              }).then( ()=> {
                resolve()
              })
            }
          })
        }).catch( error => {
          reject(error)
        })
      })
    },
    // Fetching all slots
    fetchAllSlots({ commit }) {
      let result = []
      return new Promise((resolve, reject) => {
        db.collection("slots").where("author", "==", firebase.auth().currentUser.uid)
        .orderBy("date", "desc")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                result.push(doc.data());
            });
            resolve(result)
        });
      })
    },
    // Fetch single slot
    fetchSlot({ commit }, payload) {
      return new Promise((resolve, reject) => {
        db.collection('slots').where("sid", "==", payload.sid).get().then( querySnapshot => {
          querySnapshot.forEach(doc => {
            let temp = doc.data()
            // Just to prove if the user is same.
            if(temp.author = payload.author) {
              resolve(doc.data())
            }
          });
        }).catch( error => {
          reject(error)
        })
      })
    },
    fetchCurrentUser({ commit }, payload) {
      if(!payload) {
        payload = firebase.auth().currentUser.uid
      }
      return new Promise((resolve, reject) => {
        db.collection('users').where('uid', '==', payload)
          .get().then( querySnapshot => {
            querySnapshot.forEach(doc => {
              let temp = doc.data()
              if (temp.uid === firebase.auth().currentUser.uid) {
                commit('UPDATE_USER_REF', doc.id)
              }
              resolve(doc.data())
            })
          }).catch( error => {
            reject(error)
          })
      })
    },
    updateUserSetting({ commit, state }, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        db.collection('users').doc(state.userRef).update({
          img: payload
        })
      })
    }
  }
})
