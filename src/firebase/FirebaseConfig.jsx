// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrcMB67o9TuZT9ALKvLZTzxx9EwgIJs7o",
  authDomain: "ecommerce-cce3a.firebaseapp.com",
  projectId: "ecommerce-cce3a",
  storageBucket: "ecommerce-cce3a.appspot.com",
  messagingSenderId: "388096238477",
  appId: "1:388096238477:web:b8737dafbb1bafbe2393c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }