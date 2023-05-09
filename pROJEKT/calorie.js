let a = "kcal";
function myFunction() {
    var y = document.getElementById("txt1").value;
    var z = document.getElementById("txt2").value;
    var w = document.getElementById("txt3").value;
    var x = 655 +(13,7 * y) +(5 * z) -(6,8 * w);
    document.getElementById("vysledek").innerHTML = x + a;
  }