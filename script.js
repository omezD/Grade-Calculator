function calcy() {
  
  let b = document.getElementById("b").value.toUpperCase();
  let e = document.getElementById("e").value.toUpperCase();
  let s = document.getElementById("s").value.toUpperCase();
  let m = document.getElementById("m").value.toUpperCase();
  let h = document.getElementById("h").value.toUpperCase();
  
  
  function gradeToPoint(grade) {
    switch (grade) {
      case "A+":
        return 10;
      case "A":
        return 9;
      case "B+":
        return 8;
      case "B":
        return 7;
      case "C+":
        return 6;
      case "C":
        return 5;
      case "D+":
        return 4;
      case "D":
         return 3;

      default:
        return 0; // Invalid grade
    }
  }

  
  let totalPoints =
    gradeToPoint(b) +
    gradeToPoint(e) +
    gradeToPoint(s) +
    gradeToPoint(m) +
    gradeToPoint(h);

  // Calculate CGPI
  let cgpi = (totalPoints / 5).toFixed(2);

  
  if (totalPoints > 0) {
    document.getElementById("showdata").innerHTML =
      "Your CGPI is: " + cgpi + " out of 10";
  } else {
    document.getElementById("showdata").innerHTML = "Please enter valid grades.";
  }
}
