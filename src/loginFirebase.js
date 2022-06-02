// Import the functions you need from the SDKs you need
import firebase  from "firebase/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAycxqVun9x0ANksa0F2WnV-VUyP7LjMRI",
  authDomain: "email-login-cd215.firebaseapp.com",
  projectId: "email-login-cd215",
  storageBucket: "email-login-cd215.appspot.com",
  messagingSenderId: "1034870494280",
  appId: "1:1034870494280:web:7061ef86daa1f18a9ff47d",
  measurementId: "G-YXR87YTHEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);