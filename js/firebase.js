import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzFUy1GlE3bl69coV7g9iVTjOJZbkeNs",
  authDomain: "k-link-media.firebaseapp.com",
  projectId: "k-link-media",
  storageBucket: "k-link-media.firebasestorage.app",
  messagingSenderId: "911623086211",
  appId: "1:911623086211:web:f67ab63e5d0bb0f55efbb6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
