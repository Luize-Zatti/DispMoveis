// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAQA97DMPVQWt6NJ5i9k2WzF2z8wMtRI0",
  authDomain: "saaf-2a7d7.firebaseapp.com",
  projectId: "saaf-2a7d7",
  storageBucket: "saaf-2a7d7.appspot.com",
  messagingSenderId: "574641083099",
  appId: "1:574641083099:web:e3617e5c14fb50cf2332fe",
  measurementId: "G-2FGV1BNNDR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);