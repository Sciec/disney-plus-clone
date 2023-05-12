const firebaseConfig = {
        apiKey: "AIzaSyDZpYdRaFr0oPWrOJ8PvIVpKYmW3mIYPmc",
        authDomain: "disneyplus-clone-7751b.firebaseapp.com",
        projectId: "disneyplus-clone-7751b",
        storageBucket: "disneyplus-clone-7751b.appspot.com",
        messagingSenderId: "378023664462",
        appId: "1:378023664462:web:3fbe2a0e95abfc17d1dc1f",
        measurementId: "G-CJBM1P3YL4"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;