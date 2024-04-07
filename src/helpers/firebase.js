import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD52nws70rZSOE_rwz6gaDOh35x5y3KVnY",
    authDomain: "portfolio-4f7db.firebaseapp.com",
    projectId: "portfolio-4f7db",
    storageBucket: "portfolio-4f7db.appspot.com",
    messagingSenderId: "525952919971",
    appId: "1:525952919971:web:2c26de0203fd5492469216",
    measurementId: "G-V86BKX8Q6T"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAnalytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp);