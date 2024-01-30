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
  apiKey: "AIzaSyBhkzkAA3Ga9vT-F9lvmklTO0slKWqt0_4",
  authDomain: "shopee-clone-f7094.firebaseapp.com",
  projectId: "shopee-clone-f7094",
  storageBucket: "shopee-clone-f7094.appspot.com",
  messagingSenderId: "87642634915",
  appId: "1:87642634915:web:55c0ff2d1ad85e4b3c9d16",
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
