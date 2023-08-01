// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZN3_5DVO_2CEvwP6ORMtLkycbzN85fwg",
  authDomain: "authentication-bookbuster.firebaseapp.com",
  projectId: "authentication-bookbuster",
  storageBucket: "authentication-bookbuster.appspot.com",
  messagingSenderId: "288575785820",
  appId: "1:288575785820:web:0c79bbde0b2596ee748f99"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();