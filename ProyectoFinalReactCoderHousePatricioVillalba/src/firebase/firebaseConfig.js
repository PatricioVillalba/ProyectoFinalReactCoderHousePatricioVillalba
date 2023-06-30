// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcGY7fhSy42-sC9EyuNgTg3ss0b2meq2o",
  authDomain: "cursoreact-4a7da.firebaseapp.com",
  projectId: "cursoreact-4a7da",
  storageBucket: "cursoreact-4a7da.appspot.com",
  messagingSenderId: "256135737654",
  appId: "1:256135737654:web:6c862ea24ceeed8765c397"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);