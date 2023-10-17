// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDfplwPMHO_Zv5B6mzZuJWADOwd68IjSjY",
  authDomain: "disney-deneme.firebaseapp.com",
  projectId: "disney-deneme",
  storageBucket: "disney-deneme.appspot.com",
  messagingSenderId: "217175934414",
  appId: "1:217175934414:web:3cee103c8aeb3076f4979f",
  measurementId: "G-JW18ZXNCTT"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)