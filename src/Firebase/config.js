// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvs8f3Ix07r9LfioCf0EQkvsIruKDZ2KE",
  authDomain: "job-listing-55ffe.firebaseapp.com",
  projectId: "job-listing-55ffe",
  storageBucket: "job-listing-55ffe.appspot.com",
  messagingSenderId: "948421187398",
  appId: "1:948421187398:web:50701e0dd38eaf168ab747",
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();

export { firebase, firestore, app, auth };
