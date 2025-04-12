// src/firebase/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMNHn-bbBbmkuRIoMNBaP8_vu9edkPdVY",
  authDomain: "rpg-dnd-a9086.firebaseapp.com",
  projectId: "rpg-dnd-a9086",
  storageBucket: "rpg-dnd-a9086.firebasestorage.app",
  messagingSenderId: "158439135234",
  appId: "1:158439135234:web:bd5bae2d13ce36a664ef1b",
  measurementId: "G-WX41KTQ8LN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // <- aqui está o segredo

export { app, db };
