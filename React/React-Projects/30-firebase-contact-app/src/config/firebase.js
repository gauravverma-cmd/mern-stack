// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4zYRiybfO0gJ8s401Zj-qlTed12Niy9Y",
  authDomain: "contact-app-d177c.firebaseapp.com",
  projectId: "contact-app-d177c",
  storageBucket: "contact-app-d177c.firebasestorage.app",
  messagingSenderId: "622841302405",
  appId: "1:622841302405:web:cf1717c22966d7359688ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)