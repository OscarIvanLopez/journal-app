import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpgaxHMCGWE1Y3rDzIL42xx78Ynx6TobQ",
  authDomain: "journal-app-237de.firebaseapp.com",
  projectId: "journal-app-237de",
  storageBucket: "journal-app-237de.appspot.com",
  messagingSenderId: "754068598923",
  appId: "1:754068598923:web:dfd4226616e402b103a48e",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
