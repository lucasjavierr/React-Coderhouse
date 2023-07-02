import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyBDyuBbNkSQlsuvdesGy7NFJFh0XZnflYg",
    authDomain: "component-hardware-6c483.firebaseapp.com",
    projectId: "component-hardware-6c483",
    storageBucket: "component-hardware-6c483.appspot.com",
    messagingSenderId: "310986839916",
    appId: "1:310986839916:web:b3b38de8f4b325cf40c549"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)