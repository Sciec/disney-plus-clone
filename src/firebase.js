// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
    
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZpYdRaFr0oPWrOJ8PvIVpKYmW3mIYPmc",
    authDomain: "disneyplus-clone-7751b.firebaseapp.com",
    projectId: "disneyplus-clone-7751b",
    storageBucket: "disneyplus-clone-7751b.appspot.com",
    messagingSenderId: "378023664462",
    appId: "1:378023664462:web:3fbe2a0e95abfc17d1dc1f",
    measurementId: "G-CJBM1P3YL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, storage };
export default db;

