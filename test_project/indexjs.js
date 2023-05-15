function zapsat() {
  var email = document.getElementById("email").value;

  localStorage.setItem("email", email);

  console.log("Úspěšně zapsáno do localStorage.");
}
