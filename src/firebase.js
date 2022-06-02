// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjVeGYyBjYgOdTl51P7zRUIJ0lF1ANl_A",
  authDomain: "react-auth-878af.firebaseapp.com",
  projectId: "react-auth-878af",
  storageBucket: "react-auth-878af.appspot.com",
  messagingSenderId: "437435210982",
  appId: "1:437435210982:web:efd6b32b4582ef743eef27",
  measurementId: "G-7GMY6NCFM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { auth, provider, analytics };
export default getFirestore();