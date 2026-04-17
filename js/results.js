window.calc = function(){
  let total =
    +eng.value + +math.value + +sci.value + +sst.value;

  let grade =
    total >= 320 ? "D1" :
    total >= 300 ? "D2" :
    total >= 280 ? "C3" :
    total >= 260 ? "C4" : "F";

  document.getElementById("out").innerHTML =
    "Total: " + total + "<br>Grade: " + grade;
};
