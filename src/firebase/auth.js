// src/firebase/auth.js
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase-config.js";

export const auth = getAuth(app);

export function login(email, senha) {
  return signInWithEmailAndPassword(auth, email, senha);
}
