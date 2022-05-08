// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8Axx-YBJKaD6Rw9vLjl6uvdhw6jNzpW4",
  authDomain: "digital-supply-co.firebaseapp.com",
  projectId: "digital-supply-co",
  storageBucket: "digital-supply-co.appspot.com",
  messagingSenderId: "1078333278514",
  appId: "1:1078333278514:web:87e32230f5d248d53fef2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;