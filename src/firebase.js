import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR4mCby8R_u5WjFCLvbN0vh1LrEvnO6j0",
  authDomain: "chatify-bf9a9.firebaseapp.com",
  projectId: "chatify-bf9a9",
  storageBucket: "chatify-bf9a9.appspot.com",
  messagingSenderId: "982077881063",
  appId: "1:982077881063:web:f6fa4d6930b80964f74042",
  measurementId: "G-ED2284KZV4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore()
