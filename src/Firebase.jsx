// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByYg9UrNvL_YIlcdTCmcCvaxTQqtZ1r8M",
  authDomain: "catchy-73a77.firebaseapp.com",
  projectId: "catchy-73a77",
  storageBucket: "catchy-73a77.appspot.com",
  messagingSenderId: "18991584818",
  appId: "1:18991584818:web:92b5ed8c03abb12ab9ce2b",
  measurementId: "G-W7GM129KQP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;