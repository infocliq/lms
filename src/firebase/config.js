import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "vnzone-525a9.firebaseapp.com",
    projectId: "vnzone-525a9",
    storageBucket: "vnzone-525a9.appspot.com",
    messagingSenderId: "415751017264",
    appId: "1:415751017264:web:6e777baa0a45e2e594aef5",
    measurementId: "G-W1FMPP6SC1"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);