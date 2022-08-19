import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '@/js/firebase'




export const useStoreAuth = defineStore('storeAuth', {
  state: () => {

  },
  actions: {
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User: ', user);
          })
        .catch((error) => {
            console.log('Error: ', error);
          });
    },
    logoutUser() {
      signOut(auth).then(() => {
        console.log('User signed out')
      }).catch((error) => {
        console.log("Error: ", error.message);
      });
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User: ', user)
        })
        .catch((error) => {
          console.log('Error: ', error.message);
        });
    },
  },
  getters: {},
})

