import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBI03_RbgSxXpR9ViE5sVGQjFHwek8SvKw",
  authDomain: "cryptera-1342c.firebaseapp.com",
  projectId: "cryptera-1342c",
  storageBucket: "cryptera-1342c.appspot.com",
  messagingSenderId: "1067324221114",
  appId: "1:1067324221114:web:aa73a717d1ac5ec7bbc483",
});

export default db = getFirestore();
