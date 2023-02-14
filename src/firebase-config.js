// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYQSIJLytqLRPffMOk4cZNq4Qox-AszT4",
  authDomain: "blogwebsite-a2a1f.firebaseapp.com",
  projectId: "blogwebsite-a2a1f",
  storageBucket: "blogwebsite-a2a1f.appspot.com",
  messagingSenderId: "884938103039",
  appId: "1:884938103039:web:d9a632b189589cbd3594ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();