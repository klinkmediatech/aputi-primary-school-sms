import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.login = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "index.html")
    .catch(e => document.getElementById("msg").innerText = e.message);
};
