// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4uosezlmqy39EoAL0H5TcaXR_ndaOgmM",
  authDomain: "tcbal-93014.firebaseapp.com",
  projectId: "tcbal-93014",
  storageBucket: "tcbal-93014.appspot.com",
  messagingSenderId: "724844607597",
  appId: "1:724844607597:web:4842298777f08d47b6a764",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)