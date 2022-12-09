// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-A3v7MnV44iFiGVMDoOz9sVz6uXCP3qk",
  authDomain: "christmas-muvies.firebaseapp.com",
  projectId: "christmas-muvies",
  storageBucket: "christmas-muvies.appspot.com",
  messagingSenderId: "324195823082",
  appId: "1:324195823082:web:9d090f0d3df8e3a3425693"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);