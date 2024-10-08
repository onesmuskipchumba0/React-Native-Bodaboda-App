// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from '@firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKxLp-4-Mz1se0gaKvLPvz8LGm1gCEgys",
    authDomain: "boda-boda-48ad1.firebaseapp.com",
    projectId: "boda-boda-48ad1",
    storageBucket: "boda-boda-48ad1.appspot.com",
    messagingSenderId: "491734377134",
    appId: "1:491734377134:android:dc4fd6576d43ffb3eb833f",
    //measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);