// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase/compat/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCabGO-9WSwM-0ioTEOTLJUGWrod8K5byQ",
    authDomain: "e-buy-2011.firebaseapp.com",
    projectId: "e-buy-2011",
    storageBucket: "e-buy-2011.appspot.com",
    messagingSenderId: "256374735574",
    appId: "1:256374735574:web:493dfb4bde6aee13c53f77",
    measurementId: "G-D4VX8REJX0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};