import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let pupils = await getDocs(collection(db,"pupils"));
document.getElementById("p").innerText = pupils.size;
