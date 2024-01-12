// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaHQpJ-TcgGV8XoyzxD9daxz0xZnCg66w",
  authDomain: "netflixgpt-cb059.firebaseapp.com",
  projectId: "netflixgpt-cb059",
  storageBucket: "netflixgpt-cb059.appspot.com",
  messagingSenderId: "378817948477",
  appId: "1:378817948477:web:0ae2d5b993f2b5441db354",
  measurementId: "G-QTWL0LNQWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();