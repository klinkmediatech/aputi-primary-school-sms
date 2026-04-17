import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

function age(dob){
  return new Date().getFullYear() - new Date(dob).getFullYear();
}

window.addPupil = async function(){
  await addDoc(collection(db,"pupils"),{
    lin: lin.value,
    name: name.value,
    dob: dob.value,
    parent: parent.value,
    contact: contact.value
  });

  load();
};

async function load(){
  let tbl = document.getElementById("tbl");
  let data = await getDocs(collection(db,"pupils"));

  tbl.innerHTML = "<tr><th>LIN</th><th>Name</th><th>Age</th></tr>";

  data.forEach(d=>{
    let x = d.data();
    tbl.innerHTML += `<tr><td>${x.lin}</td><td>${x.name}</td><td>${age(x.dob)}</td></tr>`;
  });
}

load();
