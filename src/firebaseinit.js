import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCt2QBVAcSO6uA7hQbGNstml32obsTJp4s",
  authDomain: "todooer.firebaseapp.com",
  projectId: "todooer",
  storageBucket: "todooer.appspot.com",
  messagingSenderId: "565883537934",
  appId: "1:565883537934:web:f2d1089a06db6a5b7c0a5f"
};

firebase.initializeApp(firebaseConfig);

firebase.getCurrentUser = () => {
  return new Promise ((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject)
  })
}

export default firebase;