// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6_t0EkGarHis53mKL8R4lrEvnkXQWyC8",
  authDomain: "tripmaster-ai-0003.firebaseapp.com",
  projectId: "tripmaster-ai-0003",
  storageBucket: "tripmaster-ai-0003.firebasestorage.app",
  messagingSenderId: "333653650333",
  appId: "1:333653650333:web:624259008cb332b24edd74",
  measurementId: "G-W0MNGE381E"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//export const analytics = getAnalytics(app);