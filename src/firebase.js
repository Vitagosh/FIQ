import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCkC7cU4g3PXItq-bZlwbGlxYuhwY-nLrM",
    authDomain: "prototype-afabc.firebaseapp.com",
    projectId: "prototype-afabc",
    storageBucket: "prototype-afabc.firebasestorage.app",
    messagingSenderId: "14090353756",
    appId: "1:14090353756:web:92b8026ab71b3a010a3a99",
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);