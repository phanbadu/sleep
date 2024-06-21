// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sleep-de99e.firebaseapp.com",
  projectId: "sleep-de99e",
  storageBucket: "sleep-de99e.appspot.com",
  messagingSenderId: "1085559750859",
  appId: "1:1085559750859:web:13774d82137749f3bf9b4e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);