// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB03FVE_Zcbp9870Be4eHT9kWwpkbyPMJo",
  authDomain: "myapp-ccb38.firebaseapp.com",
  projectId: "myapp-ccb38",
  storageBucket: "myapp-ccb38.appspot.com",
  messagingSenderId: "201077753222",
  appId: "1:201077753222:web:192d7341b435ec55ef5807",
  measurementId: "G-K5G42HXFSJ",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

const analytics = getAnalytics(app);
