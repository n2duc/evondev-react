import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNH-BM9GRMV3P61vszLhSLSWi5cV4Fm6A",
    authDomain: "learn-firebase-c4b33.firebaseapp.com",
    projectId: "learn-firebase-c4b33",
    storageBucket: "learn-firebase-c4b33.appspot.com",
    messagingSenderId: "359114492795",
    appId: "1:359114492795:web:f5e842b081dadfb7a88bde",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
