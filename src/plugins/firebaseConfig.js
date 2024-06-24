import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOE5z6izwxx4BswW-UNGHloAt5IQ43wEg",
  authDomain: "podc-78dc9.firebaseapp.com",
  databaseURL: "https://podc-78dc9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "podc-78dc9",
  storageBucket: "podc-78dc9.appspot.com",
  messagingSenderId: "224932543453",
  appId: "1:224932543453:web:0e335334363e12dec4d434"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()


export { app, auth }
