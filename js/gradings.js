export function grade(m) {
  if (m >= 80) return "D1";
  if (m >= 75) return "D2";
  if (m >= 70) return "C3";
  if (m >= 65) return "C4";
  if (m >= 60) return "C5";
  if (m >= 55) return "C6";
  if (m >= 50) return "P7";
  if (m >= 45) return "P8";
  return "F9";
}

export function aggregateFromMarks(marks) {
  function points(m) {
    if (m >= 80) return 1;
    if (m >= 75) return 2;
    if (m >= 70) return 3;
    if (m >= 65) return 4;
    if (m >= 60) return 5;
    if (m >= 55) return 6;
    if (m >= 50) return 7;
    if (m >= 45) return 8;
    return 9;
  }

  return marks.map(points).sort((a,b)=>a-b).slice(0,4).reduce((a,b)=>a+b,0);
}

export function division(agg) {
  if (agg <= 12) return "1";
  if (agg <= 24) return "2";
  if (agg <= 36) return "3";
  return "4";
}
