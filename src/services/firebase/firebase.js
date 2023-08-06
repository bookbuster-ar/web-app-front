import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAZN3_5DVO_2CEvwP6ORMtLkycbzN85fwg',
  authDomain: 'authentication-bookbuster.firebaseapp.com',
  projectId: 'authentication-bookbuster',
  storageBucket: 'authentication-bookbuster.appspot.com',
  messagingSenderId: '288575785820',
  appId: '1:288575785820:web:0c79bbde0b2596ee748f99',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
