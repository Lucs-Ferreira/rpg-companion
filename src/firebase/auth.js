// src/firebase/auth.js
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { app } from "./firebase-config.js";

export const auth = getAuth(app);

export function login(email, senha) {
  return signInWithEmailAndPassword(auth, email, senha);
}

export function register(email, senha) {
  return createUserWithEmailAndPassword(auth, email, senha);
}

export function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}