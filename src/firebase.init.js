// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARuPCh6BWV3kgnISr_BIv3eZQ29b7Vdyw",
  authDomain: "email-password-auth-bc0c5.firebaseapp.com",
  projectId: "email-password-auth-bc0c5",
  storageBucket: "email-password-auth-bc0c5.firebasestorage.app",
  messagingSenderId: "574869526050",
  appId: "1:574869526050:web:ae1fa354b60f3cf02e1c7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);