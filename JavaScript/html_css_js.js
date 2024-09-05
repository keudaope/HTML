const button = document.querySelector(".js-painike");
console.log(button.classList.contains("js-painike"));
function tarkista(nappi) {
  const painike = document.querySelector(nappi);
  if (!painike.classList.contains("vaihtuu")) {
    sammutaPainikkeet();
    painike.classList.add("vaihtuu");
  } else {
    painike.classList.remove("vaihtuu");
  }
}
function sammutaPainikkeet() {
  const painike = document.querySelector(".vaihtuu");
  if (painike) {
    painike.classList.remove("vaihtuu");
  }
}
function laske() {
  const summa = document.getElementById("amazon").value;
  if (summa < 0) {
    document.getElementById("v2").innerHTML = "Summa ei voi olla 0 pienempi";
    document.getElementById("v2").style.color = "red";
  } else {
    document.getElementById("v2").innerHTML = "Hinta on " + summa + " euroa";
  }
}
/* Laskin */
let calculation = localStorage.getItem("calculation") || "";

// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(value) {
  calculation += value;

  // Display the calculation on the page
  // instead of console.log
  displayCalculation();

  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  document.querySelector(".js-calculation").innerHTML = calculation;
}
