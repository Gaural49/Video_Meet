import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "video-meet-39054.firebaseapp.com",
  projectId: "video-meet-39054",
  storageBucket: "video-meet-39054.appspot.com",
  messagingSenderId: "479144616827",
  appId: "1:479144616827:web:eae484f4f31507c617d3de",
  measurementId: "G-0FK0V5BLJM"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
