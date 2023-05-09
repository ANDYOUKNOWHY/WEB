let a = "kcal";
function myFunction() {
  var vaha = document.getElementById("vaha").value;
  var vyska = document.getElementById("vyska").value;
  var vek = document.getElementById("vek").value;

  if (document.getElementsByName("gender")[0].value == "zena") {
    calories = 655.09 + 9.56 * vaha + 1.84 * vyska - 4.67 * vek;
  } else {
    calories = 66.47 + 13.75 * vaha + 5 * vyska - 6.75 * vek;
  }

  if (document.getElementsByName("cil")[0].value == "zhub") {
    calories *= 0.87;
  } else if (document.getElementsByName("cil")[0].value == "zust") {
    calories = calories;
  } else {
    calories *= 1.15;
  }

  calories = Math.trunc(calories);
  document.getElementById("vysledek").innerHTML = calories + a;
}