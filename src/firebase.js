import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_blkmHkOGiGeJQjpgYtf18AElFzx9hWc",
  authDomain: "frontendmentor-23498.firebaseapp.com",
  projectId: "frontendmentor-23498",
  storageBucket: "frontendmentor-23498.appspot.com",
  messagingSenderId: "724251241019",
  appId: "1:724251241019:web:6cd6cf413fa8639a108a1e",
  measurementId: "G-LKN4X13KJY",
};

firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const db = firebase.database();
const store = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const signIn = (provider, history) => {
  switch (provider) {
    case "Google":
      auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      break;
    default:
      break;
  }
};

export { analytics, db, store, auth, signIn, storage };
