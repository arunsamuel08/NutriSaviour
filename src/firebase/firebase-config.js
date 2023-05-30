// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL-YlNSSrC5Ro10EcsiUPoKEJuKh5Pn-0",
  authDomain: "nutrisaviour-19aab.firebaseapp.com",
  projectId: "nutrisaviour-19aab",
  storageBucket: "nutrisaviour-19aab.appspot.com",
  messagingSenderId: "377916981584",
  appId: "1:377916981584:web:7707a1c2afbd4f21a52c55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
