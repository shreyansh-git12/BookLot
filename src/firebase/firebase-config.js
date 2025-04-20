// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4AaxLZbz_QSHIm7J8VlrsLJAP6rFYXl4",
  authDomain: "booklot-20.firebaseapp.com",
  projectId: "booklot-20",
  storageBucket: "booklot-20.firebasestorage.app",
  messagingSenderId: "264786625283",
  appId: "1:264786625283:web:e86e0b7fc35b9e64c65f36",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
