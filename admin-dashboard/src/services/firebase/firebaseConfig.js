import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBDyuBbNkSQlsuvdesGy7NFJFh0XZnflYg",
    authDomain: "component-hardware-6c483.firebaseapp.com",
    projectId: "component-hardware-6c483",
    storageBucket: "component-hardware-6c483.appspot.com",
    messagingSenderId: "310986839916",
    appId: "1:310986839916:web:7fdcfaee8f31dded40c549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)