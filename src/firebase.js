// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgP1unqHWYmaeMSHJ11-hyCIk8D4619YQ",
  authDomain: "fusion-xtech.firebaseapp.com",
  projectId: "fusion-xtech",
  storageBucket: "fusion-xtech.firebasestorage.app",
  messagingSenderId: "124670963355",
  appId: "1:124670963355:web:5c272e31a482976ea4a03e",
  measurementId: "G-T8MEE5RFY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
