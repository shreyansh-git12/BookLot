// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxe_RNChHRiKuFMPhmDtu72eQYkUjl_7Q",
  authDomain: "final-eb219.firebaseapp.com",
  projectId: "final-eb219",
  storageBucket: "final-eb219.appspot.com",
  messagingSenderId: "727142720075",
  appId: "1:727142720075:web:3cf929f1f75556aaf7a3ce",
  measurementId: "G-K7BRC2KMZB"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
