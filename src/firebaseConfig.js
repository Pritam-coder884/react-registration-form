// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWT0By65hVP8w-cgPrsplGeZB53YOAptQ",
  authDomain: "fir-registration-form.firebaseapp.com",
  projectId: "fir-registration-form",
  storageBucket: "fir-registration-form.appspot.com",
  messagingSenderId: "785417202791",
  appId: "1:785417202791:web:5be0559c0b314812baf8c2",
  measurementId: "G-SQ6Q93VLSD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);