// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA677JaI4oELlnb5Cdx8I9jf0unmUiLOhE",
  authDomain: "online-group-study-pro.firebaseapp.com",
  projectId: "online-group-study-pro",
  storageBucket: "online-group-study-pro.appspot.com",
  messagingSenderId: "925644062180",
  appId: "1:925644062180:web:184131c3d578986fb55bf1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
