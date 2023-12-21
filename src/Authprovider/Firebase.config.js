// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPTglRs154AMv4TNK6pOMbt0EGmBqI0rY",
  authDomain: "task-manager-13ade.firebaseapp.com",
  projectId: "task-manager-13ade",
  storageBucket: "task-manager-13ade.appspot.com",
  messagingSenderId: "908903170250",
  appId: "1:908903170250:web:148c4b1821233dbb767433",
  measurementId: "G-9S421HKVB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
