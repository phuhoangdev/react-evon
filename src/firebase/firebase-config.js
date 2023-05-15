import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyAaV6ZBLVtHlpKxgeV9XvG2FbvKGbA8Z54",
     authDomain: "learn-firebase-d547e.firebaseapp.com",
     projectId: "learn-firebase-d547e",
     storageBucket: "learn-firebase-d547e.appspot.com",
     messagingSenderId: "347019088017",
     appId: "1:347019088017:web:5e558b70cea47b5db0af30",
};

const app = initializeApp(firebaseConfig);

//Init Services
export const db = getFirestore(app);
export const auth = getAuth(app);
