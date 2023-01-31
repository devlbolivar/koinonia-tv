// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd8a6PrNXGocR9s1IGlHGo1KefWkHT6hI",
  authDomain: "koinonia-tv.firebaseapp.com",
  projectId: "koinonia-tv",
  storageBucket: "koinonia-tv.appspot.com",
  messagingSenderId: "770110588729",
  appId: "1:770110588729:web:c4aee34c206132e65f4ae8",
  measurementId: "G-SLLSW669VL",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
