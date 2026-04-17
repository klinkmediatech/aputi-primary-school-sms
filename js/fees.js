import { db } from "./firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.pay = async function(){
  await addDoc(collection(db,"fees"),{
    lin: lin.value,
    amount: Number(amount.value),
    date: new Date().toDateString()
  });

  alert("Saved");
};
