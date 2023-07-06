// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHgVCj9YWnaURKKBRxMfZvE3upER0Imh0",
  authDomain: "pgfinder-28612.firebaseapp.com",
  projectId: "pgfinder-28612",
  storageBucket: "pgfinder-28612.appspot.com",
  messagingSenderId: "160625944436",
  appId: "1:160625944436:web:74aaca4b60e403c339ee21",
  measurementId: "G-02WV6Q8370"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();