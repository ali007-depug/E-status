// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkrtSLAG8px8eiXf80NwVQkhZ1jr_9Q-g",
  authDomain: "electric-status-60589.firebaseapp.com",
  projectId: "electric-status-60589",
  storageBucket: "electric-status-60589.firebasestorage.app",
  messagingSenderId: "691472985294",
  appId: "1:691472985294:web:477206414b6723a8b1349f",
  measurementId: "G-W60X840W5W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)