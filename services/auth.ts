import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

export async function login(email: string, senha: string) {
  const userCredential = await signInWithEmailAndPassword(auth, email, senha);
  return userCredential.user;
}

export async function register(email: string, senha: string) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
  return userCredential.user;
}

export async function logout() {
  await signOut(auth);
}  
