// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "bloguser-61f82.firebaseapp.com",
  projectId: "bloguser-61f82",
  storageBucket: "bloguser-61f82.appspot.com",
  messagingSenderId: "790921087939",
  appId: "1:790921087939:web:db7a4d260d8881cc4acb76",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
