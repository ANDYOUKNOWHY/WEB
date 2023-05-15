function zapsat() {
  // Získání obsahu inputu
  var email = document.getElementById("email").value;
  // Uložení emailové adresy do localStorage
  localStorage.setItem("email", email);
  // Vypsání úspěšného zápisu do konzole
  console.log("Úspěšně zapsáno do localStorage.");
}
