import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
export const firebaseConfig = {
  //   apiKey: "AIzaSyCJcL8Q_Blpw2wGIzUCgVRDLcMu-0RsZbk",
  //   authDomain: "fir-auth-e0f9c.firebaseapp.com",
  //   projectId: "fir-auth-e0f9c",
  //   storageBucket: "fir-auth-e0f9c.appspot.com",
  //   messagingSenderId: "1085269073955",
  //   appId: "1:1085269073955:web:9c03e60cfc88d50886d196",
  //   measurementId: "G-K225RGC0Z3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }
