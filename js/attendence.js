import { db } from "./firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.mark = async function(){
  await addDoc(collection(db,"attendance"),{
    lin: lin.value,
    status: status.value,
    date: new Date().toDateString()
  });

  alert("Saved");
};
