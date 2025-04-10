// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0k_vLd3AyeFPJXEevs5ijqWubCbKy3ts",
  authDomain: "loginh-68b55.firebaseapp.com",
  projectId: "loginh-68b55",
  storageBucket: "loginh-68b55.appspot.com",
  messagingSenderId: "333822781576",
  appId: "1:333822781576:web:6a70609c071130ec30173d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
