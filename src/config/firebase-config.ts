import { getAuth } from '@firebase/auth';
import { initializeApp } from 'firebase/app';
console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-L34LGCBCQ1"
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth();

export { firebaseApp, firebaseAuth };
