import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider,getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDuyshcDxx4-Qd1ozn0wEzpwipVeWlGJr0",
  authDomain: "whatsapp-2-4472a.firebaseapp.com",
  projectId: "whatsapp-2-4472a",
  storageBucket: "whatsapp-2-4472a.appspot.com",
  messagingSenderId: "900481814797",
  appId: "1:900481814797:web:b3c6a4366e0a51e832a044",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider()