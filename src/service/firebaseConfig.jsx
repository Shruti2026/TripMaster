// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "travel-project-a75dd.firebaseapp.com",
  projectId: "travel-project-a75dd",
  storageBucket: "travel-project-a75dd.firebasestorage.app",
  messagingSenderId: "835133452314",
  appId: "1:835133452314:web:5a1f370ae42877335861a3",
  measurementId: "G-7V6FQ57CPV"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//export const analytics = getAnalytics(app);