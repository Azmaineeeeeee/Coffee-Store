
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1_qWGMvDwRIRFwota76wSzqOwiCniQsE",
  authDomain: "coffee-store-app-3b068.firebaseapp.com",
  projectId: "coffee-store-app-3b068",
  storageBucket: "coffee-store-app-3b068.appspot.com",
  messagingSenderId: "669145825205",
  appId: "1:669145825205:web:66981bc69b36dbe3df63fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;