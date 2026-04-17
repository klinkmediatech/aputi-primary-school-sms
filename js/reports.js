import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { grade, aggregateFromMarks, division } from "./grading.js";

window.generatePDF = async function () {

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let lin = document.getElementById("lin").value;
  let level = document.getElementById("level").value;

  let pupilsSnap = await getDocs(collection(db, "pupils"));
  let resultsSnap = await getDocs(collection(db, "results"));

  let pupil = null;
  let result = null;

  pupilsSnap.forEach(d => {
    if (d.data().lin === lin) pupil = d.data();
  });

  resultsSnap.forEach(d => {
    if (d.data().lin === lin) result = d.data();
  });

  if (!pupil || !result) {
    alert("Data not found!");
    return;
  }

  // HEADER
  doc.setFontSize(16);
  doc.text("APUTI PRIMARY SCHOOL", 40, 20);
  doc.setFontSize(12);
  doc.text("INVEST IN EDUCATION", 60, 30);
  doc.text("Since 1943", 70, 40);

  doc.text("REPORT CARD", 70, 60);
  doc.text("Name: " + pupil.name, 20, 80);
  doc.text("LIN: " + pupil.lin, 20, 90);

  // =========================
  // 📘 P1–P3
  // =========================
  if (level === "p1p3") {

    let total =
      result.eng + result.math + result.sci + result.sst +
      result.re + result.lit + result.num;

    doc.text("LEVEL: P1 - P3", 20, 110);

    doc.text("English: " + result.eng, 20, 130);
    doc.text("Math: " + result.math, 20, 140);
    doc.text("Science: " + result.sci, 20, 150);
    doc.text("SST: " + result.sst, 20, 160);
    doc.text("RE: " + result.re, 20, 170);
    doc.text("Literacy: " + result.lit, 20, 180);
    doc.text("Numeracy: " + result.num, 20, 190);

    doc.text("TOTAL: " + total, 20, 210);
    doc.text("No grading (Lower Primary)", 20, 230);
  }

  // =========================
  // 📗 P4–P7 UNEB
  // =========================
  else if (level === "p4p7") {

    let marks = [result.eng, result.math, result.sci, result.sst];

    let total = marks.reduce((a,b)=>a+b,0);
    let avg = total / 4;

    let agg = aggregateFromMarks(marks);
    let div = division(agg);

    let y = 110;

    doc.text("LEVEL: P4 - P7 (UNEB)", 20, y);
    y += 20;

    function line(sub, mark) {
      doc.text(`${sub}: ${mark} (${grade(mark)})`, 20, y);
      y += 10;
    }

    line("English", result.eng);
    line("Mathematics", result.math);
    line("Science", result.sci);
    line("SST", result.sst);

    doc.text("TOTAL: " + total, 20, y + 10);
    doc.text("AVG: " + avg.toFixed(1), 20, y + 20);
    doc.text("AGG: " + agg, 20, y + 30);
    doc.text("DIV: " + div, 20, y + 40);
  }

  doc.save(pupil.lin + "_REPORT.pdf");
};
