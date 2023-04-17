// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "COPY_FROM_FIREBASE",
  authDomain: "COPY_FROM_FIREBASE",
  projectId: "COPY_FROM_FIREBASE",
  storageBucket: "COPY_FROM_FIREBASE",
  messagingSenderId: "COPY_FROM_FIREBASE",
  appId: "COPY_FROM_FIREBASE",
  measurementId: "COPY_FROM_FIREBASE"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// export const db = getFirestore(app);